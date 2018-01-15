import uniqueString from 'unique-string';
import UserModel from '../models/user.model';
import VerificationModel from '../models/verification.model';
import APIError from '../helpers/APIError.helper';
import { generateToken, } from '../helpers/jwt.helper';

export async function signup({ email, password, }) {

    let user = await UserModel.findOne({ email }).exec();
    if (user) return 'Email already registered!';

    UserModel.create({ email, password }, (err, user) => {
        if (err) return 'error while creating user!';
        return 'user created';
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

export async function forgotPassword({ email }) {
    if (!email) return 'email is not provided!';

    let user = UserModel.findOne({ email }).exec();
    if (!user) return 'email is not registered!';

    let token = VerificationModel.findOne({ _userId: user._id }).exec();

    const RESET_TOKEN = uniqueString();
    token.token_type = 'reset';
    token.token = RESET_TOKEN;


}

export async function resetPassword({ token }) {
    if (!token) return 'token not provided';

    let tokenDetails = await VerificationModel.findOne({
        token,
        token_type: 'reset',
    }).findOne().exec();

    if (!tokenDetails) return 'token is invalid!';

    let user = await UserModel.findById(tokenDetails._id).exec();

    if (!user) return 'user not found!';

}