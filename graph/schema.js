import { GraphQLSchema } from "graphql";

import RootQuery from "./types";
import RootMutation from "./mutations";

export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
