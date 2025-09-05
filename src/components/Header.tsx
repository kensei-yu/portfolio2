import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="main-nav">
      <Link to="/" className="site-title">Kensei Yu</Link>
      <div className="nav-links">
        <Link to="/about">About me</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;