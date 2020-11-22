import React from 'react';
import Layout from '../components/layout';
import Header from '../sections/Header';
import SEO from '../components/seo';
import Contact from '../sections/Contact';
import Books from '../sections/Books';
import Author from '../sections/Author';
import Footer from '../sections/Footer';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
    const books = data.allContentfulBooks.edges.map(({ node }) => {
        const book = node;
        return {
            id: book.id,
            title: book.title,
            cover: {
                title: book.portada.title,
                image: book.portada.localFile.childImageSharp,
            },
            position: book.position,
            description: book.description,
        };
    });

    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[
                    'novelas',
                    'leticia ortiz',
                    'kika, nada pasa hasta que pasa',
                    'escritora',
                    'humor',
                    'romance',
                ]}
            />

            <Header siteTitle="Leticia Ortiz escritora" data={data} />

            <Books books={books} />
            <Contact />
            <Author />

            <Footer />
        </Layout>
    );
};

export const query = graphql`
    {
        contentfulHeroContent {
            title
            content {
                raw
            }
        }

        allContentfulBooks {
            edges {
                node {
                    id
                    title
                    portada {
                        id
                        title
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 350, webpQuality: 90) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                    description {
                        raw
                    }
                    position
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.object,
};

export default IndexPage;
