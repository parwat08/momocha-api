import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} from 'graphql';

import { users } from '../../mocks/users.json';
import UserType from './user.type';
import MediaType from './media.type';

/**
 * RootQuery
 */

const viewer = new GraphQLObjectType({
    name: 'Viewer',
    fields: () => ({
        user: {
            type: GraphQLList(UserType),
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, { id }) {
                return users;
            }
        },
        media: {
            type: new GraphQLList(GraphQLString),
            args: {

            },
            resolve(parent, args) {
                return 'media from db queries';
            }
        }
    })
})

export default new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        viewer: {
            type: viewer,
            resolve: () => viewer,
        }
    })
});
