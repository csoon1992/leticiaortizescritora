import React from 'react';
import PropTypes from 'prop-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Img from 'gatsby-image';
import CtaMain from './CtaMain';

function HeaderCaption({
  image,
  data: {
    contentfulHeroContent: { title, content },
  },
}) {
  return (
    <div className="flex-1 caption-wrapper  px-5 flex flex-col lg:flex-row items-end justify-items-stretch space-x-3">
      <div className="self-center caption max-w-screen-sm">
        <h2 className="text-4xl xl:text-6xl font-serif font-normal text-black lg:w-4/5 xl:w-full">
          {title}
        </h2>
        <div className="text-lg font-normal  mt-4 leading-normal xl:w-full prose">
          {content && renderRichText(content)}
        </div>
        <CtaMain></CtaMain>
      </div>
      <div className="self-stretch flex-1 relative" aria-hidden="true">
        <div className="absolute top-0 bottom-0 w-full flex flex-row items-end justify-end">
          <Img
            style={{ height: '100%', width: '100%' }}
            imgStyle={{ objectFit: 'contain' }}
            fluid={image.childImageSharp.fluid}
            loading="eager"
          ></Img>
        </div>
      </div>
    </div>
  );
}

HeaderCaption.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.object,
};

export default HeaderCaption;
