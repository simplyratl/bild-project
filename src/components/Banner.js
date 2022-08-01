import React from "react";

const Banner = ({ title }) => {
    return (
        <div className="banner">
            <div className="banner__wrapper">
                <h1 className="banner__header">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;
