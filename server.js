const express = require('express');
const server = express();
const PORT = 3001;
const axios = require('axios');
const moment = require('moment');
const getToken  = require('./ApiService/AuthService');

const SEARCH_URL = 'https://api.twitter.com/1.1/search/tweets.json'

const USER_SEARCH_PARAM = {

}

const TOKEN = getToken();

server.get('/api/tweets', (req, res) => {
       /*  axios.get(SEARCH_URL, {
            params: {
            q: req.query.q+' since:'+moment().subtract(7, 'days').format("YYYY-MM-DD"),
            result_type: 'popular',
            }
        })
        .then(function (response) {
            console.log(response);
            return tweets;
        })
        .catch(function (error) {
            console.log(error);
      });  */
    res.send(tweets);
});

server.get('/api/tweeters', (req, res) => res.send(tweeters));

server.get('/api/tweeter/tweets', (req, res) => res.send(tTweets));

server.listen(PORT, () => console.log(`Server Now listening on port ${PORT}`));

tweeters = [
    {
        id:1,
        handle: "elonmusk",
        username: "Elon Musk",
        avatar: 'https://pbs.twimg.com/profile_images/1170099706686406656/JmuQKKeD_normal.jpg'
    },
    {
        id:2,
        handle: "elonmusk",
        username: "Elon Musk",
        avatar: 'https://pbs.twimg.com/profile_images/1170099706686406656/JmuQKKeD_normal.jpg'
    },
    {
        id:3,
        handle: "elonmusk",
        username: "Elon Musk",
        avatar: 'https://pbs.twimg.com/profile_images/1170099706686406656/JmuQKKeD_normal.jpg'
    },
    {
        id:4,
        handle: "elonmusk",
        username: "Elon Musk",
        avatar: 'https://pbs.twimg.com/profile_images/1170099706686406656/JmuQKKeD_normal.jpg'
    },
    {
        id:5,
        handle: "elonmusk",
        username: "Elon Musk",
        avatar: 'https://pbs.twimg.com/profile_images/1170099706686406656/JmuQKKeD_normal.jpg'
    }
]
tTweets =  [
    {
        username: "mojombo",
        handle: "@mojombo",
        id: 1,
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        text: "some text",
        date: '12 June 2019'

    },
    {
        username: "defunkt",
        handle: "@defunkt",
        id: 2,
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 3,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 4,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 5,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    }
],
tweets = [
    {
        username: "mojombo",
        handle: "@mojombo",
        id: 1,
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        text: "some text",
        date: '12 June 2019'

    },
    {
        username: "defunkt",
        handle: "@defunkt",
        id: 2,
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 3,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 4,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 5,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 6,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 7,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 8,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 9,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    },
    {
        username: "pjhyett",
        handle: "pjhyett",
        id: 10,
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        text: "some text",
        date: '12 June 2019'
    }
];