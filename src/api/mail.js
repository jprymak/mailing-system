
import emailjs from "emailjs-com";

const {REACT_APP_EMAILJS_API_KEY, REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_USER_ID, REACT_APP_EMAILJS_TEMPLATE_ID} = process.env;

const serviceID = REACT_APP_EMAILJS_SERVICE_ID;
const templateID = REACT_APP_EMAILJS_TEMPLATE_ID;
const userID = REACT_APP_EMAILJS_USER_ID;

export function sendEmail(templateParams){
    return emailjs.send(serviceID, templateID, templateParams, userID)
}

