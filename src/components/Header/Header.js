import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../../images/logo.jpg'


const Header = () => {
    return (
        <div>
            {/* navbar menu */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-menu">
                <div className="container">
                    {/* logo and site tite */}
                    <a className="navbar-brand" href="https://js-leaders-conference.netlify.app/">
                        <img src={logo} alt="" width="30" height="24"/>
                        <span className="logo-color">JS Leaders</span>
                    </a>
                    <div>
                    <ul className="navbar-nav-ul me-auto mb-2 mb-lg-0 ms-0 ps-0">
                        <li className="nav-item nav-li">
                            <a className="nav-link nav-li-a" aria-current="page" href="https://js-leaders-conference.netlify.app/">Home</a>
                        </li>
                        <li className="nav-item nav-li">
                            <a className="nav-link nav-li-a" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-li-a" href="/members">Members</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-li-a" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>       
            </nav>
            {/* header description */}
            <div className="d-flex align-items-center  justify-content-center vertical-height100">
               <div>
                    <div className="pb-5 text-center">
                        <h3 className="my-3"><span className="text-white">The Worlds Biggest</span> <br/><span className="brand-color">JS Leaders Conference</span> </h3>
                        <div className="w-25 border-bottom border-warning mx-auto"></div>
                        <p className="text-white my-2">Explore JavaScripts More. Make Arrangement of the world biggest JavaScript Conference.<br/> Choose from here the best leaders.</p>
                        <h4 className="blinking">Budget $200 Million</h4>
                    </div>
                    <div className="text-white text-center mt-5">
                        <p className="scroll">Scroll to view More <br/><FontAwesomeIcon icon={faAngleDoubleDown} /> </p>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Header;