
import React from 'react';
import './PostCard.css'; 

function PostCard({ title, content, author }) {
  return (
    <div className="post-card">
      <h3 className="post-title">{title}</h3>
      <p className="post-content">{content}</p>
      <p className="post-author">Posted by: {author}</p>
    </div>
  );
}

export default PostCard;
