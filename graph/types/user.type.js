import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull
} from "graphql";

/**
 * UserType Schema
 */
export default new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: parent => parent._id
    },
    firstName: {
      type: GraphQLString,
      resolve(parent) {
        return parent.f_name;
      }
    },
    lastName: {
      type: GraphQLString,
      resolve(parent) {
        return parent.l_name;
      }
    },
    userName: {
      type: GraphQLString,
      resolve(parent) {
        return parent.u_name;
      }
    },
    email: {
      type: GraphQLString
    }
  }
});
