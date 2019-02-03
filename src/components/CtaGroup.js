import React, { Fragment } from 'react';

import AmazonButton from './AmazonButton';
import EciButton from './EciButton';
import LetrameButton from './LetrameButton';

const CtaGroup = ({ className, href }) => (
    <div className="cta mt-6 flex items-strech flex-wrap sm:flex-no-wrap">
        <AmazonButton
            className="mr-3 mb-3 sm:mb-0"
            href="https://www.amazon.es/dp/8417779310/ref=cm_sw_em_r_mt_dp_U_iRBvCb3BTG6MR"
        />

        <EciButton
            href="https://www.elcorteingles.es/ebooks/tagus-9788417818395-kika-nada-pasa-hasta-que-pasa-ebook/"
            className="mr-3 mb-3 sm:mb-0"
        />

        <LetrameButton 
            href="https://www.letrame.com/producto/kika-nada-pasa-hasta-que-pasa/"
        />
    </div>
);

export default CtaGroup;