const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20 gap-8">

      <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
        Contact Us
      </h1>

      <p className="max-w-2xl text-gray-600 text-lg">
        Let’s build something great together. Reach out anytime.
      </p>

      <div className="flex flex-col gap-4 text-gray-700 text-lg">
        <p>Email: <a href="mailto:hello@yourdomain.com" className="text-purple-600 hover:underline">hello@yourdomain.com</a></p>
        <p>Phone: <a href="tel:+919999999999" className="text-purple-600 hover:underline">+91 99999 99999</a></p>
        <p>Location: New Delhi, India</p>
      </div>

    </div>
  )
}

export default Contact
