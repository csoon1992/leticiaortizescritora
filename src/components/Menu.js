import { Link } from 'gatsby';
import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Menu = ({ siteTitle }) => (
    <nav className="bg-transparent">
        <div className="flex flex-wrap items-center justify-between mx-auto py-6 md:py-6 px-8 lg:py-12 lg:px-16">
            <Link
                to="/"
                className="flex md:inline-block w-auto md:w-2/6 lg:w-1/6 no-underline text-grey-darkest"
            >
                <span className="font-bold text-xl tracking-tight">
                    {siteTitle}
                </span>
            </Link>

            <div
                id="nav"
                className="md:inline-block w-full md:w-3/6 lg:w-4/6 sm:text-center"
            >
                <div className="text-md sm:text-lg lg:text-xl md:text-left lg:text-center">
                    <AnchorLink
                        href="#section-synopsis"
                        className="block inline-block mt-1 sm:mt-4 px-0 pr-2 sm:px-4 lg:px-12 md:mt-0 no-underline text-grey-darkest hover:text-pink-dark transition-text-color"
                    >
                        Sinopsis
                    </AnchorLink>

                    <AnchorLink
                        href="#section-contact"
                        className="block inline-block mt-1 sm:mt-4 px-4 lg:px-12 md:mt-0 no-underline text-grey-darkest hover:text-pink-dark transition-text-color"
                    >
                        Contacto
                    </AnchorLink>

                    <AnchorLink
                        href="#section-author"
                        className="block inline-block mt-1 sm:mt-4 px-4 lg:px-12 md:mt-0 no-underline text-grey-darkest hover:text-pink-dark transition-text-color"
                    >
                        Autora
                    </AnchorLink>
                </div>
            </div>

            <div
                id="rrss"
                className="hidden sm:flex md:inline-block w-full md:w-1/6 text-grey-darkest text-center md:text-right mt-2 md:mt-0"
            >
                <div className="text-lg lg:text-2xl">
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-grey-darkest hover:text-pink-dark transition-text-color pr-4"
                        href="https://www.facebook.com/leticiaortizescritora/"
                        alt="Facebook Leticia Ortiz Escritora"
                        title="Facebook Leticia Ortiz Escritora"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
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
);

export default Menu;
