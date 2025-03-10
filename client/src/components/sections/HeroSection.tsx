import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
          alt="Fitness centre equipment" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl backdrop-blur-sm bg-black/20 p-6 rounded-lg shadow-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4 text-white drop-shadow-md">
            Discover Your Fitness Potential at the BFC!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-md font-medium">
            Become a part of Berwick Fitness Centre and thrive in a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#membership" 
              className="blue-gradient text-white font-heading font-bold py-4 px-10 rounded-lg transition duration-300 text-center shadow-lg text-lg border-2 border-white"
            >
              Explore Memberships
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-blue-800 font-heading font-bold py-4 px-10 rounded-lg transition duration-300 text-center shadow-lg text-lg"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-8 blue-gradient p-6 rounded-lg inline-block shadow-lg border-2 border-white">
            <p className="font-heading font-bold text-white text-lg">Brand New Member? Get your first month for $5! Contact us for details!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
