import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import HomePage from './Pages/HomePage';
import PostPage from './Pages/PostPage';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Routes>
  </Router>
);

export default App;
