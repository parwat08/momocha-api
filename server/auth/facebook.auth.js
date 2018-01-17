import axios from 'axios';
import _ from 'lodash';

import {
    FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET,
    FACEBOOK_APP_OAUTH_URL,
    FACEBOOK_APP_GRAPH_API_URL,
    FACEBOOK_CALLBACK_URL,
    FACEBOOK_APP_GRAPH_OAUTH_ACCESS_TOKEN_URL,
} from '../config/keys.config';

import UserModel from '../models/user.model';

export async function facebookProfile(req) {

    let graphApiUrlForAccessToken = FACEBOOK_APP_GRAPH_OAUTH_ACCESS_TOKEN_URL;
    let graphApiUrl = FACEBOOK_APP_GRAPH_API_URL;

    let params = {
        code: req.query.code,
        client_id: FACEBOOK_APP_ID,
        client_secret: FACEBOOK_APP_SECRET,
        redirect_uri: FACEBOOK_CALLBACK_URL,
        scope: 'email',
    };

    try {
        let access_token = await axios.get(graphApiUrlForAccessToken, {
            params
        }).then(response => {
            if (response.status === 200 && response.statusText === 'OK') return response.body.access_token;
        }).catch(e => console.log('1sr erroo'))
        console.log('accesstoken', access_token);
        let params = _.assign({}, access_token);
        _.assign(params, {
            fields: 'id, name, picture, email',
        });
        console.log('params', params)
        let profile = await axios(graphApiUrl, {
            params,
        }).then(response => response.data)
        .catch(err => console.log('2nd error'))
        console.log('profile', profile);
        return profile;

    } catch (error) {
        console.log('error while accessing facebook authentication!', error);
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