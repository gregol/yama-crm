import { gql } from '@apollo/client'

export const USER_LOGOUT = gql`
mutation logoutUser {
  logoutUser
}
`

export const USER_LOGIN = gql`
  mutation UserLogin($email: String, $password: String) {
  loginUser(email: $email, password: $password){
    token
    user {
      id
      email
    }
    exp
  }
}
`
