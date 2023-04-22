import { useReducer} from 'react'
import { useMutation } from "@apollo/client"
import { USER_LOGIN , USER_LOGOUT} from "../api/mutation"
import { authReducer, initialState } from '../hooks/CRMAuth'
import { useRouter } from 'next/router'

export const useCrmAuthHooks = () => { 
      const [state, dispatch] = useReducer(authReducer, initialState)
  const router = useRouter()

    const [loginUser, { data, loading, error }] = useMutation(USER_LOGIN)
    const [logoutUser, { loading: logoutLoading, error: logoutError }] = useMutation(USER_LOGOUT)
    const login = async (email: string, password: string) => {
        console.log(email, password);
        
        const response = await loginUser({
            variables: {
                email,
                password
            }
        })
        return response
    }
    const loginData = data?.userLogin
    const loginLoading = loading
    const loginError = error
    const loginUserDetails = {
        loginData,
        loginLoading,
        loginError
    }

    const signOut = async () =>{
        logoutUser()
        dispatch({ type: 'LOGOUT'})
    }
    return {
        login,
        loginUserDetails,
        signOut
    }
}