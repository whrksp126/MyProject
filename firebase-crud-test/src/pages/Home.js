import React, {useState, useEffect} from 'react'
import fireDb from '../firebase'
import {Link} from 'react-router-dom'
import './Home.css'
import { toast } from 'react-toastify'

const Home = () => {
  const [data, setData] = useState({});
  const [sortedData, setSortedData] = useState([]);
  const [sort, setSort] = useState(false);

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

  const handleChange = (e) => {
    setSort(true);
    fireDb.child('contacts')
    .orderByChild(`${e.target.value}`)
    .on('value', (snapshot) => {
      let sorteData = []
      snapshot.forEach((snap)=> {
        sorteData.push(snap.val())
      });
      setSortedData(sortedData)
    })
  }

  const handleReset = () => {

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
            {!sort && <th style={{textAlign: 'center'}}>기능 버튼</th> }
          </tr>
        </thead>
        {!sort && (
          <tbody>
            {Object.keys(data).map((id, index)=>{
              return(
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].email}</td>
                  <td>{data[id].contact}</td>
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

        {sort && (
          <tbody>
            {sortedData.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                </tr>
              );
            })}
          </tbody>
        )}

      </table>
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
    </div>
  )
}

export default Home
