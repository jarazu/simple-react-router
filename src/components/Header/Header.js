import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/home">Home</Link> &nbsp;
          <Link to="/friends">Friends</Link>  &nbsp;
          <Link to="/about">About</Link> &nbsp;
          <Link to="/about/culture">Culture</Link> &nbsp;
        </div>
    );
};

export default Header;