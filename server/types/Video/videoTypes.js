import { gql } from 'apollo-server';

export default gql`
  type Video {
    _id: ID!
    title: String
    episode: Int
    uploader: User!
    link: String!
    show: Show!
    actors: [Actor!]
    createdAt: String!
    updatedAt: String!
  }

  type VideoInfo {
    _id: ID!
    title: String
    episode: Int
    uploader: User!
    views: Int!
    show: Show!
    actors: [Actor!]
    createdAt: String!
    updatedAt: String!
  }
`;
