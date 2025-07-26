import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Unique Health ID (UHID) and how is it different from Aadhaar?",
      answer: "A UHID is your personal health identifier that stays with you for life. Unlike Aadhaar which is for identity, UHID is specifically for health records. It connects all your medical history, prescriptions, tests, and treatments across different hospitals and doctors."
    },
    {
      question: "Is my health data safe and private on AyuSmat?",
      answer: "Yes, absolutely. AyuSmat uses blockchain technology and follows strict HIPAA and GDPR compliance standards. Your health data is encrypted and can only be accessed with your consent. You control who can see your medical information."
    },
    {
      question: "How does AyuSmat help rural communities access healthcare?",
      answer: "AyuSmat provides mobile registration drives, SMS alerts for health schemes, multi-language support, and offline features. Rural users get personalized notifications about government health schemes they're eligible for based on their location and UHID."
    },
    {
      question: "Can I buy health insurance through AyuSmat?",
      answer: "Yes, you can compare and purchase health insurance policies directly through AyuSmat. The platform also helps with digital claim submission and tracking, making the entire insurance process much faster and easier."
    },
    {
      question: "What happens if I don't have a smartphone?",
      answer: "AyuSmat works on basic phones too! You can receive SMS alerts, use IVR (phone call) services, and visit local health centers where staff can help you access your UHID and health information."
    },
    {
      question: "How do hospitals and doctors use my UHID?",
      answer: "With your permission, healthcare providers can instantly access your complete medical history, allergies, current medications, and past treatments. This helps them provide better care and avoid dangerous drug interactions or repeat tests."
    },
    {
      question: "Will AyuSmat work with government health schemes like Ayushman Bharat?",
      answer: "Yes, AyuSmat integrates with all major government health schemes. You'll receive automatic alerts about schemes you qualify for and can easily apply or access benefits through the platform."
    },
    {
      question: "How much does it cost to use AyuSmat?",
      answer: "Getting your UHID and basic health record management is completely free for all citizens. Some premium features like insurance comparison tools and advanced analytics may have minimal charges, but core healthcare access remains free."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about AyuSmat and your digital health journey
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to help you with any questions about AyuSmat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Live Chat Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;