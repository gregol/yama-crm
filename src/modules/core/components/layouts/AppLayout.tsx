import React, { useContext, Suspense, useEffect, lazy, Children } from 'react'


import Sidebar from '../Sidebar'
import Header from '../Header'
import Main from '../../containers/Main'
import ThemedSuspense from '../ThemedSuspense'
import { SidebarContext } from '../../context/SidebarContext'

// const Page404 = lazy(() => import('../pages/404'))

interface IAppLayout {
  children: React.ReactNode
}
export default function AppLayout({ children }: IAppLayout) {
  //@ts-ignore
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
      <Sidebar />
      <div className='flex flex-col flex-1 w-full'>
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>{children}</Suspense>
        </Main>
      </div>
    </div>
  )
}

// <Switch>
//   {routes.map((route, i) => {})}
//   <Redirect exact from='/app' to='/app/dashboard' />
//   {/* <Route component={Page404} /> */}
// </Switch>
