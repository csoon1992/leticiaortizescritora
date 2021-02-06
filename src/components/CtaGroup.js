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

    return (
      <div className="block mb-3" key={index}>
        <ButtonComponent href={link}></ButtonComponent>
      </div>
    );
  });

  return (
    <div
      className={`cta mt-6 md:flex items-center flex-wrap sm:flex-no-wrap md:space-x-3 ${className}`}
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
