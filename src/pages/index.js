import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg';

const IndexPage = () => (
    <Layout>
        <SEO
            title="Home"
            keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
        />

        <div className="text-center">
            <h1 className="font-serif">Leticia Ortiz, Escritora</h1>
        </div>
    </Layout>
);

export default IndexPage;
