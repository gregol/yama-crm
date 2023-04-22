import React from 'react'
import EditLeadsContainer from '@/modules/lead/containers/EditLeadsContainer'
import withAuth from '@/modules/auth/hoc/withAuth'

function LeadDetail() {
  return (
    <EditLeadsContainer />
  )
}

export default withAuth(LeadDetail)

