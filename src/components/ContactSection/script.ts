import emailjs from '@emailjs/browser';
import type { NameErrors, EmailErrors, SubjectErrors, MessageErrors } from '@custom-types/form-errors.types';
import translations from '@translations/translations';
import type { availableLanguages } from '@i18n/ui';

const form = document.querySelector(".form-message");
const error = document.querySelector(".error-form");
const successful = document.querySelector(".successful-form")
const serviceID = "service_8crll4m";
const templateID = "template_8m5o2eg";
const formState = {
    name: '',
    email: '',
    subject: '',
    message: ''
}
const lang = document.querySelector(".form-message").getAttribute("data-lang") as availableLanguages;
const errorResources = translations.resources[lang]["FORM-ERRORS"];

emailjs.init({
    publicKey: 'Pc-etQwavprBFafvF'
})

const setErrorText = (errorMessage: string, errorField: HTMLElement) => {
    errorField.innerText = errorMessage;
    errorField.classList.remove("hidden")
}

const regex = {
    nameRegex: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
    subjectRegex: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
    emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    messageRegex: /^[a-zA-Z0-9\s$.,áéíóúÁÉÍÓÚ¿?¡!()]+$/
}

const controlledForm = (field) => {
    document.getElementById("form-" + field).addEventListener('input', (e: any) => {
        const value = e.target.value
        formState[field] = value;
        const errorField = document.getElementById("error-" + field);
        switch (field) {
            case 'name':
                if (!value) setErrorText(errorResources["NAME"]["EMPTY"], errorField)
                else if (!regex.nameRegex.test(value)) setErrorText(errorResources["NAME"]["SPECIAL-CHARS"], errorField)
                else if (value.length > 30) setErrorText(errorResources["NAME"]["TOO-LONG"], errorField)
                else errorField.classList.add("hidden")
                break;
            case 'subject':
                if (!value) setErrorText(errorResources["SUBJECT"]["EMPTY"], errorField)
                else if (!regex.subjectRegex.test(value)) setErrorText(errorResources["SUBJECT"]["SPECIAL-CHARS"], errorField)
                else if (value.length > 50) setErrorText(errorResources["SUBJECT"]["TOO-LONG"], errorField)
                else errorField.classList.add("hidden")
                break;
            case 'email':
                if (!value) setErrorText(errorResources["EMAIL"]["EMPTY"], errorField)
                else if (!regex.emailRegex.test(value)) setErrorText(errorResources["EMAIL"]["EMAIL-FORMAT"], errorField)
                else errorField.classList.add("hidden")
                break;
            case 'message':
                if (!value) setErrorText(errorResources["MESSAGE"]["EMPTY"], errorField);
                else if (!regex.messageRegex.test(value)) setErrorText(errorResources["MESSAGE"]["SPECIAL-CHARS"], errorField)
                else errorField.classList.add("hidden")
                break;
        }
    })
}

for (let key in formState) controlledForm(key)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!error.classList.contains("hidden")) error.classList.add("hidden")
    if (!successful.classList.contains("hidden")) successful.classList.add("hidden")
    const nameInput = document.getElementById("form-name") as HTMLInputElement;
    const subjectInput = document.getElementById("form-subject") as HTMLInputElement;
    const emailInput = document.getElementById("form-email") as HTMLInputElement;
    const messageInput = document.getElementById("form-message") as HTMLTextAreaElement;
    const values = {
        name: nameInput.value,
        subject: subjectInput.value,
        email: emailInput.value,
        message: messageInput.value,
    };
    for (let key in values) {
        const errorField = document.getElementById("error-" + key);
        if (!values[key] || !errorField.classList.contains("hidden")) {
            error.classList.remove("hidden")
            window.scrollBy({
                top: 1000,
                behavior: 'smooth'
            })
            error.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-10px)' },
                { transform: 'translateX(10px)' },
                { transform: 'translateX(-10px)' },
                { transform: 'translateX(10px)' },
                { transform: 'translateX(0)' }
            ], {
                duration: 500, // Duración de la animación en milisegundos
                iterations: 1, // Número de veces que se repite la animación
            });
            return
        }
    }
    successful.classList.remove("hidden")
    window.scrollBy({
        top: 1000,
        behavior: 'smooth'
    })
    emailjs.send(serviceID, templateID, values)
})