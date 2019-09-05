import React, { Component, Fragment } from 'react';
import Tweet from '../components/Tweet';

class UserSearch extends Component {

    state = {
        searchText: '',
        tweets: []
    }

    onChange = e => {
        this.setState({ searchText: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchText);
        fetch('/api/tweets')
            .then(res => res.json())
            .then((data) => console.log(data));
    };

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