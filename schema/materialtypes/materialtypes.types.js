import { gql } from 'apollo-server';

const typeDefs = gql`
  type MaterialTypes {
    code: Int!
    name: String!
  }
  type Query {
    getAllMaterialTypes: [MaterialTypes]
  }
`

export default typeDefs;