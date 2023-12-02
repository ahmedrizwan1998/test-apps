import React from 'react';
import './navbar.css';
import Image from "next/image"
import grove from '../../../../public/img/Grooves-title.png';
import island from '../../../../public/img/island.png';
import snapchat from '../../../../public/img/snapchat.png';
import tiktokIcon from '../../../../public/img/tiktok-icon.png';
import topDiv from '../../../../public/img/top-div.png';
import twitterIcon from '../../../../public/img/twitter-icon.png';
import usaIcon from '../../../../public/img/usa-flag.png';
import arrow from '../../../../public/img/arrow.svg';

const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className='navbar_main'>
                        <a className="navbar-brand" href="#">
                            <Image src={grove} width={160} height={360} alt="Grove" />
                        </a>
                        <div style={{ display: "flex", alignItems: 'center' }}>
                            <a href="" className='pd_10'>
                                <Image src={tiktokIcon} alt="tiktok" />
                            </a>
                            <a href="" className='pd_10'>
                                <Image src={twitterIcon} alt="twitter" />
                            </a>
                            <a href="" className='pd_10'>
                                <Image src={snapchat} alt="snapchat" />
                            </a>
                            <button className='loginBtn'>
                                Login
                            </button>
                            <a href="" className='pd_10'>
                                <Image src={usaIcon} alt="usa" />
                            </a>
                        </div>
                    </div>
                    <div className='sec_main_nav'>
                        <hr />
                        <ul className='ul_display'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    DINE WITH US
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    PLAN YOUR VISIT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    EVENTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    VIEW GROVES MAP
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    OUR STORY
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    CONTACT US
                                </a>
                            </li>
                            {/* You can add more list items here */}
                        </ul>
                        <hr />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    DINE WITH US
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    PLAN YOUR VISIT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Our Story
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact US
                                </a>
                            </li>
                            {/* You can add more list items here */}
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='hero-div-wrap w-50 h-auto'>
                <section className="hero-section">
                    <p>KHAWAJA YANNI</p>
                    <h1 style={{ fontSize: "75px", fontFamily: "serif" }}>The new era of luxury</h1>
                    <p className='pb-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button className="Book_Btn d-flex">Book Reservation Now <span className='ps-5'><Image className='ms-auto' src={arrow} alt='arrow' /></span></button>
                </section>
            </div>
            <div className="container"></div>
        </>
    );
};

export default Navbar;
