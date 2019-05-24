import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    getAllMovies(): [Show!]!
    getMovie(_id: ID!): Show!
    getAllDrama(): [Show!]!
    getDrama(_id: ID!): Show!
    getAllVariety(): [Show!]!
    getVariety(_id: ID!): Show!
  }

  type Show {
    _id: ID!
    type: Int!
    title: String!
    altTitle: String!
    manager: [UserInfo!]!
    seasons: [Season!]
    videos: [Videos!]!
    actors: [Actor!]
    createdAt: String!
    updatedAt: String!
  }
`;
