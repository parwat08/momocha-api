import {
    GraphQLSchema,
} from 'graphql';

import RootQuery from './types';

export default new GraphQLSchema({
    query: RootQuery,
});

