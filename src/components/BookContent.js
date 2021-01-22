import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import Img from 'gatsby-image';
import CtaGroup from './CtaGroup';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

function BookContent({ book: { title, description, cover, links } }) {
  return (
    <div className="flex flex-row content-center items-stretch max-w-screen-lg mx-auto space-x-2">
      <div className="flex-1">
        <SectionTitle className="uppercase">{title}</SectionTitle>

        <div className="font-serif text-base leading-normal pl-0 py-0 prose">
          {description && renderRichText(description)}
        </div>

        <CtaGroup links={links} />
      </div>

      <div className="hidden lg:flex flex-row items-center content-center w-1/3 p-8">
        <Img
          className="w-full"
          alt={cover.title}
          key={cover.image.fluid.src}
          fluid={cover.image.fluid}
        />
      </div>
    </div>
  );
}

BookContent.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookContent;
