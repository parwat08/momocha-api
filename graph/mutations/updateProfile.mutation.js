import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { updateProfile } from "../../server/query/user.query";

export default mutationWithClientMutationId({
  name: "UpdateProfile",
  inputFields: {
    _id: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    u_name: {
      type: GraphQLString
    },
    f_name: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
    mobileNumber: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    age: {
      type: GraphQLString
    }
  },
  outputFields: {
    msg: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload(inputFields, context, info) {
    console.log(context.file);
    // return updateProfile(inputFields);
  }
});
