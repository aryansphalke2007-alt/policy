import React from 'react';
import { motion } from 'motion/react';
import { Search, FileText, CheckCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const steps = [
  {
    icon: Search,
    title: "Search Policy",
    description: "Use our simple search or browse categories to find the right government scheme for you.",
    color: "bg-blue-500"
  },
  {
    icon: FileText,
    title: "Check Details",
    description: "Read about eligibility, required documents, and the application process in simple language.",
    color: "bg-indigo-500"
  },
  {
    icon: CheckCircle,
    title: "Apply Easily",
    description: "Follow our step-by-step guide to apply online or find the nearest office to apply offline.",
    color: "bg-emerald-500"
  }
];

export default function StepSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            How PolicyBridge Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We simplify complex government information so you can access the benefits you deserve in three easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={cn(
                "w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-xl transition-transform group-hover:scale-110",
                step.color
              )}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2 block">Step 0{index + 1}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
