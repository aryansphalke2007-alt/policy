import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Users, Award, Globe, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const values = [
  {
    icon: Target,
    title: "Clarity",
    description: "We break down complex legal and bureaucratic jargon into simple, everyday language that everyone can understand.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We believe every citizen has the right to know exactly what benefits they are entitled to and how to get them.",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: Heart,
    title: "Accessibility",
    description: "Our platform is designed to be usable by everyone, including those with low digital literacy or limited tech access.",
    color: "text-rose-600",
    bg: "bg-rose-50"
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm tracking-widest uppercase">Our Mission</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Bridging the Gap Between <span className="text-blue-600">Citizens & Government</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              PolicyBridge was founded with a simple yet powerful goal: to ensure that no citizen is left behind due to a lack of information or digital skills. We act as a transparent bridge, translating complex government policies into actionable knowledge.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-4xl font-extrabold text-slate-900">100+</p>
                <p className="text-slate-500 font-medium">Policies Simplified</p>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <p className="text-4xl font-extrabold text-slate-900">1M+</p>
                <p className="text-slate-500 font-medium">Monthly Users</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/community/800/800" 
                alt="Community" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600 rounded-[3rem] -z-10 hidden md:block" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-400 rounded-full -z-10 blur-2xl opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">What We Stand For</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our core values drive everything we do, from how we research policies to how we design our interface.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110", value.bg)}>
                  <value.icon className={cn("w-8 h-8", value.color)} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Awareness Matters */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full -mr-48 -mt-48 blur-[100px] opacity-20" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">Why Awareness Matters</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Millions of dollars in government benefits go unclaimed every year simply because people don't know they exist or don't know how to apply. We are changing that.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-300 font-medium">Reduces corruption by increasing transparency.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-300 font-medium">Empowers vulnerable sections of society.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-300 font-medium">Speeds up the digital transformation of India.</p>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center p-6">
                  <Shield className="w-10 h-10 text-blue-400 mb-4" />
                  <p className="font-bold text-lg">Secure</p>
                </div>
                <div className="aspect-square bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center p-6">
                  <Users className="w-10 h-10 text-emerald-400 mb-4" />
                  <p className="font-bold text-lg">Inclusive</p>
                </div>
              </div>
              <div className="pt-12 space-y-6">
                <div className="aspect-square bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center p-6">
                  <Globe className="w-10 h-10 text-indigo-400 mb-4" />
                  <p className="font-bold text-lg">Global Standards</p>
                </div>
                <div className="aspect-square bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center p-6">
                  <Zap className="w-10 h-10 text-amber-400 mb-4" />
                  <p className="font-bold text-lg">Fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
