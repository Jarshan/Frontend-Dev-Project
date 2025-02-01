export default function Hero() {
    return (
      <section className="relative h-[500px] bg-[url('/Images/HeroImage.png')] bg-cover bg-center bg-no-repeat">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"></div>
  
        {/* Text Container */}
        <div className="md:absolute md:bottom-6 md:left-6 md:w-1/2 md:rounded-lg md:shadow-lg w-full bg-gradient-to-r from-secondary to-primary p-6 text-center md:text-left">
          <h2 className="text-white text-3xl font-bold">
            We Crush Your Competitors, Goals, and Sales Records – Without The B.S.
          </h2>
          <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded hover:bg-orange-600 transition">
            Get Free Consultation
          </button>
        </div>
      </section>
    );
  }