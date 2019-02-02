import React from 'react';
import SectionTitle from './SectionTitle';

const ContactForm = () => (
    <form
        name="contact-form"
        method="post"
        className="mr-5 md:w-1/2"
        data-netlify="true"
        netlify-honeypot="full-name"
    >
        <SectionTitle>Contacto</SectionTitle>

        <p className="mb-8">
            Rellena este formulario si quieres hacer alguna pregunta, o un libro
            firmado.
        </p>

        <input type="hidden" name="form-name" value="contact-form" />

        <label className="invisible hidden">
            Nombre completo <input name="full-name" />
        </label>

        <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="name"
        >
            Tu nombre
        </label>

        <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="name"
            type="text"
            placeholder="Tu nombre..."
            required
        />

        <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="email"
        >
            Tu email
        </label>

        <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="email"
            type="email"
            placeholder="ejemplo@ejemplo.com"
            required
        />

        <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="message"
        >
            Mensaje
        </label>

        <textarea
            className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            placeholder="Tu mensaje..."
            rows="8"
            required
        />

        <button className="bg-grey-darkest hover:bg-grey-darker font-serif text-lg font-normal px-6 py-3 text-md text-white">
            Enviar
        </button>
    </form>
);

export default ContactForm;
