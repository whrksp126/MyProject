import React from 'react'

const Login = () => {

  return (
    <div>
    로그인 페이지 입니다.    
    <form >
        <label htmlFor=''>이메일</label>
        <input type='email' id='email' name='email' placeholder='test@test.test' />
        <br/>
        <label htmlFor=''>비밀번호</label>
        <input type='password' id='password' name='password' placeholder='testtest' />

        <input type="submit" value={ "로그인" } />
      </form>  
    </div>
  )
}

export default Login
