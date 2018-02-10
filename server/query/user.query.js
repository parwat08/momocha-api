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

export async function updateUserById(userId, userDetails) {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, userDetails, {
      new: true
    }).exec();

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
