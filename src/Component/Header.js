import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => (
  <header className="header">
    <h1>My Blog</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;
