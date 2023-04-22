import React from 'react'
import withAuth from '@/modules/auth/hoc/withAuth'

import ProposalContainer from '@/modules/proposal/containers/ProposalContainer'

function Proposal() {
  return <ProposalContainer  />
}



export default withAuth(Proposal)