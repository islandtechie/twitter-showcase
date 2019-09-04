import React, { Component, Fragment } from 'react';
import Tweet from '../components/Tweet';

class UserSearch extends Component {

    state = {
        searchText: '',
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
            },
        ],
    }

    onChange = e => {
        this.setState({ searchText: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchText);
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#fff";
    }

    render() {
        return (
            <Fragment>
                <div className="top-bar">
                    <form onSubmit={this.onSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search a Tweet" 
                            name="user-search"
                            onChange={this.onChange}
                            value={this.state.searchText}
                        />
                        <input type="submit" name="" id="" hidden/>
                    </form>
                </div>
                <div className="search-result-area">
                    {this.state.tweets.map(tweet => (
                    <Tweet 
                        key={tweet.id} tweet={tweet}
                    />
            ))}
                </div>
            </Fragment>
        )
    }
}
export default UserSearch;