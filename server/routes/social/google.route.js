import { Router } from "express";
import { generateToken } from "../../helpers/jwt.helper";

import { googleProfile } from "../../auth/google.auth";

const router = Router();

router.get("/auth/google/cb", async (req, res) => {
  try {
    const profile = await googleProfile(req);
    console.log("------------------------------------");
    console.log(profile);
    console.log("------------------------------------");
  } catch (error) {}
});

router.get("/auth/google/cancel", async (req, res) => {});

export default router;
