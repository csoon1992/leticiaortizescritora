import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CtaGroup from '../components/CtaGroup';

const handleClick = ev => {
    ev.preventDefault();
    const element = document.getElementById('nav');
    element.classList.toggle('block');
    element.classList.toggle('hidden');
};

const Header = ({ siteTitle }) => (
    <div className="header-section flex font-sans min-h-screen text-grey-darkest bg-pink-lightest items-stretch">
        <div className="background-image-header-section flex-1 flex-col flex items-strech">
            <nav className="bg-transparent">
                <div className="flex flex-wrap items-center justify-between mx-auto p-10 md:py-12 md:px-16">
                    <Link
                        to="/"
                        className="flex order-1 md:inline-block w-auto md:w-1/6 no-underline text-grey-darkest"
                    >
                        <span className="font-bold text-xl tracking-tight">
                            {siteTitle}
                        </span>
                    </Link>

                    <button
                        className="flex md:hidden order-2 flex items-center ml-3 py-2 px-0 text-grey-darkest focus:outline-none"
                        onClick={handleClick}
                    >
                        <svg
                            className="fill-current h-4 w-4"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>

                    <div
                        id="nav"
                        className="hidden md:inline-block order-4 md:order-2 w-full md:w-4/6 text-center"
                    >
                        <div className="text-xl">
                            <AnchorLink
                                href="#section-synopsis"
                                className="block md:inline-block mt-4 px-12 md:mt-0 no-underline text-grey-darkest hover:text-pink-dark transition-text-color"
                            >
                                Sinopsis
                            </AnchorLink>

                            <AnchorLink
                                href="#section-contact"
                                className="block md:inline-block mt-4 px-12 md:mt-0 no-underline text-grey-darkest hover:text-pink-dark transition-text-color"
                            >
                                Contacto
                            </AnchorLink>

                            <AnchorLink
                                href="#section-author"
                                className="block md:inline-block mt-4 px-12 md:mt-0 no-underline text-grey-darkest hover:text-pink-dark transition-text-color"
                            >
                                Autora
                            </AnchorLink>
                        </div>
                    </div>

                    <div
                        id="rrss"
                        className="flex order-3 md:inline-block w-full md:w-1/6 text-grey-darkest text-center md:text-right mt-2 md:mt-0"
                    >
                        <div className="text-2xl">
                            <a
                                target="_blank"
                                className="text-grey-darkest hover:text-pink-dark transition-text-color pr-4"
                                href="https://www.facebook.com/leticiaortizescritora/"
                                alt="Facebook Leticia Ortiz Escritora"
                                title="Facebook Leticia Ortiz Escritora"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                target="_blank"
                                className="text-grey-darkest hover:text-pink-dark transition-text-color"
                                href="https://www.instagram.com/leticiaortiz_escritora/"
                                alt="Instagram Leticia Ortiz Escritora"
                                title="Instagram Leticia Ortiz Escritora"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex-1 flex content-wrapper text-grey-darkest items-center">
                <div className="caption-wrapper w-2/3 mx-auto">
                    <div className="caption max-w-md">
                        <h2 className="text-6xl font-serif font-normal text-black">
                            ¡Primer libro, ya a la venta!
                        </h2>
                        <div className="text-lg font-normal max-w-sm mt-4 leading-normal">
                            <p>
                                Kika hará que te enamores de su humor y te
                                sacará sonrisas en cada capítulo.
                            </p>
                            <p>
                                Si necesitas reír y te gustan las relaciones
                                humanas, no lo dudes, esta es tu novela.
                            </p>
                        </div>

                        <CtaGroup />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header;
