import { Card, CardContent } from "@/components/ui/card";

interface Trainer {
  name: string;
  title: string;
  quote: string;
  description: string;
  image: string;
  phone?: string;
  email?: string;
}

const trainers: Trainer[] = [
  {
    name: "Alisha Griffiths",
    title: "PT/Group Fitness Class Instructor",
    quote: "Embarking on a health journey, seeking growth, or simply in need of motivation? I'm here to support you!",
    description: "Precision Nutrition, Personal training, biomechanics, overall fitness and health.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    phone: "902-300-8209",
    email: "griffiths.alisha@gmail.com"
  },
  {
    name: "Alison Ross",
    title: "PT/Group Fitness Instructor",
    quote: "Move. Lift. Repeat.",
    description: "Explore various fitness aspects with Alison such as Mobility, kettlebell training, Precision Nutrition, and Strongman training.",
    image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    phone: "902-824-4455",
    email: "kettlebellkrushers@gmail.com"
  },
  {
    name: "Helen MacDonald",
    title: "Group Fitness Instructor",
    quote: "Show up for your life and watch the MAGIC happen!",
    description: "Personal Trainer, Fitness Instructor, Nutrition, Run and Life Coach with over 20 years working in the Health and Wellness industry.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-blue-400 mb-4">Meet Our Personal Trainers & Instructors</h2>
          <p className="text-lg max-w-3xl mx-auto dark:text-gray-300">Work with one of our expert trainers or take a group class! Our instructors are highly trained professionals who are passionate about helping others reach their fitness goals.</p>
          <p className="text-secondary dark:text-blue-300 font-medium mt-4">*Personal training sessions are an extra fee. Contact a trainer directly to chat or arrange a session.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary dark:text-blue-400">{trainer.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{trainer.title}</p>
                <p className="italic mb-3 dark:text-gray-300">"{trainer.quote}"</p>
                <p className="mb-4 dark:text-gray-300">{trainer.description}</p>
                
                {trainer.phone && (
                  <div className="flex items-center mb-1">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <a href={`tel:${trainer.phone}`} className="hover:text-primary dark:text-gray-300 dark:hover:text-blue-400 transition duration-300">{trainer.phone}</a>
                  </div>
                )}
                
                {trainer.email && (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <a href={`mailto:${trainer.email}`} className="hover:text-primary dark:text-gray-300 dark:hover:text-blue-400 transition duration-300 break-all">{trainer.email}</a>
                  </div>
                )}
                
                {!trainer.phone && !trainer.email && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-center">
                    <a href="#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium py-2 px-4 rounded transition duration-300">
                      <span>Inquire About Classes</span>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
