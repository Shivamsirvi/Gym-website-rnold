import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Us</span>
          </h2>
          <p className="text-xl text-gray-400">
            Come experience Udaipur's premier fitness facility. We're here to help you succeed!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Address</div>
                    <div className="text-gray-400">
                      Rnold Fitness Club, Sector 14<br />
                      Hiran Magri, Udaipur, Rajasthan 313001
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <div className="text-gray-400">
                      <a href="tel:+919876543210" className="hover:text-red-500 transition-colors">
                        +91 98765 43210
                      </a>
                      <br />
                      <a href="tel:+919876543211" className="hover:text-red-500 transition-colors">
                        +91 98765 43211
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <div className="text-gray-400">
                      <a href="mailto:info@rnoldfitness.com" className="hover:text-red-500 transition-colors">
                        info@rnoldfitness.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Working Hours</div>
                    <div className="text-gray-400">
                      Monday - Sunday<br />
                      5:00 AM - 11:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="font-semibold text-white mb-4">Follow Us</div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 flex items-center justify-center transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 flex items-center justify-center transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 flex items-center justify-center transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-2 border border-gray-700 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.4976947938626!2d73.68858431499821!3d24.581816784191346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56a03c5c903%3A0x5e5fd6c7c0c4c4c5!2sHiran%20Magri%2C%20Udaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rnold Fitness Club Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
