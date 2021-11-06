import React, {useState, useEffect} from 'react';
import fireDb from '../firebase';
import {Link} from 'react-router-dom';
import './Home.css'
import { toast } from 'react-toastify';

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child('stock').on('value', (snapshot) => {
      if(snapshot.val() !== null){
        setData({...snapshot.val()})
      } else {
        setData({})
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const onDelete = (id) => {
    if(window.confirm('해당 종목을 정말 삭제하시겠습니까?')){
      fireDb.child(`stock/${id}`).remove((err) => {
        if(err){
          toast.error(err)
        } else {
          toast.success('종목 삭제를 성공하였습니다.')
        }
      })  
    }
  }

  return (
    <div style={{marginTop: '100px'}}>
      <h2>목록 페이지</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>No.</th>
            <th style={{ textAlign: 'center' }}>종목 명</th>
            <th style={{ textAlign: 'center' }}>매수 날짜</th>
            <th style={{ textAlign: 'center' }}>매수 가격</th>
            <th style={{ textAlign: 'center' }}>매도 날짜</th>
            <th style={{ textAlign: 'center' }}>매도 가격</th>
            <th style={{ textAlign: 'center' }}>대비</th>
            <th style={{ textAlign: 'center' }}>등락률</th>
            <th style={{ textAlign: 'center' }}>기능</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index)=>{
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].itemName}</td>
                <td>{data[id].buyDay}</td>
                <td>{data[id].buyPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-edit">수정</button>
                  </Link>
                    <button className="btn btn-delete" onClick={() => onDelete(id)}>삭제</button>
                  <Link to={`/view/${id}`}>
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
