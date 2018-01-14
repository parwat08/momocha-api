import UserModel from '../models/user.model';
import APIError from '../helpers/APIError.helper';
import { generateToken, } from '../helpers/jwt.helper';

export async function signup({ email, password, }) {

    let user = await UserModel.findOne({ email }).exec();
    if (user) return 'Email already registered!';

    let user = new UserModel({ email, password, });
    user.save(err => {
        if (err) return err;
        return 'user_created!';
    })
}

export async function login({ email, password }) {

    let user = await UserModel.findOne({ email }).exec();
    if (!user) return 'Authentication failed. User not found.';

    let isPassVerified = await user.isPasswordVerified(password);
    if (!isPassVerified) return 'Authentication failed, Wrong password!';

    let token = generateToken(user);
    return token;
}
