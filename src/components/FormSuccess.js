import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const FormSuccess = (props) => (
  <div
    className="text-green-dark text-left flex flex-row space-x-3 items-center justify-center"
    role="alert"
  >
    <div className="text-6xl">
      <IoIosCheckmarkCircleOutline />
    </div>

    <div className="text-2xl">
      <div>
        <p className="font-boldtext-green-darker">¡Gracias!</p>
        <p className="text-base pt-3 text-green-dark">
          Tu mensaje ha sido enviado correctamente.
        </p>
      </div>
    </div>
  </div>
);

export default FormSuccess;
