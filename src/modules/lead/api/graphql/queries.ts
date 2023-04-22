import { gql } from "@apollo/client";

export const GET_ALL_LEADS = gql`
  query getLeads {
    Leads(limit: 10){
        docs{
          id
          company
          phone
          name
          email
          status
        }
        page
        totalDocs
        totalPages
        hasPrevPage
        hasNextPage
        nextPage
        prevPage
    }
}
`

export const GET_LEAD_BY_ID = gql`
  query getLeadById($id: String!){
    Lead(id: $id){
      id
      name
      email
      phone
      company
      status
      message
    }
  }
`