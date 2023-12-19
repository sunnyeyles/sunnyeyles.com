import { useState } from 'react'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { handleSendMail } from '@/utils/handleSendMail'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { SuccessPopup } from './SuccessPopup'
import { ErrorPopup } from './ErrorPopup'
const contactSchema = z.object({
  firstName: z.string().min(2, { message: 'Name is Required' }).toLowerCase(),
  lastName: z.string().min(2, { message: 'Last name is Required' }),
  email: z.string().email().min(2, { message: 'Email is Required' }),
  message: z.string().min(2, { message: 'Message is Required' }).toLowerCase(),
})

export type ContactFormType = z.infer<typeof contactSchema>

export const ContactForm = () => {
  const [successState, setSuccessState] = useState(false)
  const [errorState, setErrorState] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  })

  const onSubmit: SubmitHandler<ContactFormType> = async (formData) => {
    try {
      console.log(formData)
      handleSendMail(formData)
      setSuccessState(true)
      reset()
      setTimeout(() => setSuccessState(false), 4000)

      // show success pop up when email is sent
    } catch (error) {
      setErrorState(true)
      reset()
      setTimeout(() => setErrorState(false), 4000)
      // show error pop up if it fails
      console.error('Error:', error)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4 rounded-xl shadow-xl space-y-6 m-6">
      <div>
        <div className="text-2xl font-bold text-center ">Contact Me</div>
        <div className="text-gray-500 text-center">
          Send me a message, and I'll get back to you
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="first-name">First name</label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="first-name"
                  className="input w-full border-blue-200"
                  required
                />
              )}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name">Last name</label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="last-name"
                  className="input w-full border-blue-200"
                  required
                />
              )}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="email"
                  type="email"
                  className="input w-full border-blue-200"
                  required
                />
              )}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="message"
                  className="textarea w-full border-blue-200"
                  required
                />
              )}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </div>
      </form>
      {successState ? <SuccessPopup /> : null}
      {errorState ? <ErrorPopup /> : null}
    </div>
  )
}
