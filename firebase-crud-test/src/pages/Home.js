import React, {useState, useEffect} from 'react'
import fireDb from '../firebase'
import {Link} from 'react-router-dom'
import './Home.css'
import { toast } from 'react-toastify'

const Home = () => {
  const [data, setData] = useState({});
  
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

  return (
    <div style={{marginTop:"100px"}}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{textAlign: 'center'}}>No.</th>
            <th style={{textAlign: 'center'}}>이름</th>
            <th style={{textAlign: 'center'}}>이메일</th>
            <th style={{textAlign: 'center'}}>연락처</th>
            <th style={{textAlign: 'center'}}>기능 버튼</th>
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
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-view">상세</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
