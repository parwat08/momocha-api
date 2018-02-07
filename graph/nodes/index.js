import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import userType from "../types/user.type";

// nodeDefinitions function takes 2 arguments, both are functions, the 1st func recieves globalId(nodeId), where we map global into it's corresponding data objects, globalId can used to read the type object using the fromGlobalId function.
// the 2nd function recieves the result obj and relay uses that to map it's to graphql data type
export default nodeDefinitions(
  globalId => {
    const { type } = fromGlobalId(globalId);
    if (type === "User") {
      return "user"; // db query
    }
    return null;
  },
  obj => {
    if (obj instanceof userType) {
      return userType;
    }
    return null;
  }
);
