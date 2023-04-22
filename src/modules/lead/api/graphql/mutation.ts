import { gql } from "@apollo/client";

export const CREATE_LEADS_MUTATION = gql`
  mutation createLead($data: mutationLeadInput!) {
  createLead(data: $data){
    id
    name
    email
  }
}
`;