import React from 'react';
import CtaGroup from '../components/CtaGroup';

const HeaderCaption = () => (
    <div className="caption-wrapper pl-10 md:pl-16 flex flex-row items-center">
        <div className="caption max-w-md">
            <h2 className="text-6xl font-serif font-normal text-black">
                ¡Primer libro, ya a la venta!
            </h2>
            <div className="text-lg font-normal max-w-sm mt-4 leading-normal">
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
