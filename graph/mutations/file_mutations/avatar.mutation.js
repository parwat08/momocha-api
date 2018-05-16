import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLString, GraphQLNonNull } from "graphql";

export default mutationWithClientMutationId({
  name: "Avatar",
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    avatar: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: (inputFields, context, info) => {
    console.log(context);
    return "adjdaj";
  }
});
