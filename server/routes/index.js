import { Router } from 'express';
import { generateToken, getToken, decodeToken, } from '../helpers/jwt.helper';
import { facebookProfile, loginFacebook, registerFacebook, } from '../auth/facebook.auth';
import { googleProfile, } from '../auth/google.auth';

const router = Router();

router.get('/auth/facebook/cb', async function (req, res) {
  try {
    let profile = await facebookProfile(req);
    let data = await loginFacebook(profile);

    if (data.unr) {
      let rData = await registerFacebook(profile);
      let token = generateToken(profile);
      return res.send(token);
    } else {
      let token = generateToken(profile);
      return res.send(token);
    }
  } catch (error) {
    console.log('error facebook signing', error);
  }
})

router.get('/auth/facebook/cancel', async function (req, res) {

})

router.get('/auth/google/cb', async function (req, res) {

  try {
    let profile = await googleProfile(req);
    console.log('------------------------------------');
    console.log(profile);
    console.log('------------------------------------');
  } catch (error) {

  }
})

router.get('/auth/google/cancel', async function (req, res) {

})


export default router;
