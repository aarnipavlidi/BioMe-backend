import { gql } from 'apollo-server';

const typeDefs = gql`
  input ChosenMaterialTypes {
    code: Int!
    name: String!
  }

  type MaterialsArray {
    code: Int!
    name: String!
  }
  
  type NearestCollectionSpots {
    spot_id: Int!
    postal_code: String!
    name: String!
    materials: [MaterialsArray]
    distance_km: Float!
  }

  type MaterialTypes {
    code: Int!
    name: String!
  }

  type Query {
    getAllMaterialTypes: [MaterialTypes]
  }

  type Mutation {
    getNearestCollectionSpots(
      currentUserLocation: String!
      currentChosenMaterialTypes: [ChosenMaterialTypes]
    ): [NearestCollectionSpots]
  }
`

export default typeDefs;