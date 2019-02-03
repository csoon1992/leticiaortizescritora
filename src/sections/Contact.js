import React from 'react';
import ContactForm from '../components/ContactForm';
import { StaticQuery, graphql } from 'gatsby';

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
            <div id="section-contact" className="px-8 py-10 bg-grey-lighter">
                <div className="container mx-auto">
                    <div className="md:flex md:flex-row md:items-stretch">
                        <ContactForm />
                    </div>
                </div>
            </div>
        )}
    />
);

export default Contact;
