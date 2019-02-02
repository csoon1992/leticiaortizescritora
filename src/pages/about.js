import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import dogIllustration from '../images/dog-illustration.svg';
import AmazonButton from '../components/AmazonButton';
import EciButton from '../components/EciButton';
import LetrameButton from '../components/LetrameButton';
import Contact from '../sections/Contact';

const AboutPage = () => (
    <Layout>
        <SEO
            title="About"
            keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
        />

        <div className="flex flex-col md:flex-row items-center mb-3">
            <div className="md:w-2/3 md:mr-8">
                <h1>Buttons</h1>
            </div>

            <div className="w-2/3 md:w-1/3">
                <AmazonButton
                    className="mb-3"
                    href="https://www.amazon.es/dp/8417779310/ref=cm_sw_em_r_mt_dp_U_iRBvCb3BTG6MR"
                />
                <EciButton
                    href="https://www.elcorteingles.es/ebooks/tagus-9788417818395-kika-nada-pasa-hasta-que-pasa-ebook/"
                    className="mb-3"
                />
                <LetrameButton href="https://www.letrame.com/producto/kika-nada-pasa-hasta-que-pasa/" />
            </div>
        </div>

        <Contact />
    </Layout>
);

export default AboutPage;
