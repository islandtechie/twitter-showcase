import React, { Component, Fragment } from 'react'

class Home extends Component {
    state = {
        searchText: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchText);
    }

    onChange = e => {
        this.setState({ searchText: e.target.value});
    };

    onClick = () => {
        console.log('goo');
    };

    componentDidMount() {
        document.body.style.backgroundColor = "#1dcaff";
    }
    render() {
        return (
            <Fragment>
                <div className="logo">
                    <img src="_assets/t-logo.png" alt=""/>
                </div>
                <div className="search-area">
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
                                <form onSubmit={this.onSubmit}>
                                    <input 
                                        type="text" 
                                        placeholder="@elonmusk or 'bananas'" 
                                        name="user-search"
                                        onChange={this.onChange}
                                        value={this.state.searchText}
                                    />
                                    <input type="submit" name="" id="" hidden/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="tweet">
                        <div className="tweet_avatar">
                            <img src="_assets/t-logo.png" alt=""/>
                        </div>
                        <div className="tweet__body">
                            <div className="tweet_body_header">
                                <span className="tweet__username">GrabATweet</span>
                                <span className="tweet__handle">@grabATweet</span> &#8226;
                                <span className="tweet__date">12 May 2019</span>
                            </div>
                            <div className="tweet_body_text">
                                <p>Use the Grab-A-Tweet box below to search for a tweet from someone we follow! <em>#InspirationLaughsSelfDevelopment</em></p>
                                <button type="button" id="random-search" onClick={this.onClick}>Grab-A-Tweet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Home;