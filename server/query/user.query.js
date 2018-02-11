import _ from "lodash";
import UserModel from "../models/user.model";

export async function getUsers(params) {
  try {
    const users = await UserModel.find(params).exec();
    return users;
  } catch (error) {
    return error;
  }
}

export async function getUserById(userId) {
  try {
    const user = await UserModel.findById(userId).exec();
    return user;
  } catch (error) {
    return error;
  }
}

export async function postUser(userDetails) {}

export async function updateUserById(userId, userDetails) {
  try {
    const updateableFields = _.pick(userDetails, [
      "f_name",
      "l_name",
      "mobileNumber",
      "country",
      "mobileNumber",
      "city",
      "age"
    ]);

    const user = await UserModel.findByIdAndUpdate(
      userId,
      { $set: updateableFields },
      { new: true }
    ).exec();

    return user;
  } catch (error) {
    return error;
  }
}

export async function deleteUserById(userId) {
  try {
    UserModel.findByIdAndRemove(userId).exec();
    return `User with ${userId} removed!`;
  } catch (error) {
    return error;
  }
}
