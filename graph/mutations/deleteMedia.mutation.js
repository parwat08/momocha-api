import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } from 'graphql';
import {
    mutationWithClientMutationId
} from 'graphql-relay';
import { deleteMedia } from '../../server/services/media.service';

export default mutationWithClientMutationId({
    name: 'deleteMedia',
    inputFields: {
        _id: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        msg: {
            type: GraphQLString,
        }
    },
    mutateAndGetPayload(inputFields) {
        return deleteMedia(inputFields);
    }
});
