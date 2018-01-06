import {
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLObjectType,
} from 'graphql';

import {
    GraphQLEmail,
    GraphQLDateTime,
    GraphQLPassword,
} from 'graphql-custom-types';

/**
 * UserType Schema
 */
export default new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLInt,
        },
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
        userName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLEmail,
        },
    }
})
