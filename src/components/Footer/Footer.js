import React from 'react';
import './Footer.css';

//footer component
const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <p>Conf <span>Speakers</span></p>
            </div>   
                    
            <div className="menu footer-menu">
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/past-events">Past Events</a></li>
                    <li><a href="/upcoming-events">Upcoming Events</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
        
    );
};

export default Footer;