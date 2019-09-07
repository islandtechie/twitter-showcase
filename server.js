const express = require('express');
const server = express();
const PORT = 3001;
const axios = require('axios');
const getToken  = require('./ApiService/AuthService');

const SEARCH_URL = 'https://api.twitter.com/1.1/search/tweets.json'

const USER_SEARCH_PARAM = {

}

//const TOKEN = getToken();

server.get('/api/tweets', (req, res) => {
    res.send(tweets);
});

server.get('/api/tweeters', (req, res) => res.send(tweets));
server.get('/api/tweeter/tweets', (req, res) => res.send(tweets));

server.listen(PORT, () => console.log(`Server Now listening on port ${PORT}`));

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