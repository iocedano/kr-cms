import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Header from '../components/Header';

const Base = ({ children, className }) => (
  <div className="base">
    <Header />
    <main className={classnames('main-content', className)} role="main">
      {children}
    </main>
  </div>
);

Base.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string
};

export default Base;
