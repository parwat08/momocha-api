// FACEBOOK

export const FACEBOOK_APP_ID = 545104319185255;
export const FACEBOOK_APP_SECRET = '3c0f5a1ce95360dd4d6340c5237b49ca';
export const FACEBOOK_APP_OAUTH_CODE_URL = 'https://www.facebook.com/v2.11/dialog/oauth'; // used to get the code
export const FACEBOOK_APP_GRAPH_OAUTH_ACCESS_TOKEN_URL = 'https://graph.facebook.com/v2.11/oauth/access_token'; // used to get the access_token
export const FACEBOOK_APP_GRAPH_API_URL = 'https://graph.facebook.com/v2.11/me';
export const FACEBOOK_CALLBACK_URL = 'http://localhost:3000/api/auth/facebook/cb';

const url = 'https://www.facebook.com/v2.11/dialog/oauth?response_type=code&client_id=545104319185255&redirect_uri=http://localhost:3000/api/auth/facebook/cb&scope=email';


// GOOGLE
export const GOOGLE_APP_API_KEY = 'AIzaSyBVWSlAKvDtyI-sX4dCDVDWd52Ax8jOWKc';
export const GOOGLE_APP_CLIENT_ID = '322415290174-co2i28tdkfv1h133uat4gnar484b91l1.apps.googleusercontent.com';
export const GOOGLE_APP_CLIENT_SECRET = 'peiBb74OUpMA8kce1XQHV2ND';
export const GOOGLE_APP_OAUTH_CODE_URL = 'https://accounts.google.com/o/oauth2/auth';

// const url = 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&include_granted_scopes=truestate=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/api/auth/google/cb&response_type=code&client_id=client_id'

const scope = 'https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile'