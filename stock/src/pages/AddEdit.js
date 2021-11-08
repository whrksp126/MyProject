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

  const {itemName, buyDay, buyPrice, sellDay, sellPrice} = state;

  const navigate = useNavigate();

  const {id} = useParams()

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
  }, [id])
  
  // 수정 기능 부여
  useEffect(()=>{
    if(id) {
      setState({...data[id]})
    } else {
      setState({...initialState})
    }

    return ()=>{
      setState({...initialState})
    }
  }, [id,data])


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!itemName || !buyDay || !buyPrice){
      toast.error('종목 명, 매수 일, 매수 금액은 필수 입력 사항 입니다.')
    } else if (id) {
      if (!sellPrice || !sellDay) {
        toast.error('매도 일, 매도 금액을 입력해 주세요.')
      } else {
        fireDb.child(`stock/$`)
      }
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if(!itemName || !buyDay || !buyPrice) {
  //     toast.error('각 입력 필드에 값을 입력하세요.')
  //   } else {
  //     if(!id){
  //       fireDb.child('stock').push(state, (err) => {
  //         if(err) {
  //           toast.error(err);
  //         } else {
  //           toast.success('종목 추가 성공')
  //         }
  //       });
  //     } else {
  //         fireDb.child(`stock/${id}`).set(state, (err) => {
  //           if(err) {
  //             toast.error(err);
  //           } else {
  //             toast.success('종목 수정 성공')
  //           }
  //         });
        
  //     }
  //     setTimeout(()=>navigate('/'), 500);
  //   }
  // }
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  }

  return (
    <div style={{marginTop: '100px'}}>
      <h2>종목 추가 페이지</h2>
      <form onSubmit={handleSubmit} style={{margin: 'auto', padding: '15px', maxWidth: '400px', alignItems: 'center'}} >
        <label htmlFor='itemName'>종목 명 *</label>
        <input value={itemName || ""} onChange={handleInputChange} type='text' id='itemName' name='itemName' placeholder='삼성전자' />

        <label htmlFor='buyDay'>매수 일 *</label>
        <input value={buyDay ||""}onChange={handleInputChange} type='date' id='buyDay' name='buyDay'/>

        <label htmlFor='buyPrice' >매수 금액 *</label>
        <input value={buyPrice || ""} onChange={handleInputChange} type='number' id='buyPrice' name='buyPrice' placeholder='10000' />


        <label htmlFor='sellDay'>매도 일</label>
        <input value={sellDay ||""}onChange={handleInputChange} type='date' id='sellDay' name='sellDay'/>

        <label htmlFor='buyPrice' >매도 금액</label>
        <input value={sellPrice || ""} onChange={handleInputChange} type='number' id='sellPrice' name='sellPrice' placeholder='20000' />

        <input type="submit" value={id ? "수정" : "저장" } />
      </form>
    </div>
  )
}

export default AddEdit
