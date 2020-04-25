import { Link } from 'gatsby';
import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

const Menu = ({ siteTitle }) => (
    <nav className="bg-transparent">
        <div className="flex flex-wrap items-center justify-between mx-auto py-6 md:py-6 px-8 lg:py-12 lg:px-16 space-x-3">
            <Link to="/" className="inline-block w-auto  text-grey-darkest">
                <span className="font-bold text-xl tracking-tight">
                    {siteTitle}
                </span>
            </Link>

            <div id="nav" className="text-left flex-1 pl-3">
                <div className="text-md sm:text-lg lg:text-xl md:text-left flex items-center space-x-6">
                    <AnchorLink
                        href="#section-books"
                        className="text-grey-darkest hover:text-pink-dark transition-text-color"
                    >
                        Libros
                    </AnchorLink>

                    <AnchorLink
                        href="#section-contact"
                        className="text-grey-darkest hover:text-pink-dark transition-text-color"
                    >
                        Contacto
                    </AnchorLink>

                    <AnchorLink
                        href="#section-author"
                        className="text-grey-darkest hover:text-pink-dark transition-text-color"
                    >
                        Autora
                    </AnchorLink>
                </div>
            </div>

            <div
                id="rrss"
                className="hidden sm:flex md:inline-block w-full md:w-auto md:flex-grow-0 text-grey-darkest text-center md:text-right mt-2 md:mt-0"
            >
                <div className=" flex text-lg lg:text-2xl space-x-2">
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-grey-darkest hover:text-pink-dark transition-text-color inline-block"
                        href="https://www.facebook.com/leticiaortizescritora/"
                        alt="Facebook Leticia Ortiz Escritora"
                        title="Facebook Leticia Ortiz Escritora"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-grey-darkest hover:text-pink-dark transition-text-color inline-block"
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
);

Menu.propTypes = {
    siteTitle: PropTypes.string,
};

export default Menu;
