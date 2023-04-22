import React from 'react'
import LoginComponent from '../components/Login/LoginComponent'
import { useCrmAuthHooks } from '../hooks/useCrmAuthHooks'

export default function LoginContainers() {
    const { login, loginUserDetails } = useCrmAuthHooks()

  return (
    <LoginComponent loginUser={login} loginUserDetails={loginUserDetails} />
  )
}
