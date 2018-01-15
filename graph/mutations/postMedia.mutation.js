import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql';
import {
    mutationWithClientMutationId
} from 'graphql-relay';
import { postMedia } from '../../server/services/media.service';

export default mutationWithClientMutationId({
    name: 'postMedia',
    inputFields: {
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
        return postMedia(inputFields);
    }
});
