import React from "react";

const ApplicationList = ({ post }) => {
    return (
        <div className="post-list">
            <a href="#" className="image-link">
                <img src={post.image} alt={post.title} className="post-list-image" />
            </a>

            <div className="post-list-info">
                <span className="title">{post.title}</span>
                <span className="info">{post.category}</span>
            </div>
        </div>
    );
};

export default ApplicationList;
