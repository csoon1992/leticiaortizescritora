import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AmazonButton = ({ className, href }) => (
    <StaticQuery
        query={graphql`
            query AmazonLogoQuery {
                logos: allFile(
                    filter: { relativePath: { eq: "amazon-light.png" } }
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
                    rel="noopener noreferrer"
                    className={`block text-left px-3 py-1 bg-amazon text-white font-sans no-underline hover:bg-amazon-darker w-24 md:w-32 rounded-lg ${className ||
                        ''}`}
                >
                    <span className="text-xs md:text-sm">Disponible en</span>
                    <Img
                        className="block mt-2 ml-0 mb-0 w-full"
                        alt="Amazon"
                        key={data.logos.edges[0].node.childImageSharp.fluid.src}
                        fluid={data.logos.edges[0].node.childImageSharp.fluid}
                    />
                </a>
            </Fragment>
        )}
    />
);

export default AmazonButton;
