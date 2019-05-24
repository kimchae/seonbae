import { gql } from 'apollo-server';

export default gql`
  type Actor {
    _id: ID!
    name: String!
    altName: String!
    appearsIn:  
  }
`;
