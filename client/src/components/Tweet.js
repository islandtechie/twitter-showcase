import React from 'react'

function Tweet(props) {
    const {username} = props.tweet;
    return (
        <div className="tweet">
            <div className="tweet_avatar">
                <img src="_assets/t-logo.png" alt=""/>
            </div>
            <div className="tweet__body">
                <div className="tweet_body_header">
                    <span className="tweet__username">{username}</span>
                    <span className="tweet__handle">{username}</span> &#8226;
                    <span className="tweet__date">{username}</span>
                </div>
                <div className="tweet_body_text">
                    <p>Use the Search box below to search for a tweet from someone you follow! You can search by <em>@twitter_handle</em> or <em>tweet content</em>.</p>
                </div>
            </div>
        </div>
    )
}
export default Tweet;