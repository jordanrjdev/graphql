import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import morgan from 'morgan';
import schema from './graphql/schema';

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});
