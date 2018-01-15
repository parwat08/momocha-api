import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } from 'graphql';
import {
    mutationWithClientMutationId
} from 'graphql-relay';
import { login } from '../../server/services/auth.service';

export default mutationWithClientMutationId({
    name: 'LogIn',
    inputFields: {
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        token: {
            type: GraphQLString,
        }
    },
    mutateAndGetPayload(inputFields) {
        return login(inputFields);
    }
});
