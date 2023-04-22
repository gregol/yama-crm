import React from 'react'
import withAuth from '@/modules/auth/hoc/withAuth'

import LeadContainer from '@/modules/lead/containers/LeadContainer'

function Leads() {
  return <LeadContainer />
}



export default withAuth(Leads)