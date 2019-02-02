import React from 'react';
import ContactForm from '../components/ContactForm';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Contact = () => (
    <StaticQuery
        query={graphql`
            query FirmaQuery {
                firma: allFile(filter: { relativePath: { eq: "firma.png" } }) {
                    edges {
                        node {
                            childImageSharp {
                                fluid(maxWidth: 400) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <div id="section-contact" className="p-8">
                <div className="container mx-auto">
                    <div className="md:flex md:flex-row md:items-stretch py-8 ">
                        <ContactForm />
                        <div className="flex flex-row items-center content-center p-8 flex-1">
                            <Img
                                className="w-full"
                                alt="Firma"
                                key={
                                    data.firma.edges[0].node.childImageSharp
                                        .fluid.src
                                }
                                fluid={
                                    data.firma.edges[0].node.childImageSharp
                                        .fluid
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        )}
    />
);

export default Contact;
