import { Link } from 'react-router-dom';
import { Landmark as BridgeIcon, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
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
              {t('home.heroSubtitle')}
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
            <h3 className="text-white font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/policies" className="hover:text-blue-400 transition-colors">{t('nav.policies')}</Link></li>
              <li><Link to="/digital-literacy" className="hover:text-blue-400 transition-colors">{t('nav.digitalLiteracy')}</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6">{t('footer.categories')}</h3>
            <ul className="space-y-4">
              <li><Link to="/policies?category=Education" className="hover:text-blue-400 transition-colors">{t('categories.Education')}</Link></li>
              <li><Link to="/policies?category=Health" className="hover:text-blue-400 transition-colors">{t('categories.Health')}</Link></li>
              <li><Link to="/policies?category=Agriculture" className="hover:text-blue-400 transition-colors">{t('categories.Agriculture')}</Link></li>
              <li><Link to="/policies?category=Women" className="hover:text-blue-400 transition-colors">{t('categories.Women')}</Link></li>
              <li><Link to="/policies?category=Senior Citizens" className="hover:text-blue-400 transition-colors">{t('categories.Senior Citizens')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">{t('nav.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{t('footer.address')}</span>
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
          <p>© {currentYear} PolicyBridge. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
