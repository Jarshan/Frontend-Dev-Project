export default function Hero() {
    return (
      <>
        <section className="relative h-[500px] md:h-svh bg-[url('/Images/HeroImage.png')] bg-cover bg-center bg-no-repeat">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"></div>
  
          {/* Text Container for medium and large screens */}
          <div className="hidden md:block md:absolute md:bottom-6 md:left-6 md:w-1/2 lg:w-1/3 md:rounded-lg md:shadow-lg bg-gradient-to-r from-secondary to-primary p-6 text-center md:text-left ml-10">
            <h2 className="text-white text-3xl font-bold">
              We Crush Your Competitors, Goals, And Sales Records – Without The B.S.
            </h2>
            <button className="bg-yuzu text-white px-4 py-2 mt-4 rounded hover:bg-yuzu transition">
              Get Free Consultation
            </button>
          </div>
        </section>
  
        {/* Text Container for small screens */}
        <div className="md:hidden w-full bg-gradient-to-r from-secondary to-primary p-6 text-center">
          <h2 className="text-white text-3xl font-bold">
            We Crush Your Competitors, Goals, And Sales Records – Without The B.S.
          </h2>
          <button className="bg-yuzu text-white px-4 py-2 mt-4 rounded hover:bg-yuzu transition">
            Get Free Consultation
          </button>
        </div>
      </>
    );
  }