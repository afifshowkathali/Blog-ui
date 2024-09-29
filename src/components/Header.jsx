import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="profile">
        <img src="/images/dp.jpeg" alt="Ralph Edwards" className="profile-img"/>
        <span className='title'>PHOTOGRAPHY BLOG</span>
      </div>
      <nav className="nav">
        <button className="homebtn" href="/">Home</button>
        <button className="blogsbtn" href="/blogs">Blogs</button>
      </nav>
      <button className="add-button">ADD</button>
    </header>
  );
};

export default Header;
