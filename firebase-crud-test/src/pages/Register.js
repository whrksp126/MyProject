import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import './Register.css'

const Register = () => {

  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const {email, password, displayName, passwordConfirm} = state;

  const handleSubmit = () => {}
  const handleChange = () => {}
  return (
    <div>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>
            회원가입
          </h1>
          <input 
            type="text"
            id="displayName"
            className="form-control"
            placeholder="이름"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input 
            type="email"
            id="user-email"
            className="form-control"
            placeholder="이메일"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input 
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="비밀번호"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input 
            type="password"
            id="inputRePassword"
            className="form-control"
            placeholder="비밀번호 재확인"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          <button className="btn btn-primary btn-block" type="submit">
            <i className="fa fa-user-plus" /> 회원가입
          </button>
          <Link to="/login">
          <i className="fa fa-angle-left"></i> 뒤로가기
          </Link>

        </form>
      </div>
    </div>
  )
}

export default Register;
