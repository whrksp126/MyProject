import React, {useState, useEffect} from 'react'
import {useLocation, Link} from 'react-router-dom'
import fireDb from '../firebase'
import "./Search.css"

const Search = () => {
  const [ data, setData ] = useState({});

  // url에 저장된 name 뒤 값을 가져옴
  const useQuery = () => {
    // 새로운 객체를 생성하고 반환합니다.
    // useLocation은 URL이 바뀔때마다 새로운 location이 반환되는 useState 처럼 생각할 수 있다.
    // useLocation()을 실행한 내용을 출력하면 pathname과 search 라는 객체를 출력합니다.
    // pathname은 쿼리스트링을 제외한 /home이런것이 출력 되고
    // search는 쿼리 스트링을 분석해야하는 상황에서 유용합니다.
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  // url의 쿼리 스트링 분석하여 name 대한 값을 가져옴
  let search = query.get("name");

  useEffect(() => {
    searchData();
  }, [search]);

  // database에서 검색한 결과랑 일치하는 것을 가져옴
  const searchData = () => {
    fireDb.child("contacts")
    // 
    .orderByChild('name')
    .equalTo(search)
    .on('value', (snapshout) => {
      if (snapshout.val()){
        const data = snapshout.val();
        setData(data);
      }
    })
  }

  return (
    <>
      <div style={{marginTop:"100px"}}>

        {Object.keys(data).length === 0 ? (
          <h2>
            해당 이름으로 검색된 항목이 없습니다 : {query.get('name')}
          </h2>
        ) : (
          <table className="styled-table">
          <thead>
            <tr>
              <th style={{textAlign: 'center'}}>No.</th>
              <th style={{textAlign: 'center'}}>이름</th>
              <th style={{textAlign: 'center'}}>이메일</th>
              <th style={{textAlign: 'center'}}>연락처</th>
              <th style={{textAlign: 'center'}}>상태</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((id, index)=>{
              return(
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].email}</td>
                  <td>{data[id].contact}</td>
                  <td>{data[id].status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        ) }
        <Link to ="/" >
          <button className="btn btn-edit">돌아가기</button>
        </Link>
      </div>
    </>
  )
}

export default Search
