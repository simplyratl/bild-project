import React from "react";
import { BiRss } from "react-icons/bi";
import { BsDribbble, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGooglePlusG, FaPinterestP } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation().pathname;

    const navigation = [
        { title: "home", path: "/" },
        { title: "about", path: "/about" },
        { title: "work", path: "/work" },
        { title: "contact", path: "/contact" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__top-bar">
                    <Link to="/" className="navbar__logo">
                        <div className="logo-picture">D</div>
                        <span className="logo-text">Display</span>
                    </Link>

                    <div className="navbar__socials">
                        <a href="#" className="social" target="_blank">
                            <BsTwitter className="icon" />
                        </a>
                        <a href="#" className="social" target="_blank">
                            <FaFacebookF className="icon" />
                        </a>
                        <a href="#" className="social" target="_blank">
                            <BiRss className="icon" />
                        </a>
                        <a href="#" className="social" target="_blank">
                            <FaPinterestP className="icon" />
                        </a>
                        <a href="#" className="social" target="_blank">
                            <FaGooglePlusG className="icon" />
                        </a>
                        <a href="#" className="social" target="_blank">
                            <BsDribbble className="icon" />
                        </a>
                    </div>
                </div>

                <div className="navbar__botom-bar">
                    <ul className="nav-list">
                        {navigation.map((nav, index) => (
                            <li className="nav-item" key={index}>
                                <a
                                    href={`${nav.path}`}
                                    className={`nav-link ${location === nav.path && "active"}`}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
