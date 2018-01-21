import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import dotenv from 'dotenv';

import schema from './graph/schema';
import routes from './server/routes';
import mongoConnection from './server/config/mongo.config';

const app = express();
// dotenv.load({
//     path: '.env',
// });
mongoConnection(app);

app.use('/api', routes);
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,
}));

app.listen(3000, (err) => {
    if (err) return console.log('error starting the server');
    return console.log('server listening on 3000');
});
