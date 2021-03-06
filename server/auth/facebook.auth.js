import axios from "axios";
import _ from "lodash";

import {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  FACEBOOK_APP_OAUTH_URL,
  FACEBOOK_APP_GRAPH_API_URL,
  FACEBOOK_CALLBACK_URL,
  FACEBOOK_APP_GRAPH_OAUTH_ACCESS_TOKEN_URL
} from "../config/keys.config";

import UserModel from "../models/user.model";

export async function facebookProfile(req) {
  const graphApiUrlForAccessToken = FACEBOOK_APP_GRAPH_OAUTH_ACCESS_TOKEN_URL;
  const graphApiUrl = FACEBOOK_APP_GRAPH_API_URL;

  const params = {
    code: req.query.code,
    client_id: FACEBOOK_APP_ID,
    client_secret: FACEBOOK_APP_SECRET,
    redirect_uri: FACEBOOK_CALLBACK_URL
    // scope: 'email',
  };

  try {
    // TODO: created by parwat @ 1/22/2018, 12:25:04 AM
    /**
     * code formatting and optimization yet to be done!!!!
     */

    return await axios
      .get(graphApiUrlForAccessToken, {
        params
      })
      .then(async response => {
        if (response.status === 200 && response.statusText === "OK") {
          const data = response.data;
          const access_token = data.access_token;
          const params = _.assign({}, { access_token });
          _.assign(params, {
            fields: "id, name, picture, email"
          });

          return await axios
            .get(graphApiUrl, {
              params
            })
            .then(response => response.data)
            .catch(err => console.log("2nd error"));
        }
      })
      .catch(e => console.log("1sr erroo"));
  } catch (error) {
    console.log("error while accessing facebook authentication!", error);
  }
}

export async function loginFacebook(profile) {
  const user = await UserModel.findOne({
    facebook: profile.id
  }).exec();

  if (user) return { user, r: true };
  return { unr: true };
}

// FIXME: noticed by parwat @ 1/22/2018, 9:47:17 AM
/**
 * password is a required field in user model but, when a user does a social login he doesn't provide a password, instead access token for authentication
 */

export async function registerFacebook(profile) {
  const user = new UserModel();
  user.facebook = profile.id;
  user.picture = `https://graph.facebook.com${profile.id}/picture?type=large`;
  user.displayName = profile.name;
  user.email = profile.email;
  user.verified = true;
  user.social = true;

  user.save(err => {
    console.log("------------------------------------");
    console.log(err);
    console.log("------------------------------------");
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        return "email already registered!";
      }
      return err;
    }
    return user;
  });
}
