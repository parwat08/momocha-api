import { GraphQLObjectType } from "graphql";

import signupMutation from "./signup.mutation";
import loginMutation from "./signup.mutation";
import resetPasswordMutation from "./resetPassword.mutation";
import updateProfileMutation from "./updateProfile.mutation";
import postMediaMutation from "./postMedia.mutation";
import updateMediaMutation from "./updateMedia.mutation";
import deleteMediaMutation from "./deleteMedia.mutation";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    signup: signupMutation,
    login: loginMutation,
    resetPassword: resetPasswordMutation,
    updateProfile: updateProfileMutation,
    postMedia: postMediaMutation,
    updateMedia: updateMediaMutation,
    deleteMedia: deleteMediaMutation
  })
});
