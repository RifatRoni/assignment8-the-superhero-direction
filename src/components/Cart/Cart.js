import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // total calculation 
    let total = 0;
    for(const author of cart) {
        total = total + author.salary;
    }
    return (
        //Show in cart - selected authors
        <div className="card h-100">
            <div className="card-body cart-body">
                <h5 className="card-title">Selected Authors: {props.cart.length}</h5>
                <p className="card-text mb-2"><strong>Total Cost: ${total}</strong></p>
                <ul>{
                       cart.map(selectedAuthor => <li className="selected-author" key = {selectedAuthor.key}>{selectedAuthor.name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;