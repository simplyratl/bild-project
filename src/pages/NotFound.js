import React from "react";

const NotFound = () => {
    return (
        <div className="not-found">
            <img
                src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1571606093"
                alt="404 not found"
                className="not-found__image"
            />

            <h2 className="not-found__header">404. Page not found.</h2>
            <p className="not-found__paragraph">
                We're sad to see this happen. Try redirecting to home page?
            </p>
        </div>
    );
};

export default NotFound;
