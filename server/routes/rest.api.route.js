import { Router } from "express";
import getMusicMetaData from "../helpers/musicmeta.helper";

const router = Router();

// router.post("/upload-images", async function(req, res) {
//   console.log(req.file);
//   console.log(req.files);
// });

router.post("/upload-music", async function(req, res) {
  console.log(req.file);
  console.log(req.files);
});

export default router;
