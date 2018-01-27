import _ from 'lodash'
import UserModel from '../models/user.model';

export async function updateProfile(params) {
  let _id = params._id;
  let updateableFields = _.pick(params, ['f_name', 'l_name', 'mobileNumber', 'country', 'mobileNumber', 'city', 'age']);

  let user = await UserModel.findByIdAndUpdate(_id, { $set: updateableFields }, { new: true }).exec();
  if (!user) return 'something went wrong!';
  return 'user profile updated!';
}
