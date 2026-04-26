import React from 'react';
import { Search, ClipboardCheck, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function StepSection() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('home.steps.step1Title'),
      desc: t('home.steps.step1Desc'),
      icon: Search,
      color: "blue"
    },
    {
      title: t('home.steps.step2Title'),
      desc: t('home.steps.step2Desc'),
      icon: ClipboardCheck,
      color: "emerald"
    },
    {
      title: t('home.steps.step3Title'),
      desc: t('home.steps.step3Desc'),
      icon: Send,
      color: "indigo"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {t('home.steps.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('home.steps.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm"
            >
              <div className={`w-20 h-20 rounded-3xl bg-${step.color}-50 text-${step.color}-600 flex items-center justify-center mb-8 shadow-inner`}>
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
