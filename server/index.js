import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server';

import mongoose from 'mongoose';
import { merge } from 'lodash';

const root = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

const typeDefs = [root];
const resolvers = merge(
  {}
  /**
   * Query Resolvers
   */

  /**
   * Mutation Resolvers
   */

  /**
   * Subscriptions
   */
);

const schema = makeExecutableSchema({
  typeDefs,
  schemaDirectives: {},
  resolvers
});

const server = new ApolloServer({ schema });
const port = process.env.PORT || 8080;

mongoose
  .connect('mongodb://127.0.0.1:27017/seonbae?retryWrites=true', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connected to MongoDB Service');

    server.listen({ port }).then(({ url }) => {
      console.log(`🚀  Server ready at ${url} 🛸`);
    });
  })
  .catch(err => {
    throw new Error(err);
  });
