import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import './Author.css'

const Author = (props) => {
    const {name, occupation, country, famousBook, salary, image} = props.author;
    return (
        // single author show in ui
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top card-image" alt="..."/>
                <div className="card-body pb-0">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mb-0"><strong>Occupation:</strong> {occupation}</p>
                    <p className="card-text mb-0"><strong>Country:</strong> {country}</p>
                    <p className="card-text mb-0"><strong>Famous Book:</strong> {famousBook}</p>
                    <p className="card-text mb-0"><strong>Salary:</strong> ${salary}</p>
                </div>
                <div className="card-footer bg-transparent border-0 mx-auto mb-2">
                    <div className="social-icon">
                        <a className="me-3"  href="https://www.facebook.com"><i class="fab fa-facebook-square"></i> </a>
                        <a className="me-3" href="https://www.twitter.com"><i class="fab fa-twitter-square"></i></a>
                        <a href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a>
                    </div>
                   <button
                   onClick={() => props.handleAddToCart(props.author)}
                   className="btn btn-warning px-5 text-white"><FontAwesomeIcon icon={faCartArrowDown} /> Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default Author;