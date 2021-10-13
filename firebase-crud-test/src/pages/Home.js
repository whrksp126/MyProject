import React, {useState, useEffect} from 'react';
import fireDb from '../firebase';
import {Link} from 'react-router-dom';
import './Home.css';
import { toast } from 'react-toastify';

const Home = () => {
  const [data, setData] = useState({});
  const [sortedData, setSortedData] = useState([]);
  const [sort, setSort] = useState(false);

  // 초기 홈화면에 데이터 불러오기
  useEffect(() => {
    fireDb.child('contacts').on('value', (snapshout) => {
      if (snapshout.val() !== null) {
        setData({...snapshout.val()});
      } else {
        setData({});
      }
    })

    return () => {
      setData({});
    };
  }, [])

  // 삭제 버튼 기능 구현
  const onDelete = (id) => {
    if(window.confirm('해당 연락처를 삭제하시겠습니까?')){
      fireDb.child(`contacts/${id}`).remove((err)=>{
        if(err) {
          toast.error(err)
        } else {
          toast.success('연락처가 성공적으로 삭제되었습니다.');
        }
      })
    }
  }

  // 정렬 기준 기능 구현
  const handleChange = (e) => {
    setSort(true);
    fireDb.child('contacts')
    // orderByChild는 데이터베이스에서 쿼리를 작성하는 정렬 함수이다.
    .orderByChild(`${e.target.value}`)
    .on('value', (snapshot) => {
      let sortedData = []
      snapshot.forEach((snap) => {
        sortedData.push(snap.val())
      });
      setSortedData(sortedData)
    })
  }

  const handleReset = () => {
    setSort(false)
    // 전체적으로 초기화 시켜줌
      fireDb.child('contacts').on('value', (snapshout) => {
        if (snapshout.val() !== null) {
          setData({...snapshout.val()});
        } else {
          setData({});
        }
      })
  }

  // 필터로 활성화만 보이거나 비활성화만 보이게 해줌
  const filterData = (value) => {
    fireDb.child('contacts')
    .orderByChild('status')
    // 값이 일치하는 것만 보이게 함
    .equalTo(value)
    .on('value', (snapshot) => {
      if(snapshot.val()){
        const data = snapshot.val();
        setData(data);
      }
    })
  }

  return (
    <div style={{marginTop:"100px"}}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{textAlign: 'center'}}>No.</th>
            <th style={{textAlign: 'center'}}>이름</th>
            <th style={{textAlign: 'center'}}>이메일</th>
            <th style={{textAlign: 'center'}}>연락처</th>
            <th style={{textAlign: 'center'}}>상태</th>
            {/* sort가 false 일때만 기능버튼을 활성화 하라 */}
            {!sort && <th style={{textAlign: 'center'}}>기능 버튼</th> }
          </tr>
        </thead>

        {/* sort가 false 일때만 아래 내용을 활성화 하라 */}
        {!sort && (
          <tbody>
            {Object.keys(data).map((id, index)=>{

              return(
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].email}</td>
                  <td>{data[id].contact}</td>
                  <td>{data[id].status}</td>
                  
                  <td>
                    <Link to={`/update/${id}`}>
                      <button className="btn btn-edit">수정</button>
                    </Link>
                    <button 
                      className="btn btn-delete" 
                      onClick={ ()=> onDelete(id) }
                    >
                      삭제
                    </button>
                    <Link to={`/View/${id}`}>
                      <button className="btn btn-view">상세</button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        )}
        
        {/* sort가 true 일 때만 아래 내용을 활성화 하라 */}
        {sort && (
          <tbody>
            {sortedData.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        )}

      </table>

      {/* 정렬 기준 */}
      <label>정렬 기준 :</label>
      <select className="dropdown" name="colValue" onChange={handleChange}>
        <option>선택 해주세요</option>
        <option value="name">이름</option>
        <option value="email">이메일</option>
        <option value="contact">연락처</option>
        <option value="status">상태</option>
      </select>
      <button className="btn btn-reset" onClick={handleReset}>
        초기화  
      </button>
      <br />

      {/* 버튼을 눌러 활성화, 비활성화에 따라 화면을 변경해줌 */}
      <label>상태 : </label>
      <button className="btn btn-active" onClick={()=>filterData("활성화")}>활성화</button>
      <button className="btn btn-inactive" onClick={()=>filterData("비활성화")}>비활성화</button>
      <br />
    </div>
  )
}

export default Home
