import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__top">
                    <div className="footer__top-wrapper">
                        <h4 className="footer__heading">Are You Ready To Be Blown Away?</h4>

                        <button className="footer__button">CLICK HERE TO FIND OUT</button>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__bottom-wrapper">
                        <span className="copyright">Copyright 2013 Display. All Rights Reserved.</span>

                        <ul className="navigation">
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className="nav-link">
                                    ABOUT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/work" className="nav-link">
                                    WORK
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link">
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
