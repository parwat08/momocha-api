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
            resolve(parent) {
                return parent.f_name;
            }
        },
        lastName: {
            type: GraphQLString,
            resolve(parent) {
                return parent.l_name;
            }
        },
        userName: {
            type: GraphQLString,
            resolve(parent) {
                return parent.u_name;
            }
        },
        email: {
            type: GraphQLEmail,
        },
    }
})
