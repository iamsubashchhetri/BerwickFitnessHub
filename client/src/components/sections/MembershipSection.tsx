import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface MembershipOption {
  title: string;
  price: string;
  period: string;
  popular?: boolean;
  savingsNote?: string;
  features: string[];
  ctaText: string;
}

const membershipOptions: MembershipOption[] = [
  {
    title: "Monthly",
    price: "$49",
    period: "/month",
    features: [
      "Full access to gym facilities",
      "All group fitness classes included",
      "No long-term commitment"
    ],
    ctaText: "Get Started"
  },
  {
    title: "Annual",
    price: "$399",
    period: "/year",
    popular: true,
    savingsNote: "Save over $180!",
    features: [
      "Full access to gym facilities",
      "All group fitness classes included",
      "1 free personal training session",
      "Significant savings vs monthly"
    ],
    ctaText: "Best Value!"
  },
  {
    title: "Day Pass",
    price: "$15",
    period: "/day",
    features: [
      "Full access to gym facilities",
      "Group fitness class: $11.50/class",
      "Perfect for visitors"
    ],
    ctaText: "Get Started"
  }
];

const MembershipSection = () => {
  return (
    <section id="membership" className="py-16 md:py-24 bg-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Membership Options</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">Choose from a variety of membership options at Berwick Fitness Centre that fit your lifestyle and budget. Whether you're a casual visitor or a dedicated fitness enthusiast, we have a membership option that's just right for you!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {membershipOptions.map((option, index) => (
            <Card 
              key={index}
              className={`bg-gray-100 rounded-lg overflow-hidden shadow-md card-shadow transition-transform duration-300 hover:-translate-y-1 ${option.popular ? 'transform scale-105 relative z-10' : ''}`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs py-1 px-3 font-bold">
                  POPULAR
                </div>
              )}
              <CardHeader className="blue-gradient text-white p-6 text-center">
                <h3 className="text-2xl font-heading font-bold">{option.title}</h3>
                <div className="text-3xl font-bold mt-2">
                  {option.price}<span className="text-sm font-normal">{option.period}</span>
                </div>
                {option.savingsNote && (
                  <p className="text-sm mt-1 opacity-90">{option.savingsNote}</p>
                )}
              </CardHeader>
              <CardContent className="p-6 text-gray-700">
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`block text-center ${option.popular ? 'bg-blue-600' : 'btn-primary'} text-white font-heading font-medium py-2 px-6 rounded-lg mt-6 transition duration-300`}
                >
                  {option.ctaText}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-200 p-6 rounded-lg inline-block max-w-2xl mx-auto">
            <p className="mb-4 text-gray-800 font-medium">Ready to become a member? Download our membership form below.</p>
            <a 
              href="/forms/membership-form.pdf" 
              download
              className="inline-flex items-center blue-gradient text-white font-heading font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download Membership Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
