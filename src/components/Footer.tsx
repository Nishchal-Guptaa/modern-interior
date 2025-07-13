import { Link } from 'react-router-dom';
import { HardHat, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <HardHat className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Modern Interior</span>
            </Link>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Building dreams into reality with over 15 years of experience.<br />
              Quality craftsmanship, reliable service, and customer satisfaction guaranteed.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Trusted By</h3>
            <ul className="space-y-3">
              <li><p className="text-gray-200">Amba Enterprises</p></li>
              <li><p className="text-gray-200">JP jewellers</p></li>
              <li><p className="text-gray-200">Amar Jewellers</p></li>
              <li><p className="text-gray-200">And More...</p></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <a href="tel:8448373478" className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-500 mt-0.5" />
                <span className="text-orange-100 hover:text-orange-500 underline">(+91) 8448373478</span>
              </a>
              <a href="mailto:yuvrajsingh17062@gmail.com"className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-orange-500 mt-0.5" />
                <span className="text-orange-100 hover:text-orange-500 underline">yuvrajsingh17062@gmail.com</span>
              </a>
              <a href="https://maps.app.goo.gl/y8w9scNHnoHahi2X7" className="flex items-start space-x-3" target="_blank">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <span className="text-orange-100 hover:text-orange-500 underline">Modern Interior<br />Sector 37D, Gurugram, 122505</span>
              </a>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
            <ul className="space-y-3">
              <li><p className="text-gray-200">Monday - Friday: 7:00 AM - 6:00 PM</p></li>
              <li><p className="text-gray-200">Saturday: 8:00 AM - 4:00 PM</p></li>
              <li><p className="text-gray-200">Sunday Emergency Only</p></li>
              <li><p className="text-orange-500">24/7 Emergency Service Available</p></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-200 text-sm">
              © 2024 Modern Interior. All rights reserved. Licenced, Insured, and Bonded.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;