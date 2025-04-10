const Home = () => {
  return (
    <div className="flex flex-col gap-16">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Build. Grow. Transform.
        </h1>
        <p className="max-w-xl text-lg">
          We craft stunning digital experiences to grow your business and brand online.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get In Touch
        </a>
      </section>

      {/* About Snippet */}
      <section className="px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-600">
          We are a creative team focused on delivering unique solutions for your brand — blending strategy, design & technology.
        </p>
      </section>

      {/* Services Highlight */}
      <section className="px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-gray-600">Modern & responsive websites crafted for your brand.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
            <p className="text-gray-600">Rank higher on search engines & drive organic traffic.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
            <p className="text-gray-600">Craft a brand identity that speaks to your audience.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
