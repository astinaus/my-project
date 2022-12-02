import React from 'react'

const SignAccount = () => {
  return (
    <form>
      <label htmlFor='email'>이메일</label>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='test@example.com'/>
      <label htmlFor='nickname'>닉네임</label>
      <input
        id="nickname"
        type='nickname'
        name='nickname'
        placeholder='닉네임 입력' />

      <label htmlFor='password'>비밀번호</label>
      <input
       id= 'password'
       type='password'
       name='password'
       placeholder='8자리 이상'
       />
      <label htmlFor='confirmpassword'>비밀번호</label>
      <input
       id= 'confirmpassword'
       type='password'
       name='confirmpassword'
       placeholder='똑같이 입력'
       />

       <button type='submit'>회원가입</button>
    </form>
  )
}

export default SignAccount
