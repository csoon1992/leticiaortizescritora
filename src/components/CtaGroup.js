import React from 'react';
import PropTypes from 'prop-types';
import AmazonButton from './AmazonButton';
import EciButton from './EciButton';
import CasalibroButton from './CasalibroButton';

function CtaGroup({ className, links }) {
  const buttonComponents = {
    amazon: AmazonButton,
    corteingles: EciButton,
    casalibro: CasalibroButton,
  };

  const linksContent = links.map(({ vendor, link }, index) => {
    const ButtonComponent = buttonComponents[vendor];

    return <ButtonComponent href={link} key={index}></ButtonComponent>;
  });

  return (
    <div
      className={`cta mt-6 flex items-center flex-wrap sm:flex-no-wrap space-x-3  ${className}`}
    >
      {linksContent}
    </div>
  );
}

CtaGroup.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default CtaGroup;
