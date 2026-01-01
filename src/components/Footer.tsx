import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-black text-white">RNOLD FITNESS</div>
                <div className="text-xs text-gray-400">Udaipur</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your body and mind at Udaipur's premier fitness destination. Join us today!
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#programs" className="text-gray-400 hover:text-red-500 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-red-500 transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-red-500 transition-colors">
                  Book Trial
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-red-500" />
                <span>Sector 14, Hiran Magri, Udaipur, Rajasthan 313001</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-red-500" />
                <a href="tel:+919876543210" className="hover:text-red-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-red-500" />
                <a href="mailto:info@rnoldfitness.com" className="hover:text-red-500 transition-colors">
                  info@rnoldfitness.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Working Hours</h3>
            <p className="text-gray-400 text-sm mb-4">
              Monday - Sunday<br />
              5:00 AM - 11:00 PM
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Rnold Fitness Club, Udaipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
