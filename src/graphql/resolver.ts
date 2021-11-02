import { Person } from '../types/person';
const persons: Array<Person> = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john@correo.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 25,
  },
];
export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getPersons: (): Array<Person> => persons,
    findPerson: (root: any, args: { id: number }): Person | undefined => {
      return persons.find((person) => person.id === args.id);
    },
  },
};
