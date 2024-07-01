import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/BlogList.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="blog-list">
      {posts.map(post => (
        <div key={post.id} className="blog-preview">
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>By Author {post.userId}</p>
            <p>{post.body.substring(0, 100)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
