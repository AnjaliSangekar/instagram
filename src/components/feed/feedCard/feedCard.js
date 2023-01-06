import React from "react";

import { AiOutlineHeart, AiOutlineComment, AiOutlineMore, AiOutlineShareAlt } from "react-icons/ai";
import './feedCard.css';

export const FeedCard = (props) => {
    // props = {data: [{}]}
    const {data} = props; 
    return (
     
        <div className="feed-card">
            <div className="top">
                <div className="profile">
                    <div className="profile-icon">
                        <img src="./images/profile1.png" />  
                    </div>
                    <div className="profile-detail">
                        <div className="profile-name">
                            {data.name}
                        </div>
                        <div className="profile-location">
                            {data.location}
                        </div>
                    </div>
                </div>
                <AiOutlineMore className="profile-more-menu" />
            </div>
            <div className="mid">
                <img src={data.image} />
            </div>
            <div className="bottom">
                <div className="reaction">
                    <AiOutlineHeart className="reaction-icon" size={25} />
                    <AiOutlineComment className="reaction-icon" size={25} />
                    <AiOutlineShareAlt className="reaction-icon" size={25} />
                </div>
                <div className="likes">
                    {data.likesCount} Likes
                </div>
                <div className="comment-container">
                    {
                        data.comments.map ((comment) => {
                            return (
                                <div className="comment-box" key={comment.id}>
                                <span className="comment-username">{comment.author}</span>
                                <span className="comment">{comment.comment}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="add-comment">
                    <input type="text" placeholder="Add a comment..." />
                </div>
            </div>
        </div>
    )
}