import React from 'react';
import { motion } from 'motion/react';
import { Laptop, FileUp, ShieldCheck, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const guides = [
  {
    icon: Laptop,
    title: "Using Government Portals",
    description: "Learn how to navigate official websites like PM Kisan, PMAY, and National Scholarship Portal without getting lost.",
    steps: [
      "Always check for 'gov.in' or 'nic.in' in the website address.",
      "Look for the 'Registration' or 'Apply Now' button on the homepage.",
      "Keep your mobile number linked with Aadhaar for OTP verification.",
      "Save your application number or reference ID for future tracking."
    ]
  },
  {
    icon: FileUp,
    title: "Document Upload Guide",
    description: "Uploading documents can be tricky. Here is how to do it correctly every time.",
    steps: [
      "Scan documents clearly using a mobile scanner app or a physical scanner.",
      "Ensure the file size is within the limit (usually below 500KB or 1MB).",
      "Use common formats like PDF, JPEG, or PNG as requested.",
      "Make sure all text on the uploaded document is readable."
    ]
  },
  {
    icon: ShieldCheck,
    title: "Staying Safe Online",
    description: "Protect yourself from scams and fake websites promising government benefits.",
    steps: [
      "Never share your OTP or bank passwords with anyone over the phone.",
      "Government schemes never ask for money to 'guarantee' a benefit.",
      "Avoid clicking on suspicious links received on WhatsApp or SMS.",
      "Only use official portals mentioned on PolicyBridge."
    ]
  }
];

export default function DigitalLiteracy() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Digital Literacy <span className="text-blue-600">Guide</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            New to online applications? Don't worry. Our step-by-step guides will help you navigate the digital world of government services with confidence.
          </p>
        </div>

        <div className="space-y-24">
          {guides.map((guide, index) => (
            <motion.section
              key={guide.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "flex flex-col lg:flex-row gap-12 items-center",
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              )}
            >
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-xl text-blue-600 font-bold">
                  <guide.icon className="w-6 h-6" />
                  {guide.title}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {guide.description}
                </h2>
                <div className="space-y-4">
                  {guide.steps.map((step, sIndex) => (
                    <div key={sIndex} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-blue-600 shadow-sm">
                        {sIndex + 1}
                      </div>
                      <p className="text-slate-700 font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-slate-100 rounded-[3rem] border-8 border-slate-50 shadow-2xl overflow-hidden relative group">
                  <img 
                    src={`https://picsum.photos/seed/${guide.title.replace(/\s/g, '')}/800/600`} 
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="font-bold text-lg mb-2">Watch Video Tutorial</p>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                        Coming Soon
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="mt-32 pt-24 border-t border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Common Questions</h2>
            <p className="text-lg text-slate-600">Quick answers to help you get started.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">What if I don't have a smartphone?</h3>
              <p className="text-slate-600 leading-relaxed">
                You can visit your nearest Common Service Centre (CSC) or a local cyber cafe. They are authorized to help citizens apply for government schemes for a nominal fee.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Is my data safe on government portals?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, official portals ending in .gov.in use high-level security to protect your data. Always ensure you are on the correct official website before entering details.
              </p>
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Official Learning Resources</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Explore these official government platforms for more digital training and information.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/10">
              Digital India
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/10">
              National Portal of India
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://www.pmindia.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/10">
              PM India
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
