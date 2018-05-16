import { GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { postMedia } from "../../server/query/media.query";

export default mutationWithClientMutationId({
  name: "PostMedia",
  inputFields: {
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
    return postMedia(inputFields);
  }
});
