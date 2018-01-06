import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} from 'graphql';
import {
    find,
} from 'lodash';

import UserType from './user.type';
import { users } from '../../mocks/users.json';

/**
 * RootQuery
 */
export default new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: GraphQLList(UserType),
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, { id }) {
                if (id) return find(users, (user) => user.id === id);
                return users;
            }
        }
    }
});
