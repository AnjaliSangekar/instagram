import React, { useState } from "react";
import './profile.css';
import { useParams } from "react-router-dom";

import { profile } from "../../mockdata";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";



export const Profile = (props) => {
    const [activeSection, setSection] = useState('post');
    const [toggleModal, setModal] = useState(false);
    const [modalData, setModalData] = useState('');
    const {userName} = useParams(); // {userName: anjali} => {userName}

    const openModal = (url) => {
        setModalData(url);
        setModal(true);
    }

    return(
        <div className="profile-container">
            <div className="profile-top">
                <div className="profile-image-wrapper">
                    <div className="profile-image" style={{'backgroundImage': 'url(./images/profile2.jfif)'}} />
                </div>
                <div className="profile-intro">
                    <div className="profile-username">
                        {profile.userName}
                    </div>
                    <div className="profile-follow">
                        <div className="count-warpper">
                            <span className="count"> {profile.postsCount} </span> Posts
                        </div>
                        <div className="count-warpper">
                            <span className="count"> {profile.followersCount} </span> followers
                        </div>
                        <div className="count-warpper">
                            <span className="count"> {profile.followingCount} </span> following
                        </div>
                    </div>
                    <div className="profile-about">
                        <div className="profile-name">
                           {profile.name}
                        </div>
                        <div className="profile-desc">
                           {profile.about}
                        </div>
                        <div className="profile-link">
                            <Link to={profile.aboutLink}>{profile.aboutLink}</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-part"></div>
            <div className="profile-bottom">
                <div className="profile-tag">
                    <div className={`${activeSection === 'post' && 'active-tag'} post`} onClick={() => setSection('post')}>
                       POSTS
                    </div>
                    <div className={`${activeSection === 'saved' && 'active-tag'} saved`} onClick={() => setSection('saved')}>
                       SAVED
                    </div>
                    <div className={`${activeSection === 'tagged' && 'active-tag'} tagged`} onClick={() => setSection('tagged')}>
                       TAGGED
                    </div>
                </div>
            </div>
            <div className="profile-section">
                {
                    activeSection === "post" &&
                    <div className="post-card-wrapper">
                        <div className="post-card" onClick={() => openModal("This is first post")}>
                            <img src="./images/profile1.png" />
                        </div>
                        <div className="post-card" onClick={() => openModal("This is second post")}>
                            <img src="./images/profile2.jfif" />
                        </div>
                        <div className="post-card" onClick={() => openModal("This is third post")}>
                            <img src="./images/profile1.png" />
                        </div>
                        <div className="post-card" onClick={() => openModal("This is forth post")}>
                            <img src="./images/profile2.jfif" />
                        </div>
                    </div>
                }
                {
                    activeSection === "saved" &&
                    <div className="post-card-wrapper">
                        <div className="post-card">
                            <img src="./images/profile1.png" />
                        </div>
                        <div className="post-card">
                            <img src="./images/profile2.jfif" />
                        </div>
                    </div>
                }
                {
                    activeSection === "tagged" &&
                    <div className="post-card-wrapper">
                        No tagged post yet...
                    </div>
                }
            </div>

            {
                toggleModal &&
                <div className="modal">
                    <div className="modal-card">
                      <AiOutlineCloseCircle size={20} className="close-modal" onClick={() => setModal(false)} />
                       {modalData}
                    </div>
                </div>
            }
            
        </div>
    )
}