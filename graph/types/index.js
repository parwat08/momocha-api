import { GraphQLObjectType } from "graphql";
import uniqueString from "unique-string";
import {
  connectionArgs,
  connectionFromPromisedArray,
  globalIdField
} from "graphql-relay";

import { userConnection, mediaConnection } from "../connections";
import UserModel from "../../server/models/user.model";
import nodeDefs from "../nodes";

// Root query
const viewer = new GraphQLObjectType({
  name: "Viewer",
  fields: () => ({
    id: globalIdField("Viewer"),
    user: {
      type: userConnection.connectionType,
      args: connectionArgs,
      resolve: (parent, args) =>
        connectionFromPromisedArray(UserModel.find(), args)
    },
    media: {
      type: mediaConnection.connectionType,
      args: connectionArgs,
      resolve: (parent, args) => connectionFromPromisedArray()
    }
  }),
  interfaces: [nodeDefs.nodeInterface]
});

export default new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    node: nodeDefs.nodeField,
    viewer: {
      type: viewer,
      resolve: () => viewer
    }
  })
});
