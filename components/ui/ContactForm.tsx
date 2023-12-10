export const ContactForm = () => {
  return (
    <div className="max-w-xl mx-auto p-4 rounded-xl shadow-xl space-y-6 m-6">
      <div>
        <div className="text-2xl font-bold text-center">Contact Me</div>
        <div className="text-gray-500 text-center">
          Send me a message and I'll get back to you
        </div>
      </div>
      <div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="first-name">First name</label>
            <input
              id="first-name"
              className="input w-full border-blue-200"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name">Last name</label>
            <input
              id="last-name"
              className="input w-full border-blue-200"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name">Email</label>
            <input
              id="email"
              required
              type="email"
              className="input w-full border-blue-200"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name">Message</label>
            <textarea
              id="message"
              className="textarea w-full border-blue-200"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="btn btn-primary" type="submit">
          Send Message
        </button>
      </div>
    </div>
  )
}
