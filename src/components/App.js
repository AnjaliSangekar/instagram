import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header/header';
import { Feed } from './feed/feed';
import { Profile } from './profile/profile';


export const App = () => {
    return (
        <div className='instagram-container'>
            {/* header */}
            
            <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Feed></Feed>} />
                <Route path="/:userName" element={<Profile></Profile>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}


