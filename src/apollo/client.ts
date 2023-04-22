import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client'
import { getItem } from '../modules/core/utils/CRMPersistData'

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_API ?? 'http://localhost:3010/api/graphql'
})

const authLink = new ApolloLink((operation, forward) => {
  const token = getItem('crm-token')
  if (token) {
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
      }
    }))
  }
  return forward(operation)
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
