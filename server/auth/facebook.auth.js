import axios from 'axios';
import _ from 'lodash';

import {
    FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET,
    FACEBOOK_APP_OAUTH_URL,
    FACEBOOK_APP_GRAPH_URL,
    FACEBOOK_CALLBACK_URL,
} from '../config/keys.config';

import UserModel from '../models/user.model';

export async function facebookProfile(req) {

    let accessTokenUrl = FACEBOOK_APP_OAUTH_URL;
    let graphApiUri = FACEBOOK_APP_GRAPH_URL;

    let params = {
        code: req.body.code,
        client_id: req.body.client_id,
        client_secret: req.body.client_secret,
        redirect_uri: req.body.redirectUri,
        scope: 'email',
    };

    try {
        let response = await axios.get(accessTokenUrl, params);
        console.log('=======', response)
        let params = _.assign({}, response);
        _.assign(params, {
            fields: 'id, name, picture, email',
        });

        let profile = await axios(graphApiUri, params);
        return profile;

    } catch (error) {
        console.log('error while accessing facebook authentication!');
    }
}

export async function loginFacebook(profile) {
    let user = await UserModel.findOne({
        facebook: profile.id,
    }).exec();

    if (user) return { user, r: true }
    return { unr: true }
}

export async function registerFacebook(profile) {
    let user = new UserModel();
    user.facebook = profie.id;
    user.picture = `https://graph.facebook.com${profile.id}/picture?type=large`;
    user.displayName = profile.name;
    user.email = profile.email;
    user.verified = true;
    user.social = true;

    user.save((err) => {
        if (err) {
            if (e.name === 'MongoError' && e.code === 11000) {
                return 'email already registered!';
            }
            return err;
        } else {
            return user;
        }
    })
}