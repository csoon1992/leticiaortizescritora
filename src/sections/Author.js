import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Author = () => (
    <div id="section-author" className="bg-pink-lightest pt-8 px-8">
        <div className="flex flex-row content-center items-stretch container mx-auto">
            <div className="flex flex-row justify-end items-stretch content-stretch p-8 pb-0 w-1/3">
                <StaticQuery
                    query={graphql`
                        query AutoraQuery {
                            autora: allFile(
                                filter: { relativePath: { eq: "autora.png" } }
                            ) {
                                edges {
                                    node {
                                        childImageSharp {
                                            fluid(maxWidth: 300) {
                                                ...GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    `}
                    render={data => (
                        <Img
                            className="w-full max-h-full"
                            alt="Leticia Ortiz"
                            key={
                                data.autora.edges[0].node.childImageSharp.fluid
                                    .src
                            }
                            fluid={
                                data.autora.edges[0].node.childImageSharp.fluid
                            }
                        />
                    )}
                />
            </div>
            <div className="flex-1">
                <div className="font-serif text-base leading-normal pl-0 pt-0 p-8">
                    <SectionTitle>Sobre la autora</SectionTitle>
                    <p className="mb-2 max-w-md text-lg">
                        Leticia Ortiz nació en Linares en 1985 aunque
                        actualmente reside en Elche. Desde temprana edad tuvo
                        dos vocaciones: la química y la escritura. Comenzó a
                        escribir poesía a sus trece años, siendo galardonada
                        años después en el certamen provincial “Federico García
                        Lorca”. En 2016 decide escribir su primera novela en
                        prosa: <em>Kika, nada pasa hasta que pasa</em>, una
                        comedia romántica en la que desata todo su humor,
                        dándole ese toque cómico personal que se encuentra
                        presente en gran parte del libro.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Author;
