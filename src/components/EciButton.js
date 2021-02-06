import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const EciButton = ({ className, href }) => {
  const image = useStaticQuery(graphql`
    query EciImage {
      logoImage: file(relativePath: { eq: "eci-logo.png" }) {
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
      className={`inline-block transition duration-300 text-left bg-eci text-white font-sans  hover:bg-eci-darker rounded-lg relative ${
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
            alt="El Corte Inglés"
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
        <span className="sr-only">Disponible en El Corte Inglés</span>
      </a>
    </div>
  );
};

EciButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default EciButton;
