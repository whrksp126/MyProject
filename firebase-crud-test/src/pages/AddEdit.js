import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import './AddEdit.css'
import fireDb from '../firebase'
import {toast} from 'react-toastify'

const initialState = {
  name: '',
  date: '',
  contact: '',
  status: '',
}

const AddEdit = () => {
  const [ state, setState] = useState(initialState)
  const [ data, setData] = useState({});

  const { name, date, contact, status } = state;

  const history = useHistory();

  const {id} = useParams();

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
  }, [id])

  // 아이디 값이 있으면 아이디에 해당하는 데이터를 state에 추가해라
  // 기존 아이템의 data를 보여줌
  useEffect(() => {
    if(id){setState({...data[id]})
  } else {
    setState({...initialState});
  }

  return () => {
    setState({...initialState});
  }
  }, [id, data]);

  // input에 입력 받는 값을 바로바로 업데이트 해서 보여줌
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name] : value })
  }
  
  // 데이터 베이스에 저장할 수 있게 해줌
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !date || !contact || !status) {
      toast.error('각 입력란에 값을 입력하세요')
    } else {
      // 새로 추가하는 로직
      if(!id) {
      fireDb.child("contacts").push(state, (err) => {
        if (err) {
          toast.error(err);
        } toast.success('연락처가 성공적으로 추가 되었습니다.')
      })
    } else {
      // 업데이트 하는 로직
      fireDb.child(`contacts/${id}`).set(state, (err) => {
        if (err) {
          toast.error(err);
        } toast.success('연락처가 성공적으로 업데이트 되었습니다.')
      })
    }
      setTimeout( () => history.push("/"), 500);
    }
  }


  return (
    <div style={{marginTop:"100px"}}>
      <form 
        style={{
          margin:"auto", 
          padding: "15px",
          maxWidth: "400px", 
          alignContent:"center"
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">종목</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="삼성전자" 
          value={name || ""} 
          onChange={handleInputChange}  
        />
        <label htmlFor="email">날짜</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          placeholder="2020-02-02"
          value={date || ""} 
          onChange={handleInputChange}  
        />
        <label htmlFor="contact">가격</label>
        <input 
          type="number" 
          id="contact" 
          name="contact" 
          placeholder="123.123" 
          value={contact || ""} 
          onChange={handleInputChange}  
        />
        <label htmlFor="status">등급</label>
        {/* <input 
          type="text" 
          id="status" 
          name="status" 
          placeholder="활성화..." 
          value={status || ""} 
          onChange={handleInputChange}  
        /> */}
        <select name="status" id="status" onChange={handleInputChange}  >
          <option value="활성화">관심</option>
          <option value="비활성화">예비</option>
        </select>


        <input type="submit" value={id ? "Update" : "Save"} />

      </form>
    </div>
  )
}

export default AddEdit
