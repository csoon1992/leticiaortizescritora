import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const FormSuccess = (props) => (
    <div className="text-pink-darkest px-4 text-center" role="alert">
        <div className="text-6xl">
            <IoIosCheckmarkCircleOutline/>
        </div>

        <div className="text-2xl">
            <div>
                <p className="font-bold text-pink-darkest">¡Gracias!</p>
                <p className="text-base pt-3 text-pink-darker">Tu mensaje ha sido enviado correctamente.</p>
            </div>
        </div>
    </div>
);

export default FormSuccess;