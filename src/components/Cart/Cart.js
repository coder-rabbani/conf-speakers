import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const paperIcon = <FontAwesomeIcon icon={faPaperPlane} />
    let total= 0;
    for(const speaker of cart){
        total = total + speaker.price;
    }
    return (
        <div className="cart">
            <div className="cart-info">
                <h3>Speakers Added: {props.cart.length}</h3>
                <h4>Total: ${total}</h4>
                <div className="speaker-name">
                    {
                        cart.map(name => <p>{name.name}</p>)
                    }
                </div>
                <button className="cart-btn">{paperIcon} Book Speakers</button>
            </div>
            
        </div>
    );
};

export default Cart;