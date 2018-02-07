import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull
} from "graphql";

// Media Schema
export default new GraphQLObjectType({
  name: "Media",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: obj => obj._id
    },
    caption: {
      type: GraphQLString
    },
    duration: {
      type: GraphQLString
    },
    language: {
      type: GraphQLString
    },
    media_url: {
      type: GraphQLString
    },
    poster_url: {
      type: GraphQLString
    },
    shares: {
      type: GraphQLString
    },
    momochas: {
      type: GraphQLString
    },
    listens: {
      type: GraphQLString
    },
    uploadedDate: {
      type: GraphQLString
    },
    tags: {
      type: new GraphQLList(GraphQLString)
    },
    media_type: {
      type: GraphQLString
    }
  }
});
