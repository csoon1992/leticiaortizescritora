import React from 'react';
import SectionTitle from './SectionTitle';
import FormSuccess from './FormSuccess';

const encode = (data) => {
    return Object
        .keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            submitted: false
        };
    }

    handleSubmit = e => {
        const form = e.target;

        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state
            })
        }).then(() => {
            this.setState({submitted: true});
        }).catch(error => alert(error));

        e.preventDefault();
    }

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        let content = <form
            name="contact-form"
            className="lg:w-1/2 mx-auto"
            data-netlify="true"
            netlify-honeypot="full-name"
            onSubmit={this.handleSubmit}>
            <SectionTitle className="text-center">Contacto</SectionTitle>

            <p className="pb-2">
                Rellena este formulario si quieres hacer alguna pregunta.
            </p>
            <p className="mb-8">
                Si deseas un libro firmado, indícalo en el comentario.
            </p>

            <input type="hidden" name="form-name" value="contact-form"/>
            <input
                type="hidden"
                name="subject"
                value="Formulario de contacto - Leticia Ortiz Escritora"/>

            <label className="invisible hidden">
                Nombre completo
                <input name="full-name"/>
            </label>

            <label className="block font-bold mb-2 text-xs uppercase" htmlFor="name">
                Tu nombre
            </label>

            <input
                className="appearance-none block bg-white border-color-grey-darker border mb-6 p-3 rounded-md text-grey-darker w-full"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                type="text"
                placeholder="Tu nombre..."
                required/>

            <label className="block font-bold mb-2 text-xs uppercase" htmlFor="email">
                Tu email
            </label>

            <input
                className="appearance-none block bg-white border-color-grey-darker border mb-6 p-3 rounded-md text-grey-darker w-full"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                type="email"
                placeholder="ejemplo@ejemplo.com"
                required/>

            <label className="block font-bold mb-2 text-xs uppercase" htmlFor="message">
                Mensaje
            </label>

            <textarea
                className="appearance-none bg-white border-color-grey-darker border mb-6 p-3 rounded-md text-grey-darker w-full"
                placeholder="Tu mensaje..."
                id="message"
                name="message"
                onChange={this.handleChange}
                value={message}
                rows="8"
                required/>

            <button
                type="submit"
                className="bg-pink-darker hover:bg-pink-darkest font-serif text-lg font-normal px-12 py-3 text-md text-white rounded-lg block mx-auto">
                Enviar
            </button>

        </form>;

        if (this.state.submitted) {
            content = <div name="submitted" className="mx-auto">
                <FormSuccess></FormSuccess>
            </div>;
        }

        const {name, email, message} = this.state;

        return content;
    }
}

export default ContactForm;
