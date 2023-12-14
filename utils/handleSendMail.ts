import emailjs from '@emailjs/browser'
import { ContactFormType } from '@/components/ui/ContactForm'
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY

export const handleSendMail = (details: ContactFormType) => {
  if (PUBLIC_KEY && SERVICE_ID && TEMPLATE_ID) {
    emailjs.init(PUBLIC_KEY)
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
        message: details.message,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    console.error('One of the keys is undefined. Cannot initialize emailjs.')
  }
}
