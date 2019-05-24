import { gql } from 'apollo-server';

export default gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    name: String!
    comments: [Comment!]!
  }

  type UserInfo {
    _id: ID!
    name: String!
    comments: [Comment!]!
    watchHistory: [EpisodeInfo!]!
  }
`;
