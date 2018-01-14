import {
    GraphQLObjectType,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        signup: signupMutation,
        login: loginMutation,
        resetPassword: resetPasswordMutation,
        updateProfile: updateProfileMutation,
        postMedia: postMediaMutation,
        updateMedia: updateMediaMutation,
        deleteMedia: deleteMediaMutation,
    })
})
