import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '../css/style.css';

const Layout = ({ children }) => (   
    <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        {children}
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
