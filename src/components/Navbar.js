import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { BsTwitter, BsDribbble } from "react-icons/bs";
import { BiRss } from "react-icons/bi";
import { FaPinterestP, FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
    const location = useLocation().pathname.replace("/", "");

    const navigation = [{ title: "home" }, { title: "about" }, { title: "work" }, { title: "contact" }];

    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__top-bar">
                    <Link to="/" className="navbar__logo">
                        <div className="logo-picture">D</div>
                        <span className="logo-text">Display</span>
                    </Link>

                    <div className="navbar__socials">
                        <Link to="#" className="social">
                            <BsTwitter className="icon" />
                        </Link>
                        <Link to="#" className="social">
                            <FaFacebookF className="icon" />
                        </Link>
                        <Link to="#" className="social">
                            <BiRss className="icon" />
                        </Link>
                        <Link to="#" className="social">
                            <FaPinterestP className="icon" />
                        </Link>
                        <Link to="#" className="social">
                            <FaGooglePlusG className="icon" />
                        </Link>
                        <Link to="#" className="social">
                            <BsDribbble className="icon" />
                        </Link>
                    </div>
                </div>

                <div className="navbar__botom-bar">
                    <ul className="nav-list">
                        {navigation.map((nav, index) => (
                            <li className="nav-item" key={index}>
                                <Link
                                    to={`/${nav.title === "home" ? "" : nav.title}`}
                                    className={`nav-link ${location === nav.title && "active"}`}
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
