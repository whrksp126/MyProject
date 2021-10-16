import * as types from './actionTypes';
import {auth} from '../firebase'


// 회원가입 액션
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error
});

// 로그인 액션
const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error
});

// 로그아웃 액션
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error
});

// 회원가입 파이어베이스 메소드
export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user.updateProfile({
          displayName,
        });
        // console 창에 보여줌
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        // console 창에 보여줌
        dispatch(registerFail(error.message))
        // alert 으로 보여줌
        alert(error.message)
      });
  }
}

// 로그인 파이어베이스 메소드
export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        // console 창에 보여줌
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        // console 창에 보여줌
        dispatch(loginFail(error.message))
        // alert 으로 보여줌
        alert("이 식별자에 해당하는 사용자 기록이 없습니다. 사용자가 삭제되었을 수 있습니다. (인증/사용자를 찾을 수 없음)")
      });
  }
}

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
})

// 로그아웃 파이어베이스 메소드
export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signOut()
      .then((resp) => {
        // console 창에 보여줌
        dispatch(logoutSuccess())
      })
      .catch((error) => {
        // console 창에 보여줌
        dispatch(logoutFail(error.message))
        // alert 으로 보여줌
        alert(error.message)
      });
  }
}