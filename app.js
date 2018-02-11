import express from "express";
// import open from "open";
// import bodyParser from 'body-parser';
import expressGraphQL from "express-graphql";
// import dotenv from 'dotenv';
// import { introspectionQuery, buildASTSchema } from "graphql/utilities";
// import graphql from "graphql";
// import fs from "fs";
import chalk from "chalk";

import schema from "./graph/schema";
import routes from "./server/routes";
import mongoConnection from "./server/config/mongo.config";

const app = express();
// dotenv.load({
//     path: '.env',
// });
mongoConnection(app);
const port = process.env.PORT || 8000;
app.use("/api", routes);
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);
// (async function() {
//   console.log("===================", schema);
//   // const json = await graphql(schema, introspectionQuery);
//   fs.writeFile("./schema.json", JSON.stringify(json, undefined, 2), err => {
//     if (err) throw err;
//     console.log("JSON schema generated!");
//   });
// });

app.listen(port, err => {
  if (err) return console.log("error starting the server");
  // open(`http://localhost:${port}/graphql`);

  return console.log(
    chalk.greenBright(`Server listenig on port: ${chalk.bold(port)}`)
  );
});
