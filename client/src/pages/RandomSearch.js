import React, { Component, Fragment } from 'react';
import Tweet from '../components/Tweet';
import Tweeters from '../components/Tweeters';

class RandomSearch extends Component {

    state = {
        tweets: [],
        tweeters:[]
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

    getTweetersTweets = () => {
        fetch('/api/tweeter/tweets')
            .then(res => res.json())
            .then((data) => {
                this.setState({ tweets : data });
            });
    }


    componentDidMount() {
        document.body.style.backgroundColor = "#fff";
        this.getTweeters();
        this.getTweetersTweets();
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
                        {this.state.tweets.map(tweet => (
                            <Tweet 
                                key={tweet.id} tweet={tweet}
                            />
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default RandomSearch;