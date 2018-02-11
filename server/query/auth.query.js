import _ from "lodash";
import uniqueString from "unique-string";
import UserModel from "../models/user.model";
import VerificationModel from "../models/verification.model";
// import APIError from '../helpers/APIError.helper';
import { generateToken } from "../helpers/jwt.helper";

export async function signup({ email, password }) {
  try {
    const user = await UserModel.findOne({ email }).exec();
    if (user) return "Email already registered!";

    const u = UserModel.create({ email, password });
    return u;
  } catch (error) {
    return error;
  }
}

export async function login({ email, password }) {
  try {
    const user = await UserModel.findOne({ email }).exec();
    if (!user) return "Authentication failed. user not found!";

    const isPassVerified = await user.isPasswordVerified(password);
    if (!isPassVerified) return "Authentication failed, wrong password!";

    const token = generateToken(user);
    const u = _.pick(user, ["_id", "u_name"]);

    return {
      token,
      user: u
    };
  } catch (error) {
    return error;
  }
}

export async function forgotPassword({ email }) {
  if (!email) return "Email is not provided!";
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return "Email is not registered!";

    const token = await VerificationModel.findOne({ _userId: user._id });

    const RESET_TOKEN = uniqueString();
    token.token_type = "reset";
    token.token = RESET_TOKEN;
    return token;
  } catch (error) {
    return error;
  }
}

export async function resetPassword({ token }) {
  if (!token) return "Token not provided!";
  try {
    const tokenDetails = await VerificationModel.findOne({
      token,
      token_type: "reset"
    }).findOne();

    if (!tokenDetails) return "Token is invalid!";

    const user = await UserModel.findById(tokenDetails._id).exec();

    if (!user) return "User not found!";
    return user;
  } catch (error) {
    return error;
  }
}
