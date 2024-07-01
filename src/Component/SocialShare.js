import React from 'react';
import '../Styles/SocialShare.css';

const SocialShare = ({ url }) => (
  <div className="social-share">
    <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
    <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer">Share on Twitter</a>
    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target="_blank" rel="noopener noreferrer">Share on LinkedIn</a>
  </div>
);

export default SocialShare;
