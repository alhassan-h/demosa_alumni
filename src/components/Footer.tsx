import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">About DEMOSA</h3>
            <p className="text-sm leading-relaxed mb-5">
              The Demonstration Secondary School Old Students Association connects alumni worldwide,
              fostering lifelong bonds and supporting our alma mater.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors p-2 hover:bg-navy-light rounded-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 hover:bg-navy-light rounded-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 hover:bg-navy-light rounded-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 hover:bg-navy-light rounded-lg">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors hover:pl-2 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:pl-2 inline-block">Constitution</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:pl-2 inline-block">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:pl-2 inline-block">Year Groups</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:pl-2 inline-block">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400" />
                <span>Demonstration Secondary School<br />Ahmadu Bello University, Zaria</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@demosa.org" className="hover:text-white transition-colors">
                  info@demosa.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-blue-400" />
                <a href="tel:+2348012345678" className="hover:text-white transition-colors">
                  +234 801 234 5678
                </a>
              </li>
            </ul>
          </div>

          {/* School Link */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Our School</h3>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 p-1.5 shadow-md">
              <img src="/logos/dss-abu-logo.png" alt="Demonstration Secondary School, ABU Zaria crest" className="w-full h-full object-contain" />
            </div>
            <p className="text-sm mb-5 leading-relaxed">
              Visit the official Demonstration Secondary School website to learn more about our heritage.
            </p>
            <a
              href="https://dss.abu.edu.ng/website/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors text-sm font-semibold shadow-lg"
            >
              Visit School Website
            </a>
          </div>
        </div>

        <div className="border-t border-navy-light mt-12 pt-8 text-center text-sm">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} DEMOSA - Demonstration Secondary School Old Students Association. All rights reserved.</p>
          <p className="mt-3 text-xs text-gray-500">
            Proudly serving alumni since 1975 | Building connections, preserving heritage
          </p>
        </div>
      </div>
    </footer>
  );
}
