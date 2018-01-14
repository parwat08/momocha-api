import axios from 'axios';

function facebook(req) {

    let accessTokenUrl = ''
    let graphApiUri = ''

    let params = {
        code: req.body.code,
        client_id: req.body.client_id,
        client_secret: req.body.clientId,
        redirect_uri: req.body.redirectUri,
        scope: 'email',
    };

    try {
        let response = axios.get()
    } catch (error) {
        
    }

}