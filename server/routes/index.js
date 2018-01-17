import { Router } from 'express';
import { facebookProfile, loginFacebook, registerFacebook, } from '../auth/facebook.auth';
import jwt from '../helpers/jwt.helper';

const router = Router();

router.get('/auth/facebook/cb', async function (req, res) {
    // res.send(req.query.code)
    try {
        let profile = await facebookProfile(req);
    //     let data = await loginFacebook(profile);

    //     if (data.unr) {
    //         let rData = await registerFacebook(profile);
    //         return jwt.generateToken(profile);
    //     } else {
    //         return jwt.generateToken(profile);
    //     }
    } catch (error) {
        console.log('error facebook signing', error);
    }
})

router.get('/auth/facebook/cancel', async function (req, res) {

})

router.get('/auth/google/cb', async function (req, res) {
    
})

router.get('/auth/google/cancel', async function (req, res) {

})


export default router;
