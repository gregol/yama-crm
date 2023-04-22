import React from 'react'
import withAuth from '@/modules/auth/hoc/withAuth'
import CrateLeadsContainer from '@/modules/lead/containers/CreateLeadsContainer'
function Create() {
  return (
    <CrateLeadsContainer />
  )
}

export default withAuth(Create)