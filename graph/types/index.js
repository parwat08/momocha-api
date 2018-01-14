import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} from 'graphql';

import { users } from '../../mocks/users.json';
import UserType from './user.type';

/**
 * RootQuery
 */
export default new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: GraphQLList(UserType),
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, { id }) {
                return users;
            }
        }
    }
});
