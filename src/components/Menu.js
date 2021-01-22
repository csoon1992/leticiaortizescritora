import { Link } from 'gatsby';
import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import MenuItem from './MenuItem';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const menuContainerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    delay: 1,
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const Menu = ({ siteTitle }) => (
  <nav className="bg-transparent">
    <div className="flex flex-row flex-wrap items-center space-x-3">
      <div id="nav" className="sm:text-left flex-1 md:pl-3">
        <motion.div
          className="text-xl sm:text-lg lg:text-xl sm:text-left flex items-center justify-center space-x-6"
          variants={menuContainerAnimation}
          initial="hidden"
          animate="visible"
        >
          <MenuItem href="#section-books" title="Libros"></MenuItem>
          <MenuItem href="#section-contact" title="Contacto"></MenuItem>
          <MenuItem href="#section-author" title="Autora"></MenuItem>
        </motion.div>
      </div>

      <div
        id="rrss"
        className="hidden sm:flex md:inline-block w-full md:w-auto md:flex-grow-0 text-grey-warm-800 text-center md:text-right mt-2 pl-5 md:mt-0"
      >
        <div className=" flex flex-row text-lg lg:text-2xl space-x-2">
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="transition duration-300 text-grey-warm-800 hover:text-primary-800  inline-block"
            href="https://www.facebook.com/leticiaortizescritora/"
            alt="Facebook Leticia Ortiz Escritora"
            title="Facebook Leticia Ortiz Escritora"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="transition duration-300 text-grey-warm-800 hover:text-primary-800  inline-block"
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
