import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Cart from '../Cart/Cart';
import './Authors.css'

const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [cart, setCart] = useState([]);
    // fetching-data
    useEffect(() => {
        fetch('./authors.JSON')
            .then(res => res.json())
            .then(data => setAuthors(data))
    },[]);
    // handle add to cart
    const handleAddToCart = (author) => {
        const newCart = [...cart, author];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="row">
                {/* Authors list div */}
                <div className="col-lg-9 order-2 order-lg-1">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            authors.map(author => <Author
                                key = {author.key}
                                author = {author}
                                handleAddToCart = {handleAddToCart}
                            ></Author>)
                        }
                    </div>
                </div>
                {/* cart Selected author div */}
                <div className="col-lg-3 order-1 order-lg-2">
                    <div className="col sticky vertical-height100">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
                        






            </div>
        </div>
    );
};

export default Authors;