import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import './Login.css'

const Login = () => {

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const {email, password} = state;
  const handleGoogleSignIn = () => {}
  const handleFBSignIn = () => {}
  const handleSubmit = () => {}
  const handleChange = () => {}
  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>
            로그인
          </h1>
          <div className="social-login">
            <button className="btn google-btn social-btn" type="button" onClick={handleGoogleSignIn}>
              <span>
                <i className="fab fa-google-plus-g" />  구글 로그인
              </span>
            </button>
            <button className="btn facebook-btn social-btn" type="button" onClick={handleFBSignIn}>
              <span>
                <i className="fab fa-facebook-f" />  페이스북 로그인
              </span>
            </button>
          </div>
          <p style={{textAlign: 'center'}}>OR</p>
          <input 
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input 
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fa fa-sign-in-alt" /> 로그인
          </button>
          <hr />
          <p>계정이 없다</p>
          <Link to="/register">
            <button 
              className="btn btn-primary btn-block" 
              type="button" 
              id="btn-signup"
            >
              <i className="fa fa-user-plus"></i> 새 계정 가입
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
