import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg';

const IndexPage = () => (
    <Layout>
        <SEO
            title="Home"
            keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
        />

        <Header siteTitle="Leticia Ortiz escritora" />
    </Layout>
);

export default IndexPage;
