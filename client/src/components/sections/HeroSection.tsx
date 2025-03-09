import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white min-h-[90vh] flex items-center">
      {/* Background with pattern overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
          alt="Fitness centre equipment" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC4wMjcgMGwuMDY1LjAwNWEuOTA1LjkwNSAwIDAgMSAuNzI3Ljc5M2wuMDAxLjA3OHY0Ny45OTNsLTEuMTQzLTEuMTQyTDM2LjQzIDMwLjQ4Yy0uNDczLS40Ny0xLjIzMi0uNDctMS43MDYgMHMtLjQ3IDEuMjMzIDAgMS43MDZMNTIuOTcgNTAuNDMgNTQuMDMgNTEuNUg2bC4wNTktLjAwNWEuOTA1LjkwNSAwIDAgMSAuODM3LS44NjlMNy4wNyA1MC41Nkg1My4xNDNMMzYuNDMgMzMuODQzYy0uNDczLS40NzEtLjQ3My0xLjIzMyAwLTEuNzA0cy0uNDczLTEuMjM0IDAtMS43MDVsMTcuNDI0LTE3LjQyNFYxMi4zTDM2LjQzIDI5LjcyNGMtLjQ3My40Ny0xLjIzMi40Ny0xLjcwNiAwcy0uNDctMS4yMzMgMC0xLjcwNmwxNy40MjQtMTcuNDI0VjkuODc5TDM2LjQzIDI3LjMwN2MtLjQ3My40Ny0xLjIzMi40Ny0xLjcwNiAwcy0uNDctMS4yMzMgMC0xLjcwNmwxNy40MjUtMTcuNDI0VjcuNDU2TDM2LjQzIDI0Ljg4Yy0uNDczLjQ3MS0xLjIzMi40NzEtMS43MDYgMHMtLjQ3LTEuMjMzIDAtMS43MDRMNTIuNzU0IDUuNlY1LjAzMUwzNi40MyAyMS4zNTVjLS40Njk0NzIuNDcxLS40Njk0NzIgMS4yMzMgMCAxLjcwNHMxLjIzMy40NzEgMS43MDYgMGwxNy4wMjQtMTcuMDI1Yy4yMTEtLjIxLjQ5NS0uMzI4Ljc5NC0uMzI4em0uMzYzIDU0LjE3NGwuMDA1LS4wNjVhLjkwNS45MDUgMCAwIDAgLS43OTMtLjcyN2wtLjA3OC0uMDAxSDYuMDMxVjYuMDM2YzAtLjUxNy0uMzk5LS45NDUtLjkwNS0uOTg4TDUuMDYzIDUuMDQzYS45MDUuOTA1IDAgMCAwIC0uOTkuOS4xNDhWNTMuNTEgNTQuNmwuMDY0LjAwNWMuNDgzLjA0Ni44NjcuNDQ0Ljg5Ny45MzFsLjAwMS4wNTJjMC0uNTA2LjQwNi0uOTE4Ljg5My0uOTQ0bC4wNDktLjAwMWg0Ny40Mjd6TTUuMDUgMHYuMDE1YzAgLjUxNS40MDYuOTM2LjkwOC45NzhsLjA1NS4wMDFoLjE1OGMuNTA2IDAgLjkxOS40MTMuOTQzLjkxOXYuMDQ3SDYuMDN2LjE1OGMwIC40OTcuMzgzLjkwMy44NzYuOTM3bC4wNjUuMDA2LjA0NC4wMzdjLjAzNC40MzcuMzkyLjc4My44My44MTRsLjA3Mi4wMDJoNDcuMTE0YzAtLjUwOC0uMzgzLS45MjYtLjg4LS45NjdsLS4wNjMtLjAwMmgtLjE1M2EuOTQuOTQgMCAwIDEgLS45MzQtLjg3OGwtLjAwNi0uMDcxVi45NjNIOS4yODJhLjk2Ni45NjYgMCAwIDEgLS44ODUtLjU5OEw4LjM3LjMgOC4zNTMuMjYzQS45NjYuOTY2IDAgMCAxIDcuNS4wMTVINS4wNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6 text-white">
                <span className="inline-block pb-2 border-b-4 border-blue-400">Discover</span> Your 
                <span className="text-blue-300"> Fitness</span> Potential at the BFC!
              </h1>
              <p className="text-xl md:text-2xl mt-6 text-blue-100 font-medium leading-relaxed">
                Become a part of Berwick Fitness Centre and thrive in a supportive community.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a 
                href="#membership" 
                className="group bg-blue-600 hover:bg-blue-500 text-white font-heading font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center shadow-lg text-lg border-2 border-blue-400 relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                  </svg>
                  Explore Memberships
                </span>
              </a>
              <a 
                href="#contact" 
                className="bg-white hover:bg-blue-50 text-blue-700 font-heading font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center shadow-lg text-lg border-2 border-white flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Contact Us
              </a>
            </div>
            
            <div className="mt-10 bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-lg shadow-lg border-2 border-blue-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600 opacity-50"></div>
              <div className="absolute top-0 right-0">
                <svg className="h-24 w-24 text-blue-400 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-blue-700 text-blue-100 text-sm font-semibold rounded-full mb-3">Special Offer</span>
                <p className="font-heading font-bold text-white text-xl leading-snug">
                  Brand New Member? Get your first month for just $5!
                  <span className="block mt-1 text-blue-200 text-base font-medium">Contact us for details!</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column - Empty or future enhancement */}
          <div className="hidden md:block">
            {/* This space can be used for a secondary image, stats, or testimonial in the future */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
