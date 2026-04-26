import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, FilterX } from 'lucide-react';
import CategoryFilter from '@/src/components/CategoryFilter';
import PolicyCard from '@/src/components/PolicyCard';
import policiesData from '@/src/data/policies.json';
import { Policy, Category } from '@/src/types';
import { useTranslation } from 'react-i18next';

export default function Policies() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  
  const activeCategory = (searchParams.get('category') as Category | 'All') || 'All';

  // Translate policies data dynamically from i18n
  const translatedPolicies = useMemo(() => {
    return (policiesData as Policy[]).map(policy => ({
      ...policy,
      name: t(`policy.${policy.id}.name`),
      description: t(`policy.${policy.id}.description`),
      eligibility: t(`policy.${policy.id}.eligibility`),
    }));
  }, [t]);

  const filteredPolicies = useMemo(() => {
    return translatedPolicies.filter((policy) => {
      const matchesSearch = 
        policy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        policy.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'All' || policy.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [translatedPolicies, searchQuery, activeCategory]);

  const handleCategoryChange = (category: Category | 'All') => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {t('policies.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            {t('policies.subtitle')}
          </motion.p>
        </div>

        {/* Search and Filter Bar */}
        <div className="sticky top-24 z-30 bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('common.searchPlaceholder')}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="w-full overflow-x-auto pb-2 lg:pb-0">
              <CategoryFilter 
                selected={activeCategory} 
                onSelect={handleCategoryChange} 
              />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-slate-500 font-medium">
            {t('policies.showing', { count: filteredPolicies.length })}
          </p>
          {(searchQuery || activeCategory !== 'All') && (
            <button 
              onClick={clearFilters}
              className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <FilterX className="w-4 h-4" />
              {t('policies.clearFilters')}
            </button>
          )}
        </div>

        {/* Policies Grid */}
        <AnimatePresence mode="popLayout">
          {filteredPolicies.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPolicies.map((policy, index) => (
                <PolicyCard key={policy.id} policy={policy} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center bg-white rounded-[2rem] border border-dashed border-slate-300"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('policies.noResults')}</h3>
              <p className="text-slate-500">{t('policies.noResultsDesc')}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
