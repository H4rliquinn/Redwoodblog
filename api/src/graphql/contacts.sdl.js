export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  input ContactInput {
    name: String
    email: String
    message: String
  }

  type Query {
    contacts: [Contact]
  }

  type Mutation {
    createContact(input: ContactInput!): Contact
  }
`
