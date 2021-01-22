import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-warm-800 antialiased">
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
