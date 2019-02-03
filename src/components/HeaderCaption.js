import React from 'react';
import CtaGroup from '../components/CtaGroup';

const HeaderCaption = () => (
    <div className="caption-wrapper pl-8 md:pl-10 md:px-8 lg:pl-16 lg:pr-0 flex flex-row md:items-start md:pt-10 lg:pt-0 lg:items-center md:mx-auto lg:mx-0">
        <div className="caption max-w-1/2 sm:max-w-sm">
            <h2 className="text-xl sm:text-4xl lg:text-4xl xl:text-6xl font-serif font-normal text-black lg:w-4/5">
                ¡Primer libro, ya a la venta!
            </h2>
            <div className="text-lg font-normal max-w-sm mt-4 leading-normal hidden sm:block lg:w-3/5">
                <p>
                    Kika hará que te enamores de su humor y te sacará sonrisas
                    en cada capítulo.
                </p>
                <p>
                    Si necesitas reír y te gustan las relaciones humanas, no lo
                    dudes, esta es tu novela.
                </p>
            </div>

            <CtaGroup />
        </div>
    </div>
);

export default HeaderCaption;
