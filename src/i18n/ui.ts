export const languages = {
    es: 'ESP',
    en: 'ENG',
};

export type availableLanguages = keyof typeof languages;

export const defaultLang = 'es';

export const ui = {
    es: {
        "page.description": "¡Portafolio de BerryScript! Desarrolladores Full Stack a su servicio.",
        'header.title': 'p o r t a f o l i o',
        'nav.about': 'Sobre nosotros',
        'nav.projects': 'Proyectos',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contacto',
        'section.contact': '¡Contáctanos',
        'article.link-project': '¡Visita la página del proyecto!',
        "form.name": 'Nombre',
        "form.email": 'Email',
        'form.subject': 'Asunto',
        'form.message': 'Mensaje',
        'form.error': '¡Debe rellenar correctamente todos los campos!',
        'form.successful': '¡Su email ha sido enviado! Por sí acaso, compruebe que haya ingresado bien su dirección de correo electrónico para que nos podamos comunicar con usted. ¡Muchas gracias por interesarse en BerryScript!',
        'form.submit': 'Enviar',
        'form.placeholder-name': 'Baya no venenosa',
        'form.placeholder-email': 'bayaparanadavenenosa@gmail.com',
        'form.placeholder-subject': 'Plan para dominar el huerto',
        'form.placeholder-message': 'El huerto está lleno de cerezas, ¡esas dulces y horribles cerezas! Pero no te preocupes, tengo un plan secreto para liberarnos de ellas...'
    },
    en: {
        "page.description": "BerryScript Portfolio! Full Stack Developers at your service.",
        'header.title': 'p o r t f o l i o',
        'nav.about': 'About us',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'section.contact': 'Contact us!',
        "article.link-project": "Visit the project page!",
        "form.name": 'Name',
        "form.email": 'Email',
        'form.subject': 'Subject',
        'form.message': 'Message',
        'form.error': 'You must correctly fill out all fields!',
        'form.successful': 'Your email has been sent! Just in case, please check that you have entered your email address correctly so we can get in touch with you. Thank you very much for your interest in BerryScript!',
        'form.submit': 'Submit',
        'form.placeholder-name': 'Non-poisonous berry',
        'form.placeholder-email': 'nonpoisonousberry@gmail.com',
        'form.placeholder-subject': 'Plan to take over the orchard',
        'form.placeholder-message': "The orchard is full of cherries, those sweet and horrible cherries! But don't worry, I have a secret plan to get rid of them..."
    }
}