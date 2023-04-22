import React, { useReducer, useState } from 'react'
import { ApolloProvider } from '@apollo/client'

import type { AppProps } from 'next/app'
import client from '../apollo/client'
import { authReducer, AuthContext } from '../modules/auth/hooks/CRMAuth'
import '../styles/globals.css'
import { SidebarProvider } from '../modules/core/context/SidebarContext'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false, user: null })

  return (
    <SidebarProvider>
        <AuthContext.Provider value={{ state, dispatch }}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </AuthContext.Provider>
    </SidebarProvider>
  )
}

export default MyApp
