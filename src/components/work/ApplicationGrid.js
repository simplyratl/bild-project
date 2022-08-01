import React from "react";

const ApplicationGrid = ({ post }) => {
    return (
        <div className="post">
            <img src={post.image} alt={post.title} className="post-grid-image" />
        </div>
    );
};

export default ApplicationGrid;
