import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
const LoginSignUp = () => {
  return (
    <>
      <div>Login-SignUp</div>
      <Routes>
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default LoginSignUp