export default function Hero() {
    return (
      <section className="relative bg-gray-100 p-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-green-600 text-3xl font-bold">
            We Crush Your Competitors, Goals, and Sales Records - Without The B.S.
          </h2>
          <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
            Get Free Consultation
          </button>
        </div>
        <img src="Hero image.png" alt="Laptop" className="md:w-1/2 mt-6 md:mt-0" />
      </section>
    );
  }
  