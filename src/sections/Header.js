import PropTypes from 'prop-types';
import React from 'react';
import HeaderCaption from '../components/HeaderCaption';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import { useStaticQuery, graphql } from 'gatsby';

const Header = function ({ siteTitle, data }) {
  const homeImage = useStaticQuery(graphql`
    {
      homeImage: file(relativePath: { eq: "header-section-bg.png" }) {
        childImageSharp {
          fluid(maxHeight: 1600, quality: 93) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <header>
      <div className="bg-primary-100 h-screen w-full flex flex-col items-stretch justify-center relative">
        <div className="sm:flex sm:flex-row space-x-3 space-y-3 p-5 sm:items-center sm:justify-between z-10 relative container mx-auto max-w-screen-lg">
          <Logo></Logo>
          <Menu siteTitle={siteTitle} />
        </div>
        <div className="flex-1 flex flex-row content-wrapper text-grey-warm-800 items-stretch justify-start z-0 relative">
          <HeaderCaption data={data} image={homeImage.homeImage} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  data: PropTypes.object.isRequired,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
