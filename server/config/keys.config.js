export const FACEBOOK_APP_ID = 545104319185255;
export const FACEBOOK_APP_SECRET = '3c0f5a1ce95360dd4d6340c5237b49ca';
export const FACEBOOK_APP_OAUTH_URL = 'https://www.facebook.com/v2.11/dialog/oauth';
export const FACEBOOK_APP_GRAPH_URL = 'https://graph.facebook.com/v2.11/oauth/access_token';
export const FACEBOOK_CALLBACK_URL = 'http://localhost:3000/auth/facebook/callback';

const url = 'https://www.facebook.com/v2.11/dialog/oauth?response_type=code&client_id=545104319185255&redirect_uri=http://localhost:3000/api/auth/facebook/cb&scope=email';
