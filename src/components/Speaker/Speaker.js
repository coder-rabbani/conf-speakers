import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import './Speaker.css';

const Speaker = (props) => {
    const {name, designation, age, img, price, founder} = props.speaker;
    const plusIcon = <FontAwesomeIcon icon={faPlus} />
    return (
        <div className="speaker">
            <div className="speaker-photo">
                <img src={img} alt={name} />
            </div>
            <div className="speaker-info">
                <h4>Name: {name}</h4>
                <p><strong>Job:</strong> {designation}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Founder:</strong> {founder}</p>
                <p><strong>Price:</strong> ${price}</p>  
            </div>
            <button onClick={()=>props.handleCart(props.speaker)}>{plusIcon} Add Speakers</button>
        </div>
    );
};

export default Speaker;