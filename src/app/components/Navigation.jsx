import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = function() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/second">second</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
