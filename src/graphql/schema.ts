import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolver';

const typeDefs = `
  type Person { 
    id: ID!
    name: String!
    age: Int!
    email: String
  }

  type Query {
    hello: String
    getPersons: [Person]
    findPerson(id : Int): Person
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
