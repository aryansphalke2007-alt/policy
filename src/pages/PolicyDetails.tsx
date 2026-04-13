import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Printer, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';
import policiesData from '@/src/data/policies.json';
import { Policy } from '@/src/types';
import PolicyDetailSection from '@/src/components/PolicyDetailSection';

export default function PolicyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const policy = (policiesData as Policy[]).find((p) => p.id === id);

  if (!policy) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Policy not found</h1>
        <Link to="/policies" className="text-blue-600 font-bold hover:underline">
          Back to all policies
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 font-bold hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          
          <div className="flex gap-3">
            <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
              <Printer className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] border border-slate-200 p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                {policy.category}
              </span>
              <span className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-full">
                Policy ID: {policy.id.toUpperCase()}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              {policy.name}
            </h1>
            
            <div className="flex flex-wrap gap-8 text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm uppercase font-bold tracking-wider">Eligibility:</span>
                <span className="text-slate-900">{policy.eligibility}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm uppercase font-bold tracking-wider">Age Limit:</span>
                <span className="text-slate-900">{policy.ageLimit}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Details Content */}
        <PolicyDetailSection policy={policy} />
      </div>
    </div>
  );
}
