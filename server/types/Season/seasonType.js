import { gql } from 'apollo-server';

export default gql`
  type Season {
    _id: ID!
    title: String!
    description: String!
    show: Show!
    episodes: [Video!]!
    createdAt: String!
    updatedAt: String!
  }
`;
