const axios = require('axios');
require('dotenv').config();

let URL = "https://api.twitter.com/oauth2/token";
let credentials = new Buffer(process.env.ACCESS_TOKEN + process.env.ACCESS_TOKEN_SECRET).toString('base64');
let config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Accept" : "application/json",
        "Authorization": "Basic " + credentials,
    },
    body: "grant_type=client_credentials"
};

const getToken = async () => {
    return await axios.post(URL, config)
        .then(response => {
            return response.data.access_token;
        })
        .catch(error => {
            console.log(error.response.data);
        });
    };

module.exports = getToken;