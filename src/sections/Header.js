import PropTypes from 'prop-types';
import React from 'react';
import HeaderCaption from '../components/HeaderCaption';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import { useStaticQuery, graphql } from 'gatsby';

const Header = function ({ siteTitle, data }) {
  return (
    <header>
      <div className="bg-primary-100 xl:bg-header bg-contain bg-right-bottom bg-no-repeat h-screen w-full flex flex-col items-stretch justify-center relative">
        <div className="sm:flex sm:flex-row space-x-3 space-y-3 p-5 sm:items-center sm:justify-between z-10 relative container mx-auto max-w-screen-lg">
          <Logo></Logo>
          <Menu siteTitle={siteTitle} />
        </div>
        <div className="flex-1 flex flex-row content-wrapper text-grey-warm-800 items-stretch justify-start z-0 relative container max-w-screen-2xl mx-auto">
          <HeaderCaption data={data} />
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
