import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import dogIllustration from '../images/dog-illustration.svg';
import AmazonButton from '../components/AmazonButton';
import EciButton from '../components/EciButton';
import LetrameButton from '../components/LetrameButton';

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

        <div className="flex flex-col md:flex-row items-center mb-3">
            <div className="md:w-2/3 md:mr-8">
                <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
                    The point is... to live one's life in the full complexity of
                    what one is, which is something much darker, more
                    contradictory, more of a maelstrom of impulses and passions,
                    of cruelty, ecstacy, and madness, than is apparent to the
                    civilized being who glides on the surface and fits smoothly
                    into the world.
                </p>

                <p className="font-bold mt-4 text-right text-xs uppercase">
                    – Thomas Nagel
                </p>
            </div>

            <div className="w-2/3 md:w-1/3">
                <img src={dogIllustration} alt="A dog relaxing" />
            </div>
        </div>
    </Layout>
);

export default AboutPage;
