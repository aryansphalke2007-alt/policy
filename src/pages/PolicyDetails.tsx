import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Share2, Printer, Bookmark } from 'lucide-react';
import policiesData from '@/src/data/policies.json';
import PolicyDetailSection from '@/src/components/PolicyDetailSection';
import { Policy } from '@/src/types';
import { useTranslation } from 'react-i18next';

export default function PolicyDetails() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const policy = useMemo(() => {
    const basePolicy = (policiesData as Policy[]).find((p) => p.id === id);
    if (!basePolicy) return null;

    return {
      ...basePolicy,
      name: t(`policy.${basePolicy.id}.name`),
      description: t(`policy.${basePolicy.id}.description`),
      eligibility: t(`policy.${basePolicy.id}.eligibility`),
      applicationProcess: t(`policy.${basePolicy.id}.applicationProcess`, { 
        returnObjects: true, 
        defaultValue: basePolicy.applicationProcess 
      }) as string[]
    };
  }, [id, t]);

  if (!policy) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('policies.noResults')}</h2>
        <button 
          onClick={() => navigate('/policies')}
          className="text-blue-600 font-bold hover:underline"
        >
          {t('common.back')}
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-slate-50/30 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <Link 
            to="/policies"
            className="flex items-center gap-2 text-slate-500 font-bold hover:text-blue-600 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {t('common.back')}
          </Link>

          <div className="flex items-center gap-3">
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
              <Printer className="w-5 h-5" />
            </button>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <PolicyDetailSection policy={policy} />
        </motion.div>
      </div>
    </div>
  );
}
