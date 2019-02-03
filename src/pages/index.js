import React from 'react';
import Layout from '../components/layout';
import Header from '../sections/Header';
import SEO from '../components/seo';
import Contact from '../sections/Contact';
import Synopsis from '../sections/Synopsis';
import Author from '../sections/Author';
import Footer from '../sections/Footer';

const IndexPage = () => (
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

        <Header siteTitle="Leticia Ortiz escritora" />

        <Synopsis />
        <Contact />
        <Author />

        <Footer/>
    </Layout>
);

export default IndexPage;
