import { gql } from 'apollo-server';

export default gql`
  type Comment {
    _id: ID!
    title: String!
    content: String!
    creator: UserInfo!
    createdAt: String!
    updatedAt: String!
  }
`;
