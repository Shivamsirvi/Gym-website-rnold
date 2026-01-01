import { Check, Zap, Crown, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '1,999',
    originalPrice: '2,499',
    duration: 'per month',
    icon: Star,
    popular: false,
    features: [
      'Access to gym equipment',
      'Locker facility',
      'Basic fitness assessment',
      'Group training sessions',
      'Shower facilities',
      'Free parking'
    ],
    color: 'from-gray-600 to-gray-700'
  },
  {
    name: 'Pro',
    price: '3,499',
    originalPrice: '4,999',
    duration: 'per month',
    icon: Zap,
    popular: true,
    features: [
      'Everything in Basic',
      '4 personal training sessions',
      'Personalized diet plan',
      'Body composition analysis',
      'Access to group classes',
      'Nutrition counseling',
      'Free protein shake',
      'Priority equipment access'
    ],
    color: 'from-red-600 to-orange-600'
  },
  {
    name: 'Elite',
    price: '5,999',
    originalPrice: '8,499',
    duration: 'per month',
    icon: Crown,
    popular: false,
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Advanced body tracking',
      'Dedicated fitness coach',
      'Custom supplement plan',
      'Priority class booking',
      'Guest passes (2/month)',
      'Massage therapy session',
      'Free merchandise'
    ],
    color: 'from-yellow-600 to-orange-600'
  }
];

export default function MembershipPlans() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-black" id="plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Membership <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Plans</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Choose the perfect plan for your fitness journey. All plans include access to premium facilities.
          </p>
          <div className="inline-flex items-center bg-red-600/20 border border-red-600 rounded-full px-6 py-3 text-red-400 font-semibold">
            <Zap className="w-5 h-5 mr-2" />
            Limited Time: Save up to 30% on annual memberships!
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-2xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? 'border-red-600 shadow-2xl shadow-red-600/20'
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-r ${plan.color} items-center justify-center mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-500 line-through text-lg">₹{plan.originalPrice}</span>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-black text-white">₹{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.duration}</span>
                  </div>
                </div>
                <div className="inline-block bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₹{parseInt(plan.originalPrice.replace(',', '')) - parseInt(plan.price.replace(',', ''))}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-3">Special Offer: Annual Membership</h3>
          <p className="text-xl mb-4">
            Pay for 10 months, get 12 months access + Free personal training worth ₹10,000
          </p>
          <button
            onClick={scrollToBooking}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Claim This Offer
          </button>
        </div>
      </div>
    </section>
  );
}
