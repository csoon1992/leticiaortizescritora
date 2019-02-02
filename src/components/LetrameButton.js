import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const LetrameButton = ({ className, href }) => (
    <StaticQuery
        query={graphql`
            query LetrameLogoQuery {
                logos: allFile(
                    filter: { relativePath: { eq: "letrame-logo.png" } }
                ) {
                    edges {
                        node {
                            childImageSharp {
                                fluid(maxWidth: 92) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Fragment>
                <a
                    href={href}
                    target="_blank"
                    className={`block text-left px-3 py-1 bg-grey-lighter text-grey-dark font-sans no-underline hover:text-grey-dark w-32 rounded-lg ${className}`}
                >
                    <span className="text-sm">Disponible en</span>
                    <Img
                        className="block mt-1 mr-3 ml-0 mb-0"
                        alt="Letrame"
                        key={data.logos.edges[0].node.childImageSharp.fluid.src}
                        fluid={data.logos.edges[0].node.childImageSharp.fluid}
                    />
                </a>
            </Fragment>
        )}
    />
);

export default LetrameButton;
