import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Styles/BlogPost.css';
import SocialShare from './SocialShare';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>By Author {post.userId}</p>
      <div className="content">{post.body}</div>
      <SocialShare url={window.location.href} />
    </div>
  );
};

export default BlogPost;
