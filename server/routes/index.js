import BASE_URL from "../config/server.config";
import facebookRoute from "./social/facebook.route";
import googleRoute from "./social/google.route";
import mediaUploadRoute from "./rest.api.route";

export default function(app) {
  app.use(`${BASE_URL}/api`, facebookRoute);
  app.use(`${BASE_URL}/api`, googleRoute);
  app.use(`${BASE_URL}/api`, mediaUploadRoute);
}
