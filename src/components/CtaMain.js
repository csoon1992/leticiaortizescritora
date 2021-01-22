import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function CtaMain() {
  return (
    <div className="my-2 py-3">
      <AnchorLink
        href="#section-books"
        title="Más detalles"
        className="transition duration-200 text-center bg-pink-darker hover:bg-pink-darkest font-sans text-lg font-normal px-12 py-3 text-md text-white rounded-lg block md:inline-block mx-auto"
      >
        Saber más
      </AnchorLink>
    </div>
  );
}

export default CtaMain;
