import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import FormSuccess from './FormSuccess';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const onChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    const form = e.target;

    e.preventDefault();

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'form-name': form.getAttribute('name'),
          ...formData,
        }),
      });

      setSubmitted(true);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  if (submitted) {
    return (
      <div className="container mx-auto max-w-screen-lg text-center space-y-3">
        <SectionTitle>Contacto</SectionTitle>

        <div className="text-left max-w-screen-md mx-auto py-5">
          <FormSuccess />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-screen-lg text-center space-y-3">
      <SectionTitle>Contacto</SectionTitle>

      <div className="text-grey-warm-700 text-lg font-serif">
        <p>Rellena este formulario si quieres hacer alguna pregunta.</p>
        <p>Si deseas un libro firmado, indícalo en el comentario.</p>
      </div>

      <form
        name="contact-form"
        data-netlify="true"
        className="space-y-5 max-w-screen-sm mx-auto text-left py-3"
        netlify-honeypot="full-name"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <input
          type="hidden"
          name="subject"
          value="Formulario de contacto - Leticia Ortiz Escritora"
        />

        <label className="invisible hidden" aria-hidden="true">
          Nombre completo
          <input name="full-name" />
        </label>

        <div className="flex flex-row items-center justify-center space-x-3">
          <div className="flex-1">
            <label className="block font-bold mb-2 uppercase" htmlFor="name">
              Tu nombre
            </label>

            <input
              className="transition duration-300 w-full rounded border-grey-warm-300 focus:border-grey-warm-400 focus:ring-primary-500"
              id="name"
              onChange={(event) => onChange('name', event.target.value)}
              name="name"
              type="text"
              placeholder="Tu nombre..."
              required
            />
          </div>

          <div className="flex-1">
            <label htmlFor="email" className="block font-bold mb-2 uppercase">
              Tu Email
            </label>
            <input
              className="transition duration-300 w-full rounded border-grey-warm-300 focus:border-grey-warm-400 focus:ring-primary-500"
              id="email"
              name="email"
              type="email"
              onChange={(event) => onChange('email', event.target.value)}
              placeholder="ejemplo@ejemplo.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-bold mb-2 uppercase" htmlFor="message">
            Mensaje
          </label>

          <textarea
            className="transition duration-300 w-full rounded border-grey-warm-300 focus:border-grey-warm-400 focus:ring-primary-500"
            placeholder="Tu mensaje..."
            id="message"
            name="message"
            onChange={(event) => onChange('message', event.target.value)}
            rows="8"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-pink-darker hover:bg-pink-darkest active:ring-primary-500 font-serif text-lg font-normal px-12 py-3 text-md text-white rounded-lg block mx-auto"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
