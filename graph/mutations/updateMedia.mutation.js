import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLList, } from 'graphql';
import {
    mutationWithClientMutationId
} from 'graphql-relay';
import { updateMedia } from '../../server/services/media.service';

export default mutationWithClientMutationId({
    name: 'updateMedia',
    inputFields: {
        _uploaderId: {
            type: new GraphQLNonNull(GraphQLString),
        },
        _id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        caption: {
            type: new GraphQLNonNull(GraphQLString),
        },
        language: {
            type: new GraphQLNonNull(GraphQLString),
        },
        tags: {
            type: new GraphQLList(GraphQLString),
        },
        category: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        msg: {
            type: GraphQLString,
        }
    },
    mutateAndGetPayload(inputFields) {
        return updateMedia(inputFields);
    }
});
