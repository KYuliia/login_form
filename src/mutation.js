import gql from 'graphql-tag'
// language=GraphQL format=false
export const LOGIN_MUTATION = gql`type Mutation {
  login(name: String!, password: String!): AuthPayload!
}
`
