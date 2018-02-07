import _ from "lodash";
import UserModel from "../models/user.model";

export default async function updateProfile(params) {
  const _id = params._id;
  const updateableFields = _.pick(params, [
    "f_name",
    "l_name",
    "mobileNumber",
    "country",
    "mobileNumber",
    "city",
    "age"
  ]);

  const user = await UserModel.findByIdAndUpdate(
    _id,
    { $set: updateableFields },
    { new: true }
  ).exec();
  if (!user) return "something went wrong!";
  return "user profile updated!";
}
