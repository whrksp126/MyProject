import * as types from './actionTypes';
import {auth} from '../firebase'

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