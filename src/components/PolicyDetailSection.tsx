import { CheckCircle2, Info, FileText, MapPin, ExternalLink, Clock, CreditCard } from 'lucide-react';
import { Policy } from '@/src/types';
import { motion } from 'motion/react';

interface PolicyDetailSectionProps {
  policy: Policy;
}

export default function PolicyDetailSection({ policy }: PolicyDetailSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-8">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Info className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            {policy.description}
          </p>
        </motion.section>

        {/* Eligibility & Age */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Who can apply?</h4>
              <p className="text-slate-900 font-medium">{policy.eligibility}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Age Limit</h4>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <p className="text-slate-900 font-medium">{policy.ageLimit}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Application Process */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <FileText className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">How to Apply</h2>
          </div>
          <div className="space-y-6">
            {policy.applicationProcess.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <p className="text-slate-700 font-medium leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        {/* Documents Required */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6">Documents Required</h3>
          <ul className="space-y-4">
            {policy.documents.map((doc, index) => (
              <li key={index} className="flex items-center gap-3 text-slate-600 font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                {doc}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Charges & Where to Apply */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="mb-8">
            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">
              <CreditCard className="w-4 h-4" />
              Application Fees
            </div>
            <p className="text-2xl font-bold text-blue-400">{policy.charges}</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Where to Apply</h3>
            
            {policy.whereToApply.online && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
                  <ExternalLink className="w-4 h-4" />
                  Online
                </div>
                <a 
                  href={policy.whereToApply.online} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors text-blue-300 font-medium break-all text-sm"
                >
                  {policy.whereToApply.online}
                </a>
              </div>
            )}

            {policy.whereToApply.offline && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
                  <MapPin className="w-4 h-4" />
                  Offline
                </div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-slate-300 font-medium text-sm">
                  {policy.whereToApply.offline}
                </div>
              </div>
            )}

            <a
              href={policy.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20"
            >
              Visit Official Portal
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
