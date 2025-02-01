export default function Services() {
    return (
      <section className="p-6">
        {/* First Section - Image Left */}
        <div className="flex flex-col md:flex-row items-center md:mx-40 mb-10">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start md:w-1/2 w-full">
            <img
              src="/Images/Pic1.png"
              alt="Service Image"
              className="w-full md:w-auto max-w-sm md:max-w-full"
            />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 w-full text-center md:text-left mt-4 md:mt-0 md:pl-6">
            <h3 className="text-blue-600 font-bold text-xl">
              Web & Mobile App Development
            </h3>
            <p className="text-gray-700 mt-2">
              Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded">
              Learn More
            </button>
          </div>
        </div>
  
        {/* Second Section - Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center md:mx-40">
          {/* Image Section */}
          <div className="flex justify-center md:justify-end md:w-1/2 w-full">
            <img
              src="/Images/Pic2.png"
              alt="Another Service Image"
              className="w-full md:w-auto max-w-sm md:max-w-full"
            />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 w-full text-center md:text-left mt-4 md:mt-0 md:pr-6">
            <h3 className="text-blue-600 font-bold text-xl">
            Digital Strategy Consulting
            </h3>
            <p className="text-gray-700 mt-2">
           
                 Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  }
  