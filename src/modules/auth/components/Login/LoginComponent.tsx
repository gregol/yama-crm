import React, {useReducer, useState} from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { authReducer, initialState } from '../../hooks/CRMAuth'


import InputText from '@/modules/core/components/atom/Input/InputText'
import Alert from '@/modules/core/components/atom/Alert'
import Link from 'next/link'
import LandingIntro from './LandingIntro'

import { log } from 'console'
// import { routes } from '@/modules/core/services/Data/menu'
import { useRouter } from 'next/router'

interface ILogin {
  loginUser: any
  loginUserDetails: any
}

export default function LoginComponent({loginUser, loginUserDetails} : ILogin) {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const router = useRouter()

  const INITIAL_LOGIN_OBJ = {
        password : "",
        email : ""
    }    
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const submitForm = async (e: any) =>{
        e.preventDefault()
        setErrorMessage("")
        console.log(loginObj)
        if(loginObj.email.trim() === "")return setErrorMessage("Email Id is required! (use any value)")
        if(loginObj.password.trim() === "")return setErrorMessage("Password is required! (use any value)")
        else{
            
          try {
            const userInfo = await loginUser(loginObj.email, loginObj.password)
            dispatch({ type: 'LOGIN', user: userInfo?.data?.loginUser })
            router.push('/user/dashboard')
          } catch (error) {
            
            
          }
            
            
        }
    }

    const updateFormValue = ({updateType, value} : any) => {
        setErrorMessage("")
        setLoginObj({...loginObj, [updateType] : value})
    }
  return (
    <>
      {loginUserDetails.loginError && <Alert alertType='alert-error' alertContent={loginUserDetails.loginError.message} />}
      <div className="min-h-screen bg-base-200 flex items-center">
        <div className="card mx-auto w-full max-w-5xl  shadow-xl">
            <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
              <div className=''>
                <LandingIntro />
              </div>
              <div className='py-24 px-10'>
                <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
                <form onSubmit={(e) => submitForm(e)}>
                    <div className="mb-4">
                      <InputText inputId='email' type="email" defaultValue={loginObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue}/>
                      <InputText inputId='password' defaultValue={loginObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue}/>
                    </div>
                    <button id='btn_submit' type="submit" className={"btn mt-2 w-full btn-primary" + (loginUserDetails.loginLoading ? " loading" : "")}>
                      Login
                    </button>
                    <div className='text-center mt-4'>{`Don't have an account yet?`} 
                      <Link href="/register"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></Link>
                    </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
