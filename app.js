import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';

import schema from './graph/schema';

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,
}));

app.listen(3000, (err) => {
    if (err) return console.log('error starting the server');
    return console.log('serever listening');
});
