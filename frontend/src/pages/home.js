import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Header from '../components/header';
import '../styles/HomePage.css';
import ResourceForm from '../components/ResourceForm';
import { fetchResources } from '../api'; 

export function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
        const postsData = await fetchResources();
        setPosts(postsData); 
    };
    getPosts(); 
  }, []); 

  return (
    <div>
      <Header />
      <div className="home-container">
        <ResourceForm />
        <div className="post-list">
          {posts.map(post => (
            <PostCard key={post._id} title={post.title} content={post.description} author={post.author} />
          ))}
        </div>
      </div>
    </div>
  );
}

