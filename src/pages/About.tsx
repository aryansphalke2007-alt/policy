import React from 'react';
import { motion } from 'motion/react';
import { Landmark as BridgeIcon, Target, Users, Shield, Globe, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.statsPolicies'), value: "500+", icon: BridgeIcon },
    { label: t('about.statsUsers'), value: "1M+", icon: Users },
    { label: t('about.statsLanguages'), value: "7+", icon: Globe },
  ];

  const values = [
    {
      title: t('about.value1Title'),
      desc: t('about.value1Desc'),
      icon: Zap,
      color: "blue"
    },
    {
      title: t('about.value2Title'),
      desc: t('about.value2Desc'),
      icon: Shield,
      color: "emerald"
    },
    {
      title: t('about.value3Title'),
      desc: t('about.value3Desc'),
      icon: Globe,
      color: "indigo"
    }
  ];

  return (
    <div className="pt-32">
      {/* Mission Section */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
                  {t('about.missionLabel')}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                  {t('about.missionTitle')}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {t('about.missionDesc')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 -z-10 opacity-10" />
              <img 
                src="https://picsum.photos/seed/mission/800/600" 
                alt="Our Mission" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">{t('about.valuesTitle')}</h2>
            <p className="text-lg text-slate-600">{t('about.valuesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-${value.color}-50 text-${value.color}-600 group-hover:bg-${value.color}-600 group-hover:text-white transition-colors`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">{t('about.awarenessTitle')}</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-10">
                {t('about.awarenessDesc')}
              </p>
              <ul className="space-y-6">
                {[t('about.awarenessPoint1'), t('about.awarenessPoint2'), t('about.awarenessPoint3')].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/awareness/800/600" 
                alt="Awareness" 
                className="rounded-[2rem] shadow-2xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
