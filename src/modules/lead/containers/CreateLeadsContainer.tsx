import React from 'react'

import LeadForm from '../components/FormLead'
import TitleCard from '@/modules/core/components/atom/Cards/TitleCard'
export default function CreateLeadsContainer() {
  return (
    <TitleCard title='Create Lead'>
      <LeadForm />
    </TitleCard>
  )
}
