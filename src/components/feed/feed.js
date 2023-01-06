import React from "react";
import { feed } from "../../mockdata";
import './feed.css';
import { FeedCard } from "./feedCard/feedCard";


export const Feed = () => {
    return (
        <div className="feed-container">
            {
                feed.map ((feedCard, index) => {
                    return (
                        <FeedCard key={index} data={feedCard} />
                    )
                })
            }
        </div>
    )
}