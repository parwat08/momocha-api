import { GraphQLString, GraphQLNonNull, GraphQLID } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { login } from "../../server/query/auth.query";

export default mutationWithClientMutationId({
  name: "LogIn",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    token: {
      type: GraphQLString
    },
    user: {
      id: {
        type: GraphQLID
      },
      username: {
        type: GraphQLString
      }
    }
  },
  mutateAndGetPayload(inputFields) {
    return login(inputFields);
  }
});
