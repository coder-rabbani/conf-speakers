import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="nav-bar">
                <div className="logo">
                    <p>Conf <span>Speakers</span></p>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/past-events">Past Events</a></li>
                        <li><a href="/upcoming-events">Upcoming Events</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="header-info">
                <h1>Book Speakers for Conference</h1>
                <p>Book speakers for your upcoming events, conference with reasonable price!</p>
                <h3>Total Budget: $1.5 Million</h3>
            </div>
        </div>
    );
};

export default Header;