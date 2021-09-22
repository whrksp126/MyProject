import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import './AddEdit.css'
import fireDb from '../firebase'
import {toast} from 'react-toastify'

const initialState = {
  name: '',
  email: '',
  contact: '',
}

const AddEdit = () => {
  const [ state, setState] = useState(initialState)
  const [ data, setData] = useState({});

  const { name, email, contact } = state;

  const history = useHistory();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name] : value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact) {
      toast.error('각 입력란에 값을 입력하세요')
    } else {
      fireDb.child("contacts").push(state, (err) => {
        if (err) {
          toast.error(err);
        } toast.success('연락처가 성공적으로 추가 되었습니다.')
      })
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
        <label htmlFor="name">name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="your name..." 
          value={name} 
          onChange={handleInputChange}  
        />
        <label htmlFor="email">email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="your email..." 
          value={email} 
          onChange={handleInputChange}  
        />
        <label htmlFor="contact">contact</label>
        <input 
          type="number" 
          id="contact" 
          name="contact" 
          placeholder="your contact..." 
          value={contact} 
          onChange={handleInputChange}  
        />
        <input type="submit" value="Save" />

      </form>
    </div>
  )
}

export default AddEdit
