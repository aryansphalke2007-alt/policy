import { Link } from 'react-router-dom';
import { Landmark as BridgeIcon, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BridgeIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Policy<span className="text-blue-600">Bridge</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering citizens with clear, simple, and accessible information about government policies and schemes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/policies" className="hover:text-blue-400 transition-colors">All Policies</Link></li>
              <li><Link to="/digital-literacy" className="hover:text-blue-400 transition-colors">Digital Literacy</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6">Categories</h3>
            <ul className="space-y-4">
              <li><Link to="/policies?category=Education" className="hover:text-blue-400 transition-colors">Education</Link></li>
              <li><Link to="/policies?category=Health" className="hover:text-blue-400 transition-colors">Health</Link></li>
              <li><Link to="/policies?category=Agriculture" className="hover:text-blue-400 transition-colors">Agriculture</Link></li>
              <li><Link to="/policies?category=Women" className="hover:text-blue-400 transition-colors">Women</Link></li>
              <li><Link to="/policies?category=Senior Citizens" className="hover:text-blue-400 transition-colors">Senior Citizens</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>123 Policy Street, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>support@policybridge.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} PolicyBridge. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
