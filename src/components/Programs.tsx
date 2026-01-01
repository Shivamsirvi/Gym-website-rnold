import { Scale, Apple, Activity, Dumbbell, Heart, UserCheck } from 'lucide-react';

const programs = [
  {
    icon: Scale,
    title: 'Weight Loss Programs',
    description: 'Scientifically designed fat-burning workouts combined with nutrition coaching to help you lose weight sustainably.',
    features: ['Cardio Workouts', 'HIIT Training', 'Fat Burn Sessions', 'Progress Tracking'],
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Apple,
    title: 'Personalized Diet Plans',
    description: 'Custom nutrition plans tailored to your body type, goals, and lifestyle by certified nutritionists.',
    features: ['Custom Meal Plans', 'Macro Tracking', 'Supplement Guidance', 'Weekly Check-ins'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Activity,
    title: 'Body Tracking',
    description: 'Advanced body composition analysis and progress tracking to monitor your transformation journey.',
    features: ['InBody Scans', 'Progress Photos', 'Measurement Tracking', 'Performance Metrics'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build lean muscle mass and increase strength with expert-guided resistance training programs.',
    features: ['Free Weights', 'Machine Training', 'Powerlifting', 'Functional Training'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Heart,
    title: 'Cardio Training',
    description: 'Improve cardiovascular health and endurance with varied cardio equipment and classes.',
    features: ['Treadmills', 'Cycling', 'Rowing', 'Cross Training'],
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: UserCheck,
    title: 'Certified Trainers',
    description: 'Work with experienced, certified fitness professionals dedicated to helping you achieve your goals.',
    features: ['Personal Training', '1-on-1 Coaching', 'Form Correction', 'Motivation Support'],
    color: 'from-orange-500 to-yellow-500'
  }
];

export default function Programs() {
  return (
    <section className="py-20 bg-gray-900" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Programs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your health and fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105 border border-gray-700 hover:border-gray-600"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center mb-6`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>

              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
