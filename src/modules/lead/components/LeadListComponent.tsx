import React from 'react'
import { useRouter } from 'next/router'

import CompleteTable from '@/modules/core/components/molecule/CompleteTable'
import TitleCard from '@/modules/core/components/atom/Cards/TitleCard'
import ButtonAtom from '@/modules/core/components/atom/ButtonAtom'

export default function LeadListComponent({heardLeads,
        bodyItems,
        totalPage,
        totalDocs,
        page,
        setPage,
        hasPreviousPage,
        hasNextPage,
        DeleteClient,
        paginationInfo
      }: any) {
    const router = useRouter()
    const [showModal, setShowModal] = React.useState(false)
    
    const EditClient = (id: string) => {
      router.push(`/leads/${id}`)
    }

    const createLead = () => {
      router.push('/leads/create')
    }
  return (
    <TitleCard title='Leads'>
      <ButtonAtom onClick={createLead} className='w-fit px-6'>Create Lead</ButtonAtom>
      <CompleteTable
            headersItems={heardLeads}
            bodyItems={bodyItems}
            paginationInfo={paginationInfo}
            setCurrentPage={setPage}
            currentPage={page}
            hasPreviousPage={hasPreviousPage}
            hasNextPage={hasNextPage}
            totalPage={totalPage}
            EditFunction={EditClient}
            DeleteFunction={DeleteClient}
            showModal={showModal}
            setShowModal={setShowModal}
          />
    </TitleCard>
  )
}

