interface HoursItem {
  day: string;
  hours: string;
}

const hoursItems: HoursItem[] = [
  { day: "Monday", hours: "06:30 a.m. – 08:00 p.m." },
  { day: "Tuesday", hours: "06:30 a.m. – 08:00 p.m." },
  { day: "Wednesday", hours: "06:30 a.m. – 08:00 p.m." },
  { day: "Thursday", hours: "06:30 a.m. – 08:00 p.m." },
  { day: "Friday", hours: "06:30 a.m. – 08:00 p.m." },
  { day: "Saturday", hours: "09:00 a.m. – 05:00 p.m." },
  { day: "Sunday", hours: "09:00 a.m. – 05:00 p.m." },
];

const HoursLocationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Hours & Location</h2>
            <p className="mb-8">Located on the upper level of the Kings Mutual Century Centre!</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold mb-4">Hours of Operation</h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {hoursItems.map((item, index) => (
                      <tr key={index} className={`${index !== hoursItems.length - 1 ? 'border-b border-gray-200' : ''} ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                        <td className="py-3 px-4 font-medium">{item.day}</td>
                        <td className="py-3 px-4">{item.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">Our Address</h3>
              <p className="mb-2">Berwick Fitness Centre</p>
              <p className="mb-4">250 Veterans Drive, Berwick, Nova Scotia B0P 1E0, Canada</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:902-538-0039" className="inline-flex items-center text-primary hover:text-opacity-80 transition duration-300">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  902-538-0039
                </a>
                <a href="mailto:fitnesscentre@berwick.ca" className="inline-flex items-center text-primary hover:text-opacity-80 transition duration-300">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  fitnesscentre@berwick.ca
                </a>
              </div>
              <div className="mt-6">
                <p className="text-red-600 font-medium">We are a SCENT FREE facility.</p>
              </div>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.489391842511!2d-64.7396444!3d45.0457903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5857b9f3ed84d7%3A0xb86f8dc590dfcc55!2s250%20Veterans%20Dr%2C%20Berwick%2C%20NS%20B0P%201E0%2C%20Canada!5e0!3m2!1sen!2sus!4v1678985439637!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Berwick Fitness Centre Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursLocationSection;
