import React from "react";
import './header.css';
import { Link } from "react-router-dom";

import { AiOutlineHome, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

export const Header = () => {
    return (
        <header> 
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                      <img src="./images/Instagram_logo.png"/>
                    </Link>
                </div>
                <div className="search-bar">
                    <div className="search">
                        <input type="text" placeholder="search" />
                        <AiOutlineSearch className="search-icon"/>
                    </div>  
                </div>
                <div className="nav">
                    <div>
                        <AiOutlineSearch size={25} className="search-icon-nav"/> 
                        <Link to="/"><AiOutlineHome size={25} /></Link>  
                        <Link to="/anju"><AiOutlineUser size={25} /></Link>     
                    </div>
                </div>
            </div>
        </header>
           
    )
}