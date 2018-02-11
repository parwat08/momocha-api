import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull
} from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { updateProfile } from "../../server/query/user.query";

export default mutationWithClientMutationId({
  name: "updateProfile",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    u_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    f_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    country: {
      type: new GraphQLNonNull(GraphQLString)
    },
    mobileNumber: {
      type: new GraphQLNonNull(GraphQLString)
    },
    city: {
      type: new GraphQLNonNull(GraphQLString)
    },
    age: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    msg: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload(inputFields) {
    return updateProfile(inputFields);
  }
});
