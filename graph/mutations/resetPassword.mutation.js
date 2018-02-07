import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull
} from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { resetPassword } from "../../server/services/auth.service";

export default mutationWithClientMutationId({
  name: "resetPassword",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    msg: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload(inputFields) {
    return resetPassword(inputFields);
  }
});
