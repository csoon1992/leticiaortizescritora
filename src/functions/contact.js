const sendMail = require('sendmail')();
import { validateEmail, validateLength } from '../utils/validations';

export function handler(event, context, callback) {
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'piticonejo@gmail.com';

    if (!CONTACT_EMAIL) {
        return callback(null, {
            statusCode: 500,
            body: 'CONTACT_EMAIL must be defined',
        });
    }

    const body = JSON.parse(event.body);

    try {
        validateLength('body.name', body.name, 3, 150);
    } catch (e) {
        return callback(null, {
            statusCode: 403,
            body: e.message,
        });
    }

    try {
        validateEmail('body.email', body.email);
    } catch (e) {
        return callback(null, {
            statusCode: 403,
            body: e.message,
        });
    }

    try {
        validateLength('body.message', body.message, 1, 10000);
    } catch (e) {
        return callback(null, {
            statusCode: 403,
            body: e.message,
        });
    }

    const descriptor = {
        from: `"${body.email}" <no-reply@leticiaortizescritora.com>`,
        to: CONTACT_EMAIL,
        subject: `${
            body.name
        } te ha enviado un mensaje desde leticiaortizescritora.com`,
        text: body.message,
    };

    sendMail(descriptor, e => {
        if (e) {
            callback(null, {
                statusCode: 500,
                body: e.message,
            });
        } else {
            callback(null, {
                statusCode: 200,
                body: '',
            });
        }
    });
}
