import gql from 'graphql-tag'

// language=GraphQL
export const Main_Page = gql`
  mutation Main_Page_Mutation( $password: String!, $name: String!) {
    login( password: $password, name: $name) {
      token
    }
  }
`
