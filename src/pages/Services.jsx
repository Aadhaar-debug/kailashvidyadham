const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20 gap-10">

      <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
        Our Services
      </h1>

      <p className="max-w-2xl text-gray-600 text-lg">
        Everything you need to build, scale & elevate your online presence.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-10">

        <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Web Design</h3>
          <p className="text-gray-600">
            Clean, responsive and modern websites for brands that want to stand out.
          </p>
        </div>

        <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">SEO Strategy</h3>
          <p className="text-gray-600">
            Boost visibility and drive organic growth with proven SEO techniques.
          </p>
        </div>

        <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
          <p className="text-gray-600">
            Consistent visual branding that connects with your target audience.
          </p>
        </div>

      </section>

    </div>
  )
}

export default Services
