import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Main = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

    const [recaptchaRes, setRecapchaRes] = useState("");

    function onChange(value) {
        setRecapchaRes(value);
    }

    const validateForm = (e) => {
        e.preventDefault();

        if (name.length === 0 || email.length === 0 || message.length === 0)
            return setError("All fields must be filled.");

        if (message.length > 1000) return setError("Message cannot be greater than 1000 characters.");

        if (recaptchaRes.length === 0) return setError("You have to validate reCAPTCHA.");

        setError("Successfuly sent.");
    };

    return (
        <div className="contact-main">
            <div className="contact-main__wrapper">
                <div className="contact-main__form-container">
                    {error !== "Successfuly sent." && (
                        <form className="contact-main__form" onSubmit={validateForm}>
                            <h3 className="contact-main__heading">CONTACT FORM</h3>
                            <p className="contact-main__paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dolor
                                et tristique bibendum. Aenean sollicitudin vitae dolor ut posuere.
                            </p>

                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="input"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="input"
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <textarea
                                    cols="30"
                                    rows="10"
                                    className="textarea"
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE}
                                onChange={onChange}
                                style={{ marginTop: 20 }}
                            />

                            <button className="submit">SEND MESSAGE</button>
                        </form>
                    )}

                    {<h4 style={{ marginTop: 20 }}>{error}</h4>}
                </div>

                <div className="contact-main__info">
                    <h3 className="contact-main__heading">CONTACT INFO</h3>

                    <p className="contact-main__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit velit justo.
                    </p>

                    <ul className="contact-main__info__list">
                        <li className="item">
                            <div className="item-inside">
                                <span className="category bold">email:</span>
                                <a href="mailto:info@display.com" className="category-info">
                                    info@display.com
                                </a>
                            </div>

                            <div className="item-inside">
                                <span className="category bold">phone:</span>
                                <span className="category-info">1.306.222.4545</span>
                            </div>
                        </li>
                        <li className="item">
                            <div className="item-inside address">
                                <span className="category-info">222 2nd Ave South</span>
                                <span className="category-info">Saskabush SK S7M 1T6</span>
                            </div>
                        </li>
                    </ul>

                    <ul className="contact-main__info__list-workday">
                        <h3 className="contact-main__heading">STORE HOURS</h3>

                        <li className="item-work">
                            <span className="day">Monday - Thursday</span>
                            <div className="work-hours">8 am - 5 pm</div>
                        </li>
                        <li className="item-work">
                            <span className="day">Friday</span>
                            <div className="work-hours">8 am - 6 pm</div>
                        </li>
                        <li className="item-work">
                            <span className="day">Saturday</span>
                            <div className="work-hours">9 am - 5 pm</div>
                        </li>
                        <li className="item-work">
                            <span className="day">Sundays & Holidays</span>
                            <div className="work-hours">Closed</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;
