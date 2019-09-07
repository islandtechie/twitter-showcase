import React, { Component, Fragment } from 'react';
import Tweet from '../components/Tweet';
import Tweeters from '../components/Tweeters';

class RandomSearch extends Component {

    state = {
        tweets: [
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
        tweeters:[
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
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
    }

    getTweeters = () => {
        fetch('/api/tweeters')
            .then(res => res.json())
            .then((data) => {
                this.setState({ tweeters : data });
            });
    }


    componentDidMount() {
        document.body.style.backgroundColor = "#fff";
        //this.getTweeters();
    }

    render() {
        return (
            <Fragment>
                <div className="top-bar">
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" id="random-search" onClick={this.onClick}>Grab-A-Tweet</button>
                    </form>
                </div>
                <div className="tweet-search-area">
                    <div className="tweeters">
                    {this.state.tweeters.map(tweeter => (
                        <Tweeters
                            key={tweeter.id} tweet={tweeter}
                        />
                    ))}
                        
                    </div>
                    <div className="tweets">
                        <div className="tweet">
                            <div className="tweet_avatar">
                                <img src="_assets/t-logo.png" alt=""/>
                            </div>
                            <div className="tweet__body">
                                <div className="tweet_body_header">
                                    <span className="tweet__username">SearchForATweet</span>
                                    <span className="tweet__handle">@SearchForATweet</span> &#8226;
                                    <span className="tweet__date">12 May 2019</span>
                                </div>
                                <div className="tweet_body_text">
                                    <p>Use the Search box below to search for a tweet from someone you follow! You can search by <em>@twitter_handle</em> or <em>tweet content</em>.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tweet">
                            <div className="tweet_avatar">
                                <img src="_assets/t-logo.png" alt=""/>
                            </div>
                            <div className="tweet__body">
                                <div className="tweet_body_header">
                                    <span className="tweet__username">SearchForATweet</span>
                                    <span className="tweet__handle">@SearchForATweet</span> &#8226;
                                    <span className="tweet__date">12 May 2019</span>
                                </div>
                                <div className="tweet_body_text">
                                    <p>Use the Search box below to search for a tweet from someone you follow! You can search by <em>@twitter_handle</em> or <em>tweet content</em>.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tweet">
                            <div className="tweet_avatar">
                                <img src="_assets/t-logo.png" alt=""/>
                            </div>
                            <div className="tweet__body">
                                <div className="tweet_body_header">
                                    <span className="tweet__username">SearchForATweet</span>
                                    <span className="tweet__handle">@SearchForATweet</span> &#8226;
                                    <span className="tweet__date">12 May 2019</span>
                                </div>
                                <div className="tweet_body_text">
                                    <p>Use the Search box below to search for a tweet from someone you follow! You can search by <em>@twitter_handle</em> or <em>tweet content</em>.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tweet">
                            <div className="tweet_avatar">
                                <img src="_assets/t-logo.png" alt=""/>
                            </div>
                            <div className="tweet__body">
                                <div className="tweet_body_header">
                                    <span className="tweet__username">SearchForATweet</span>
                                    <span className="tweet__handle">@SearchForATweet</span> &#8226;
                                    <span className="tweet__date">12 May 2019</span>
                                </div>
                                <div className="tweet_body_text">
                                    <p>Use the Search box below to search for a tweet from someone you follow! You can search by <em>@twitter_handle</em> or <em>tweet content</em>.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tweet">
                            <div className="tweet_avatar">
                                <img src="_assets/t-logo.png" alt=""/>
                            </div>
                            <div className="tweet__body">
                                <div className="tweet_body_header">
                                    <span className="tweet__username">SearchForATweet</span>
                                    <span className="tweet__handle">@SearchForATweet</span> &#8226;
                                    <span className="tweet__date">12 May 2019</span>
                                </div>
                                <div className="tweet_body_text">
                                    <p>Use the Search box below to search for a tweet from someone you follow! You can search by <em>@twitter_handle</em> or <em>tweet content</em>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default RandomSearch;