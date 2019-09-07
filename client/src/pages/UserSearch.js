import React, { Component, Fragment } from 'react';
import Tweet from '../components/Tweet';

class UserSearch extends Component {

    state = {
        placeholder: 'Search a Tweet',
        searchText: '',
        tweets: [],
        loading: false
    }

    onChange = e => {
        this.setState({ searchText: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.getTweets(this.state.searchText);
    };

    loading = () => { this.setState({ loading : !this.state.loading })};

    getTweets = (searchText) => {
        fetch(`/api/tweets?q=${searchText}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ tweets : data });
                this.loading();
            });
    }

    componentDidMount() {

        document.body.style.backgroundColor = "#fff";
        if (this.props.searchText !== null) {
            this.setState({ placeholder : this.props.searchText });
            this.loading();
            this.getTweets(this.props.searchText);
        }
    }

    render() {

        if (this.state.loading) {
            return (
                <Fragment>
                    <div className="top-bar">
                        <form onSubmit={this.onSubmit}>
                            <input 
                                type="text" 
                                placeholder={this.state.placeholder} 
                                name="user-search"
                                onChange={this.onChange}
                                value={this.state.searchText}
                            />
                            <input type="submit" name="" id="" hidden/>
                        </form>
                    </div>
                    <div className="search-result-area">
                        <p>Loading...</p>
                    </div>
                </Fragment>
            )
        }else{
            return (
                <Fragment>
                    <div className="top-bar">
                        <form onSubmit={this.onSubmit}>
                            <input 
                                type="text" 
                                placeholder={this.state.placeholder} 
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
}
export default UserSearch;