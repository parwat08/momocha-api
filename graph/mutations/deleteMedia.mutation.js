import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { deleteMedia } from "../../server/query/media.query";

export default mutationWithClientMutationId({
  name: "DeleteMedia",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    msg: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload(inputFields) {
    return deleteMedia(inputFields);
  }
});
