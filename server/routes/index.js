import { Router } from "express";
import { generateToken } from "../helpers/jwt.helper";
import {
  facebookProfile,
  loginFacebook,
  registerFacebook
} from "../auth/facebook.auth";
import { googleProfile } from "../auth/google.auth";

const router = Router();

router.get("/auth/facebook/cb", async (req, res) => {
  try {
    const profile = await facebookProfile(req);
    const data = await loginFacebook(profile);

    if (data.unr) {
      const rData = await registerFacebook(profile);
      const token = generateToken(profile);
      return res.send(token);
    }
    const token = generateToken(profile);
    return res.send(token);
  } catch (error) {
    console.log("error facebook signing", error);
  }
});

router.get("/auth/facebook/cancel", async (req, res) => {});

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
