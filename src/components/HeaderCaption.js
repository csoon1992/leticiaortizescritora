import React from 'react';
import PropTypes from 'prop-types';
import CtaGroup from '../components/CtaGroup';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const HeaderCaption = ({
    data: {
        contentfulHeroContent: { title, content },
    },
}) => (
    <div className="caption-wrapper pl-8 md:pl-10 md:px-8 lg:pl-16 lg:pr-0 flex flex-row md:items-start md:pt-10 lg:pt-0 lg:items-center md:mx-auto lg:mx-0">
        <div className="caption max-w-1/2 sm:max-w-sm md:max-w-1/2">
            <h2 className="text-xl sm:text-4xl lg:text-4xl xl:text-6xl font-serif font-normal text-black lg:w-4/5 xl:w-full">
                {title}
            </h2>
            <div className="text-lg font-normal max-w-sm mt-4 leading-normal hidden sm:block xl:w-full">
                {content && renderRichText(content)}
            </div>

            <CtaGroup />
        </div>
    </div>
);

HeaderCaption.propTypes = {
    data: PropTypes.object.isRequired,
};

export default HeaderCaption;
