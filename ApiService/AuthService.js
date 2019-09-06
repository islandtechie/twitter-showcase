const axios = require('axios');
require('dotenv').config();
const grantType = "grant_type=client_credentials";

let URL = "https://api.twitter.com/oauth2/token";

const getToken = async () => {
    console.log('token service called!');
    return await axios.post(URL, grantType,
    {
      auth: {
        username: process.env.TWITTER_API_KEY,
        password: process.env.TWITTER_SECRET_KEY
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Accept": "application/json"
      },
      responseType: 'application/json',
    })
    .then(response => {
      return response.data;
      // console.log(response.data);
    })
    .catch(err => {
      console.log(err.response.data);
    });
}

module.exports = getToken;