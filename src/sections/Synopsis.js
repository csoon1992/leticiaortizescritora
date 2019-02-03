import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import CtaGroup from '../components/CtaGroup';

const Synopsis = () => (
    <div id="section-synopsis" className="p-8 bg-white">
        <div className="flex flex-row content-center items-stretch container  mx-auto">
            <div className="max-w-md">
                <SectionTitle className="uppercase">
                    Kika, nada pasa hasta que pasa
                </SectionTitle>
                <div className="font-serif text-base leading-normal pl-0 py-0">
                    <p className="mb-2">
                        Que Kika se cruza con situaciones inesperadas es algo
                        que comprobaréis desde el principio. Ella estudió
                        magisterio con la mala fortuna de no haber encontrado
                        nunca el trabajo de su vida. Últimamente nada le sale
                        bien y por si fuera poco aparece David, su ex, el cual
                        la dejó hace cuatro años y llega con fuerzas para
                        retomar la relación. Sin embargo, nadie del entorno de
                        Kika está dispuesto a que vuelva a engatusarla.
                    </p>
                    <p className="mb-2">
                        Y es que Kika tiene muchos frentes abiertos. Sus padres
                        están separados. Ella vive con su madre y con su gato,
                        que a pesar de parecer un simple gato, es un personaje
                        determinante que la acompaña aconsejándola en sus
                        momentos más decisivos. Y por otro lado su padre, un
                        médico excéntrico que las abandonó para irse con una
                        joven sin aceptación por parte de la protagonista y a la
                        que Kika no le hace la vida fácil. Entre unas cosas y
                        otras, todo empieza a liarse más y más produciéndose
                        situaciones desternillantes en las que Kika y sus
                        acompañantes se ven envueltos. Poco a poco comienzan a
                        aflorar los conflictos, el amor y sobre todo el humor.
                    </p>
                    <p className="mb-2">
                        ¿Quién logrará alcanzar el corazón de Kika?
                    </p>
                    <p className="mb-2">
                        Tendrás que leerlo y troncharte de la risa para
                        comprobarlo.
                    </p>
                </div>

                <CtaGroup />
            </div>
            <div className="flex flex-row items-center content-center p-8 flex-1">
                <StaticQuery
                    query={graphql`
                        query PortadaKikaQuery {
                            portada: allFile(
                                filter: { relativePath: { eq: "portada.jpg" } }
                            ) {
                                edges {
                                    node {
                                        childImageSharp {
                                            fluid(maxWidth: 600) {
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
                            className="w-full"
                            alt="Portada KIKA, NADA PASAS HASTA QUE PASA"
                            key={
                                data.portada.edges[0].node.childImageSharp.fluid
                                    .src
                            }
                            fluid={
                                data.portada.edges[0].node.childImageSharp.fluid
                            }
                        />
                    )}
                />
            </div>
        </div>
    </div>
);

export default Synopsis;
