import { useRouter } from 'next/router'
import LeadForm from '../components/FormLead'
import TitleCard from '@/modules/core/components/atom/Cards/TitleCard'
import { useLeadHook } from '../hooks/useLeadHook'
import { log } from 'console'
import { useEffect } from 'react'

export default function EditLeadsContainer() {
  const router = useRouter()
  const {getLeadById } = useLeadHook()
  const { query } = router
  console.log(query)
  const getLead = async (leadId: string | string[]) => {
    const lead = getLeadById(leadId)
  }
  useEffect(()=> {
    if(query?.id){
      getLead(query?.id)
    }
    //@ts-ignore
  }, [query?.id])

  return (
    <TitleCard title='Edit Lead'>
      <LeadForm />
    </TitleCard>
  )
}
