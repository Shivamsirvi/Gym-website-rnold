import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What are your gym timings?',
    answer: 'We are open from 5:00 AM to 11:00 PM, 7 days a week including all public holidays. Early morning and late evening slots are perfect for working professionals.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a complimentary 1-day trial pass so you can experience our facilities, meet our trainers, and see if we are the right fit for your fitness journey. Book your trial using the form above.'
  },
  {
    question: 'What is included in the membership?',
    answer: 'All memberships include access to gym equipment, locker facilities, shower rooms, and parking. Higher tier memberships include personal training sessions, diet plans, body tracking, and priority class booking.'
  },
  {
    question: 'Are personal trainers included?',
    answer: 'Personal training sessions are included in Pro and Elite memberships. Basic members can purchase personal training sessions separately at ₹500 per session or ₹4,000 for 10 sessions.'
  },
  {
    question: 'Do you provide diet plans?',
    answer: 'Yes, our certified nutritionists create personalized diet plans based on your goals, body type, and dietary preferences. This is included in Pro and Elite memberships or available separately for ₹2,000/month.'
  },
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes, you can freeze your membership for up to 30 days per year due to medical reasons, travel, or other valid circumstances. Just inform us 7 days in advance.'
  },
  {
    question: 'What safety measures do you follow?',
    answer: 'We maintain high hygiene standards with regular sanitization, air-conditioned training areas, CCTV surveillance, and first-aid trained staff. We also have AED equipment and certified trainers on-site at all times.'
  },
  {
    question: 'Is there parking available?',
    answer: 'Yes, we provide free parking for all members with space for both two-wheelers and four-wheelers. The parking area is well-lit and secure with 24/7 CCTV monitoring.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Got questions? We have answers. Can't find what you're looking for? Chat with us!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-gray-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-start justify-between text-left"
              >
                <div className="flex items-start flex-1">
                  <HelpCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="font-bold text-white text-lg pr-4">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pl-16">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
