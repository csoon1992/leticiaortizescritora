import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const EciButton = ({ className, href }) => (
    <StaticQuery
        query={graphql`
            query EciLogoQuery {
                logos: allFile(
                    filter: { relativePath: { eq: "eci-logo.png" } }
                ) {
                    edges {
                        node {
                            childImageSharp {
                                fluid(maxWidth: 100) {
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
                    className={`block text-left px-3 py-1 bg-eci text-white font-sans no-underline hover:bg-eci-darker w-24 md:w-32 rounded-lg ${className ||
                        ''}`}
                >
                    <span className="text-xs md:text-sm">Disponible en</span>
                    <Img
                        className="block mt-2 ml-0 mb-0 w-full"
                        alt="Eci"
                        key={data.logos.edges[0].node.childImageSharp.fluid.src}
                        fluid={data.logos.edges[0].node.childImageSharp.fluid}
                    />
                </a>
            </Fragment>
        )}
    />
);

export default EciButton;
