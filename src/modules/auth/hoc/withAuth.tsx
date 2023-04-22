import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { sessionExpire } from '@/modules/core/utils/utils'
import AppLayout from '@/modules/core/components/layouts/AppLayout'
//@ts-ignore
const withAuth = WrappedComponent => {
  //@ts-ignore
  const Wrapper = props => {
    const router = useRouter()
    //@ts-ignore
    useEffect(() => {
      const isSessionExpire = sessionExpire()
      if (isSessionExpire) {
        // TODO: DELETE ALL USER LOCAL STORAGE FOR THIS SITE
        router.push('/')
      }
      return () => null
    }, [router])

    return (
      // WRAP ALL APP WITH THE TEMPLATE
      <AppLayout>
        <WrappedComponent {...props} />
      </AppLayout>
    )
  }

  return Wrapper
}

export default withAuth
