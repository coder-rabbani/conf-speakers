import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './Speakers.css';

const Speakers = () => {
    // declare state for speakers
    const [speakers, setSpeakers] = useState([]);

    // declare state for cart
    const [cart, setCart] = useState([]);

    //data load from json file use useEffect Hook
    useEffect(()=>{
        fetch('./speakers.JSON')
        .then(res => res.json())
        .then(data => setSpeakers(data))
    }, []);

    const handleCart = (speaker) => {
        const newCart = [...cart, speaker];
        setCart(newCart);
    }
    //main container and it is parent component
    return (
        <div className="main-Container">
            <div className="speaker-container">
                {
                    speakers.map(speaker => <Speaker 
                        key={speaker.key}
                        speaker={speaker}
                        handleCart={handleCart}
                    ></Speaker>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Speakers;