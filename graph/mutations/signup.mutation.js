import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } from 'graphql';
import {
    mutationWithClientMutationId
} from 'graphql-relay';
import { signup } from '../../server/services/user.service';

export default mutationWithClientMutationId({
    name: 'SignUp',
    inputFields: {
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        msg: {
            type: GraphQLString,
        }
    },
    mutateAndGetPayload(inputFields) {
        return signup(inputFields);
    }
});
