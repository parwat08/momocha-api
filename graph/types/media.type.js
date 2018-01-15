import {
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLList,
} from 'graphql';

/**
 * MediaType Schema
 */
export default new GraphQLObjectType({
    name: 'Media',
    fields: {
        id: {
            type: GraphQLInt,
        },
        caption: {
            type: GraphQLString,
        },
        duration: {
            type: GraphQLString,
        },
        language: {
            type: GraphQLString,
        },
        media_url: {
            type: GraphQLString,
        },
        poster_url: {
            type: GraphQLString,
        },
        shares: {
            type: GraphQLString,
        },
        momochas: {
            type: GraphQLString,
        },
        listens: {
            type: GraphQLString,
        },
        uploadedDate: {
            type: GraphQLString,
        },
        tags: {
            type: new GraphQLList(GraphQLString),
        },
        media_type: {
            type: GraphQLString,
        },
    }
})
