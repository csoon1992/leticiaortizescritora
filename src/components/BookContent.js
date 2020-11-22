import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import Img from 'gatsby-image';
import CtaGroup from './CtaGroup';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

function BookContent({ book: { title, description, cover } }) {
    return (
        <div className="flex flex-row content-center items-stretch container mx-auto">
            <div className="lg:max-w-md">
                <SectionTitle className="uppercase">{title}</SectionTitle>

                <div className="font-serif text-base leading-normal pl-0 py-0 markdown">
                    {description && renderRichText(description)}
                </div>

                <CtaGroup />
            </div>

            <div className="hidden lg:flex flex-row items-center content-center p-8 flex-1">
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
