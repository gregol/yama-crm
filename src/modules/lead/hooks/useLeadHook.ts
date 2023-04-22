import { useLazyQuery } from "@apollo/client";
import { v4 as uuidv4 } from 'uuid'

import axiosInstance from "@/axios/AxiosClient";
import {LeadDataInterface} from '../types/types'

import { GET_ALL_LEADS, GET_LEAD_BY_ID } from "../api/graphql/queries";

export interface PaginationItems {
  id: string
  name: string
}
export const useLeadHook = () =>{
   const [ getLeads, {data: leads, loading: leadLoading, error: leadError}] =useLazyQuery(GET_ALL_LEADS)
   const [ getLeadByID, {data: leadsById, loading: leadByIdLoading, error: leadByIdError}] =useLazyQuery(GET_LEAD_BY_ID)

   const heardLeads = [
            {
                id: uuidv4(),
                name: 'Name'
            },
            {
                id: uuidv4(),
                name: 'Email'
            },
            {
                id: uuidv4(),
                name: 'Phone'
            },
            {
                id: uuidv4(),
                name: 'Actions'
            }
        ]
   async function createNewLead(lead: LeadDataInterface) {
        try {
            const response = await axiosInstance.post('/lead', lead);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const createBodyItems = (data: [] | null) => {
        if(!data) return
        const leadInfo: PaginationItems[][] = []
        data?.map((lead: any, index: number) => {
        leadInfo.push([
            { id: `DATA-ID-${uuidv4()}`, name: lead.id },
            { id: uuidv4(), name: `<div class="font-bold">${lead.name}</div>` },
            { id: uuidv4(), name: `<div class="text-sm opacity-50">${lead.email}</div>` },
            { id: uuidv4(), name: lead.phone }
        ])
    })
    return leadInfo
  }

  const getLeadById = async (leadId: string | string[]) =>{
    console.log(leadId);
    
    const lead =  await getLeadByID({variables: { "id": leadId}})
    console.log(lead);
    return lead
    
  }

  return {
    createNewLead,
    leads,
    leadLoading,
    leadError,
    getLeads,
    heardLeads,
    createBodyItems,
    getLeadById
 }
}