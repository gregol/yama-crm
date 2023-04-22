import React, { useEffect, useState } from 'react'
import LeadListComponent from '../components/LeadListComponent'
import { useLeadHook } from '../hooks/useLeadHook'
export default function LeadContainer() {
    const [page, setPage] = useState<number>(1)
    const [paginationInfo, setPaginationInfo] = useState<any | null>(null)
    const [localLeads, setLeads] = useState<[] | null>(null)
    const {heardLeads, createBodyItems, getLeads,leads, leadLoading,
        leadError} = useLeadHook()
    const bodyItems = createBodyItems(localLeads)

    const getAllLeads = async () =>{
      const dataLeads = await getLeads()
      setLeads(dataLeads?.data?.Leads?.docs)
    }
    useEffect(() => {
      getAllLeads()
    }, [])

    useEffect(()=>{
        if(leads?.Leads){
          setPaginationInfo({ totalResults: leads?.Leads?.totalDocs, resultsPerPage: bodyItems?.length  })
        }
    
    },
    [bodyItems?.length, leads])

    const DeleteLead = async (id: string) => {

    }

    console.log('leads', leads);
    
    if(leadLoading) return <h1>Loading</h1>
    if(!leads) return <h1>No Leads</h1>

    console.log(paginationInfo);
    

    return (
      <LeadListComponent
        heardLeads={heardLeads}
        bodyItems={bodyItems}
        totalPage={leads?.Leads?.totalPage?? 0}
        totalDocs={leads?.Leads?.totalDocs}
        page={page}
        setPage={setPage}
        hasPreviousPage={leads?.Leads?.hasPrevPage}
        hasNextPage={leads?.Leads?.hasNextPage}
        DeleteClient={DeleteLead}
        paginationInfo={paginationInfo}
      />
    )
}
