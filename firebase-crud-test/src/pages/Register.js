import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {registerInitiate} from '../redux/actions'
import './Register.css'
import store from '../firebase'

const Register = () => {

  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { currentUser } = useSelector((state) => state.user);
  
  const history = useHistory();
  
  useEffect(()=> {
    if(currentUser) {
      alert( '회원가입을 축하힙니다.')
      history.push('/')
    }
  }, [currentUser, history]);
  
  const dispatch = useDispatch();

  const {email, password, displayName, passwordConfirm} = state;

  // 데이터 전송
  const handleSubmit = (e) => {
    e.preventDefault();
    // 입력한 비밀번호와 비밀번호 재확인이 같지 않으면 그냥 리턴함
    if(password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
    }
    // 액션을 이용하여 이메일 패스워드 이름을 전송함 reducer에 전송함
    dispatch(registerInitiate(email, password, displayName));
    // 입력창 초기화
    setState({email: "", displayName: "", password: "", passwordConfirm: "",})
  }

  // 입력창에 입력 받은 값을 화면에 바로바로 업데이트 해줌
  const handleChange = (e) => {
    let {name, value} = e.target;
    setState({ ...state, [name]: value });
  };

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
