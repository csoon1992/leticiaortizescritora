import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const CasalibroButton = ({ className, href }) => {
  const image = useStaticQuery(graphql`
    query CasalibroImage {
      logoImage: file(relativePath: { eq: "casalibro-logo.png" }) {
        childImageSharp {
          fixed(height: 30, quality: 93, fit: CONTAIN) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
            aspectRatio
          }
        }
      }
    }
  `);

  return (
    <div
      className={`transition duration-300 text-left bg-casalibro text-white font-sans  hover:bg-casalibro-darker rounded-lg relative ${
        className || ''
      }`}
    >
      <div className="flex flex-col space-y-2 px-3 py-1" aria-hidden="true">
        <div aria-hidden="true" className="text-xs md:text-sm">
          Disponible en
        </div>
        <div aria-hidden="true">
          <Img
            className="h-full"
            alt="La casa del libro"
            {...image.logoImage.childImageSharp}
          />
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="absolute top-0 bottom-0 w-full z-10 m-0 left-0"
      >
        <span className="sr-only">Disponible en La Casa del Libro</span>
      </a>
    </div>
  );
};

CasalibroButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default CasalibroButton;
