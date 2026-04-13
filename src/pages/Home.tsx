import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Globe, Zap } from 'lucide-react';
import SearchBar from '@/src/components/SearchBar';
import StepSection from '@/src/components/StepSection';
import PolicyCard from '@/src/components/PolicyCard';
import policiesData from '@/src/data/policies.json';
import { Policy } from '@/src/types';

const featuredPolicies = (policiesData as Policy[]).slice(0, 3);

export default function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/policies?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 1M+ Citizens
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Understand Government <br />
              <span className="text-blue-600">Policies Easily</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              PolicyBridge simplifies complex government schemes, eligibility, and application processes so you can access your benefits without confusion.
            </p>

            <form onSubmit={handleSearch} className="mb-12">
              <SearchBar 
                value={search} 
                onChange={setSearch} 
                placeholder="Search for PM Kisan, Awas Yojana, Health schemes..."
              />
            </form>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/policies')}
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-2"
              >
                Browse All Policies
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/digital-literacy')}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all active:scale-95"
              >
                Learn How to Apply
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Language Support</h3>
              <p className="text-slate-600 leading-relaxed">Access policy information in your regional language for better understanding.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real-time Updates</h3>
              <p className="text-slate-600 leading-relaxed">Get the latest information on new schemes and changes in existing policies instantly.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verified Information</h3>
              <p className="text-slate-600 leading-relaxed">All data is sourced directly from official government portals and verified by experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Policies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Popular Policies</h2>
              <p className="text-lg text-slate-600 max-w-xl">Check out the most searched and beneficial schemes currently available for citizens.</p>
            </div>
            <button 
              onClick={() => navigate('/policies')}
              className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              View All Policies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPolicies.map((policy, index) => (
              <PolicyCard key={policy.id} policy={policy} index={index} />
            ))}
          </div>
        </div>
      </section>

      <StepSection />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-600/20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ready to find the right <br /> scheme for you?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of citizens who are already benefiting from government policies with the help of PolicyBridge.
            </p>
            <button 
              onClick={() => navigate('/policies')}
              className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-lg active:scale-95"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
