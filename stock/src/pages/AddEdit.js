import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './AddEdit.css';
import fireDb from '../firebase';
import {toast} from 'react-toastify';

const initialState = {
  itemName: '',
  buyDay: '',
  buyPrice: '',
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const {itemName, buyDay, buyPrice} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!itemName || !buyDay || !buyPrice) {
      console.log(itemName);
      console.log(buyDay);
      console.log(buyPrice);

      toast.error('각 입력 필드에 값을 입력하세요.')
    } else {
      fireDb.child('stock').push(state, (err) => {
        if(err) {
          toast.error(err);
        } else {
          toast.success('종목 추가 성공')
        }
      });
      setTimeout(()=>navigate('/'), 500);
    }
  }
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  }

  return (
    <div style={{marginTop: '100px'}}>
      <h2>종목 추가 페이지</h2>
      <form onSubmit={handleSubmit} style={{margin: 'auto', padding: '15px', maxWidth: '400px', alignItems: 'center'}} >
        <label htmlFor='itemName'>종목 명</label>
        <input value={itemName} onChange={handleInputChange} type='text' id='itemName' name='itemName' placeholder='삼성전자' />

        <label htmlFor='buyDay'>매수 일</label>
        <input onChange={handleInputChange} type='date' id='buyDay' name='buyDay'/>

        <label htmlFor='buyPrice'>매수 금액</label>
        <input onChange={handleInputChange} type='number' id='buyPrice' name='buyPrice' placeholder='71000' />

        <input type="submit" value="저장" />
      </form>
    </div>
  )
}

export default AddEdit
