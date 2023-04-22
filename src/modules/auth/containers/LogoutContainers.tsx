import React, { Suspense, useEffect } from 'react'
import { useRouter } from 'next/router'

import ThemedSuspense from '@/modules/core/components/ThemedSuspense'
import { useCrmAuthHooks } from '@/modules/auth/hooks/useCrmAuthHooks'
export default function Logout() {
  const { signOut } = useCrmAuthHooks()
 
  const router = useRouter()
  useEffect(() => {
    signOut()
    setTimeout(() => {
      router.push('/')
    }, 1500)
  }, [router, signOut])
  
  return (
      <div className='flex justify-center items-center w-full h-screen p-6 text-lg font-medium text-gray-100 dark:text-gray-100 dark:bg-gray-900'>
        <p className='text-gray-100'>Loading...</p>
      </div>
  )
}
