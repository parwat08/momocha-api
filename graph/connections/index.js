import { connectionDefinitions } from "graphql-relay";
import mediaType from "../types/media.type";
import userType from "../types/user.type";

export const mediaConnection = connectionDefinitions({
  name: "media",
  nodeType: mediaType
});

export const userConnection = connectionDefinitions({
  name: "user",
  nodeType: userType
});
