import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Upload, 
  ShieldCheck, 
  MousePointer2, 
  PlayCircle, 
  HelpCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function DigitalLiteracy() {
  const { t } = useTranslation();

  const guides = [
    {
      title: t('digital.guide1Title'),
      desc: t('digital.guide1Desc'),
      icon: MousePointer2,
      color: "blue"
    },
    {
      title: t('digital.guide2Title'),
      desc: t('digital.guide2Desc'),
      icon: Upload,
      color: "emerald"
    },
    {
      title: t('digital.guide3Title'),
      desc: t('digital.guide3Desc'),
      icon: ShieldCheck,
      color: "indigo"
    }
  ];

  const faqs = [
    {
      q: t('digital.faq1Q'),
      a: t('digital.faq1A')
    },
    {
      q: t('digital.faq2Q'),
      a: t('digital.faq2A')
    },
    {
      q: t('digital.faq3Q'),
      a: t('digital.faq3A')
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm font-bold mb-6"
            >
              <BookOpen className="w-4 h-4" />
              {t('nav.digitalLiteracy')}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
            >
              {t('digital.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              {t('digital.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white rounded-[2rem] border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${guide.color}-50 text-${guide.color}-600 group-hover:bg-${guide.color}-600 group-hover:text-white transition-colors`}>
                <guide.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{guide.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{guide.desc}</p>
              <button className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">
                {t('common.learnHow')}
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] overflow-hidden border border-slate-200 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                {t('digital.videoTitle')}
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t('digital.videoDesc')}
              </p>
              <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95">
                <PlayCircle className="w-6 h-6 text-blue-400" />
                {t('digital.watchVideo')}
              </button>
            </div>
            <div className="lg:w-1/2 bg-slate-200 relative group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/digital/1200/800" 
                alt="Digital Literacy Video" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-12 h-12 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t('digital.faqTitle')}</h2>
          <p className="text-lg text-slate-600">{t('digital.faqSubtitle')}</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex gap-4 mb-4">
                <HelpCircle className="w-6 h-6 text-blue-600 shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">{faq.q}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed pl-10">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t('digital.resourcesTitle')}</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">{t('digital.resourcesSubtitle')}</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['Digital India', 'MyGov.in', 'National Portal of India'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all border border-white/10"
              >
                {item}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
