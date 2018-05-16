import { GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { updateMedia } from "../../server/query/media.query";

export default mutationWithClientMutationId({
  name: "UpdateMedia",
  inputFields: {
    _uploaderId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    caption: {
      type: new GraphQLNonNull(GraphQLString)
    },
    language: {
      type: new GraphQLNonNull(GraphQLString)
    },
    tags: {
      type: new GraphQLList(GraphQLString)
    },
    category: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    msg: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload(inputFields) {
    return updateMedia(inputFields);
  }
});
