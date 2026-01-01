import { Dumbbell, Award, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              Limited Time Offer - 30% OFF
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Transform Your Body at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Rnold Fitness Club
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Udaipur's Premier Fitness Destination. Get personalized training, expert nutrition guidance, and state-of-the-art equipment to achieve your dream physique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Book Your Free Trial Now
              </button>
              <button
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 transition-all duration-300"
              >
                View Membership Plans
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-gray-400 text-sm">Members</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold">15+</div>
                <div className="text-gray-400 text-sm">Trainers</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Dumbbell className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-gray-400 text-sm">Equipment</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fitness Training"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
