import React from "react";
import './blogCard.css';
function Blogs({ title, date, description }) {
    return (
        <div className="blog-card">
            <h3 className="blog-title">{title}</h3>
            {date && <span className="blog-date">{date}</span>}
            <p className="blog-description">{description}</p>
        </div>
    );
};
export default Blogs
