import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Cardiologist, AIIMS Delhi",
      content: "AyuSmat has transformed how I treat patients. Having instant access to complete medical history helps me make better diagnoses, especially during emergencies.",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "Ravi Kumar",
      role: "Patient from Rural Rajasthan",
      content: "My family got our health IDs through a mobile camp. Now when we visit the city hospital, they know our complete health history. It's like magic!",
      rating: 5,
      image: "👨‍🌾"
    },
    {
      name: "Anjali Patel",
      role: "Insurance Manager, Star Health",
      content: "Claim processing time has reduced from 15 days to just 2 days. The verified health data through AyuSmat has significantly reduced fraud cases.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Dr. Rajesh Gupta",
      role: "Chief Medical Officer, Rural Health Mission",
      content: "AyuSmat helps us identify which health schemes our rural population needs most. The real-time data is invaluable for policy making.",
      rating: 5,
      image: "👨‍⚕️"
    }
  ];

  const stats = [
    { number: "89%", label: "Reduction in repeated medical tests" },
    { number: "75%", label: "Faster insurance claim processing" },
    { number: "2.5M+", label: "Rural users enrolled in health schemes" },
    { number: "95%", label: "Patient satisfaction rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from patients, doctors, insurers, and government officials about how AyuSmat is changing healthcare
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-6">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Measurable Impact Across Healthcare
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Story Highlight */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Rural Success Story</h3>
              <p className="text-green-100 mb-4">
                "When my daughter had a severe allergic reaction during our visit to Mumbai, 
                the emergency doctor immediately accessed her allergy history through her UHID. 
                This saved precious time and potentially her life."
              </p>
              <div className="flex items-center space-x-3">
                <div className="text-3xl">👩‍👧</div>
                <div>
                  <p className="font-semibold">Sunita Devi</p>
                  <p className="text-green-200 text-sm">Mother from Village Bhagalpur, Bihar</p>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-4">How AyuSmat Helped:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Instant access to allergy information</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>No language barriers with local language support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Insurance claim processed in 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Connected to rural health scheme for follow-up care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;