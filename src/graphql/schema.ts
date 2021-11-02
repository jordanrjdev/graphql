import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolver';

const typeDefs = `
  type Query {
    hello: String
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
