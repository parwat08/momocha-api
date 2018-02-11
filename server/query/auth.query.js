import uniqueString from "unique-string";
import UserModel from "../models/user.model";
import VerificationModel from "../models/verification.model";
// import APIError from '../helpers/APIError.helper';
import { generateToken } from "../helpers/jwt.helper";
/* @flow */
export async function signup({ email, password }) {
  const user = await UserModel.findOne({ email }).exec();
  if (user) return "Email already registered!";

  UserModel.create({ email, password }, (err, user) => {
    if (err) return "Error while creating user!";
    return "User created!";
  });
}

export async function login({ email, password }) {
  try {
    const user = await UserModel.findOne({ email }).exec();
    if (!user) return "Authentication failed. User not found.";

    const isPassVerified = await user.isPasswordVerified(password);
    if (!isPassVerified) return "Authentication failed, Wrong password!";

    const token = generateToken(user);
    return {
      token,
      user: {
        id: user._id,
        username: user.u_name
      }
    };
  } catch (error) {
    return error;
  }
}

export async function forgotPassword({ email }) {
  if (!email) return "email is not provided!";

  const user = UserModel.findOne({ email }).exec();
  if (!user) return "email is not registered!";

  const token = VerificationModel.findOne({ _userId: user._id }).exec();

  const RESET_TOKEN = uniqueString();
  token.token_type = "reset";
  token.token = RESET_TOKEN;
}

export async function resetPassword({ token }) {
  if (!token) return "token not provided";

  const tokenDetails = await VerificationModel.findOne({
    token,
    token_type: "reset"
  })
    .findOne()
    .exec();

  if (!tokenDetails) return "token is invalid!";

  const user = await UserModel.findById(tokenDetails._id).exec();

  if (!user) return "user not found!";
}
