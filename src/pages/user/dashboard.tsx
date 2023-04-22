import React from 'react'
import withAuth from '@/modules/auth/hoc/withAuth'
import ChartsContainer from '@/modules/dashboard/containers/ChartsContainer'
function Dashboard() {
  return <div>Dashboard</div>
}

export default withAuth(Dashboard)
