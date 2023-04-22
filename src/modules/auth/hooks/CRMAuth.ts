import React, { createContext } from 'react'
import { setItem, removeItems, getItem } from '../../core/utils/CRMPersistData'


type AuthAction = { type: 'LOGIN'; user: any } | { type: 'LOGOUT' } | { type: 'USER' }
export type AuthState = {
  isAuthenticated: boolean
  user: any | null
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null
};


type AuthContextType = {
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
}

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  console.log('action.type', action.type)

  switch (action.type) {
    case 'LOGIN': {
      setItem('crm-user', JSON.stringify(action?.user?.user))
      setItem('crm-token', action?.user?.token)
      setItem('exp', action?.user?.exp)
      return { isAuthenticated: true, user: action.user }
    }
    case 'LOGOUT': {
      removeItems('crm-user')
      removeItems('crm-token')
      removeItems('exp')
      return { isAuthenticated: false, user: null }
    }
    case 'USER': {
      const userInfo = getItem('crm-user') ?? '' 
      return JSON.parse(userInfo)
    }
    default:
      console.log('STATE', state)

      return state
  }
}

export const AuthContext = createContext<AuthContextType>({
  state: { isAuthenticated: false, user: null },
  dispatch: () => {}
})


export function getUser() {
  return getItem('user')
}

export const signOut = () => {
  removeItems('crm-user')
  removeItems('crm-token')
  removeItems('exp')
}

