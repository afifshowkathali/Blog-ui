import React from 'react';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <img src={post.imageUrl} alt={post.title} className="blog-image"/>
      <div className="blog-content">
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-description">{post.description}</p>
        <div className="blog-info">
          <span>{post.author}</span> | <span>{post.date}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
