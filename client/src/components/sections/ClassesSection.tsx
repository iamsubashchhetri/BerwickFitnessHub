import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ClassItem {
  title: string;
  description: string;
  schedule: string;
  location: string;
  note: string;
}

const classItems: ClassItem[] = [
  {
    title: "HIIT Training",
    description: "High-intensity interval training designed to build strength and improve cardiovascular fitness.",
    schedule: "Monday & Wednesday, 6:00 PM",
    location: "Studio Room",
    note: "All fitness levels welcome"
  },
  {
    title: "Yoga Flow",
    description: "A flowing sequence of yoga poses that connect with breath, improving flexibility and reducing stress.",
    schedule: "Tuesday & Thursday, 5:30 PM",
    location: "Studio Room",
    note: "Bring your own mat"
  },
  {
    title: "Spin Class",
    description: "High-energy indoor cycling workout that combines rhythm and motivation to burn calories.",
    schedule: "Friday, 7:00 AM & 6:00 PM",
    location: "Spin Room",
    note: "Water bottle recommended"
  },
  {
    title: "Strength & Conditioning",
    description: "Build muscle and improve overall fitness with this full-body workout using various equipment.",
    schedule: "Monday & Thursday, 7:00 PM",
    location: "Main Gym Floor",
    note: "Intermediate level recommended"
  },
  {
    title: "Pilates",
    description: "Focus on core strength, posture, and balanced muscle development with controlled movements.",
    schedule: "Wednesday, 6:00 PM",
    location: "Studio Room",
    note: "All levels welcome"
  },
  {
    title: "Kettlebell Workout",
    description: "Dynamic workout using kettlebells to improve strength, power and mobility with functional movements.",
    schedule: "Tuesday, 7:00 PM",
    location: "Main Gym Floor",
    note: "Taught by Alison Ross"
  }
];

const ClassesSection = () => {
  return (
    <section id="classes" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Group Fitness Classes</h2>
          <p className="text-lg max-w-3xl mx-auto">Group fitness classes are included in your BFC membership! Non-members enjoy for just $11.50/class.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classItems.map((item, index) => (
            <Card key={index} className="bg-white shadow-md overflow-hidden">
              <CardHeader className="bg-primary text-white p-4">
                <h3 className="text-xl font-heading font-bold">{item.title}</h3>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">{item.description}</p>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  <span>{item.schedule}</span>
                </div>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  <span>{item.note}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-secondary hover:bg-opacity-90 text-white font-heading font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get Class Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
