import express from "express";
import chalk from "chalk";
import expressGraphQL from "express-graphql";
import multer from "multer";
import fs from "fs";
import path from "path";
import cors from "cors";
// import open from "open";
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
import { printSchema } from "graphql";
// import graphql from "graphql";
// import fs from "fs";

import schema from "./graph/schema";
import routes from "./server/routes";
import mongoConnection from "./server/config/mongo.config";
import uploadR from "./server/routes/rest.api.route";
const app = express();
// dotenv.load({
//     path: '.env',
// });
mongoConnection(app);
const port = process.env.PORT || 8000;
const upload = multer({ dest: "uploads/" }).single("avatar");

app.use(cors());
// app.use(upload);
app.use(
  "/graphql",
  expressGraphQL(req => ({
    schema,
    graphiql: true,
    rootValue: { req }
  }))
);
app.get("/", function(req, res) {
  res.send("Welcome to graphql API!");
});

app.post("/upload-music", upload, uploadR);
// (async function() {
//   console.log("===================", schema);
//   // const json = await graphql(schema, introspectionQuery);
//   fs.writeFile("./schema.json", JSON.stringify(json, undefined, 2), err => {
//     if (err) throw err;
//     console.log("JSON schema generated!");
//   });
// });

// const schemaPath = path.resolve(__dirname, "schema.graphql");
// console.log("scp", schemaPath, printSchema);
// fs.writeFileSync(schemaPath, printSchema(schema));

// routes(app); // passing app instance
app.listen(port, err => {
  if (err) return console.log("error starting the server");
  // open(`http://localhost:${port}/graphql`);

  return console.log(
    chalk.greenBright(`Server listenig on port: ${chalk.bold(port)}`)
  );
});
