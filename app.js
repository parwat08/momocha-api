import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';

import schema from './graph/schema';
import mongoConnection from './server/config/mongo.config';

const app = express();
mongoConnection(app);

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,
}));

app.listen(3000, (err) => {
    if (err) return console.log('error starting the server');
    return console.log('server listening on 3000');
});
