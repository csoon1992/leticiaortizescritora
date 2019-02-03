/* eslint-disable react/jsx-no-target-blank */
import PropTypes from 'prop-types';
import React from 'react';
import HeaderCaption from '../components/HeaderCaption';
import Menu from '../components/Menu';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const handleClick = ev => {
    ev.preventDefault();
    const element = document.getElementById('nav');
    element.classList.toggle('block');
    element.classList.toggle('hidden');
};

const Header = ({ siteTitle }) => (
    <header>
        <div className="header-section font-sans h-screen text-grey-darkest bg-pink-lightest relative">
            <div className="h-screen absolute pin-t pin-x z-10">
                <div className="flex flex-col h-screen">
                    <Menu siteTitle={siteTitle} />
                    <div className="flex-1 flex flex-row content-wrapper text-grey-darkest items-stretch justify-start">
                        <HeaderCaption />
                    </div>
                </div>
            </div>
            <div className="absolute pin-b pin-x h-screen relative z-0">
                <div className="flex flex-row-reverse justify-stretch content-stretch items-end h-screen">
                    <div className="w-2/3 h-screen relative flex flex-col-reverse">
                        <StaticQuery
                            query={graphql`
                                query HeaderQuery {
                                    header: allFile(
                                        filter: {
                                            relativePath: {
                                                eq: "header-section-bg.png"
                                            }
                                        }
                                    ) {
                                        edges {
                                            node {
                                                childImageSharp {
                                                    fluid(maxHeight: 1600) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            `}
                            render={data => (
                                <Img
                                    className="ml-0 mb-0"
                                    alt="Imagen cabecera"
                                    key={
                                        data.header.edges[0].node
                                            .childImageSharp.fluid.src
                                    }
                                    fluid={
                                        data.header.edges[0].node
                                            .childImageSharp.fluid
                                    }
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header;
