import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../css/style.css';

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
                <Header siteTitle={data.site.siteMetadata.title} />

                <div className="flex flex-col flex-1 md:justify-center w-full">
                    {children}
                </div>
            </div>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
