import React from 'react'

function Tweet(props) {
    const {username, handle, avatar} = props.tweet;
    return (
        <div className="tweet">
            <div className="tweet_avatar">
                <img src={avatar} alt=""/>
            </div>
            <div className="tweet__body">
                <div className="tweet_body_header">
                    <span className="tweet__username">{username}</span>
                    <span className="tweet__handle">@{handle}</span> 
                </div>
            </div>
        </div>
    )
}
export default Tweet;