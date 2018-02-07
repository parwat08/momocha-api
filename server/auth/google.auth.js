import axios from "axios";

import {
  GOOGLE_APP_CLIENT_ID,
  GOOGLE_APP_CLIENT_SECRET,
  GOOGLE_APP_OAUTH_CODE_URL
} from "../config/keys.config";

export async function googleProfile(req) {
  const accessTokenUrl = GOOGLE_APP_OAUTH_CODE_URL;

  const params = {
    code: req.query.code,
    client_id: GOOGLE_APP_CLIENT_ID
  };
}
