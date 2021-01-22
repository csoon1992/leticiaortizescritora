import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const now = new Date();
const curYear = now.getFullYear();

const Footer = () => (
  <footer
    id="section-footer"
    className="bg-pink-darkest text-pink-lightest px-8 py-10"
  >
    <div className="footer-wrapper max-w-md mx-auto text-center">
      <p className="mb-3">&copy; {curYear} - Leticia Ortiz</p>
      <div id="rrss-footer" className="text-center md:mt-0 mb-3">
        <div className="text-2xl flex space-x-3 items-center justify-center content-center">
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="text-pink-lightest hover:text-pink-dark transition-text-color inline-block"
            href="https://www.facebook.com/leticiaortizescritora/"
            alt="Facebook Leticia Ortiz Escritora"
            title="Facebook Leticia Ortiz Escritora"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="text-pink-lightest hover:text-pink-dark transition-text-color inline-block"
            href="https://www.instagram.com/leticiaortiz_escritora/"
            alt="Instagram Leticia Ortiz Escritora"
            title="Instagram Leticia Ortiz Escritora"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <p>
        Realizado por{' '}
        <a
          href="https://github.com/orgs/thecodingfamilyes/teams"
          target="_blank"
          rel="noreferrer noopener"
          className="text-pink-lightest hover:text-pink-dark "
          alt="Github The Coding Family"
          title="Github The Coding Family"
        >
          The Coding Family
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
