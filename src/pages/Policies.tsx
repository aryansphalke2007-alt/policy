import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SearchX } from 'lucide-react';
import SearchBar from '@/src/components/SearchBar';
import CategoryFilter from '@/src/components/CategoryFilter';
import PolicyCard from '@/src/components/PolicyCard';
import policiesData from '@/src/data/policies.json';
import { Policy, Category } from '@/src/types';

export default function Policies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState<(Category | 'All')>(
    (searchParams.get('category') as Category) || 'All'
  );

  // Sync state with URL params
  useEffect(() => {
    const newParams = new URLSearchParams();
    if (search) newParams.set('search', search);
    if (category !== 'All') newParams.set('category', category);
    setSearchParams(newParams, { replace: true });
  }, [search, category, setSearchParams]);

  const filteredPolicies = useMemo(() => {
    return (policiesData as Policy[]).filter((policy) => {
      const matchesSearch = policy.name.toLowerCase().includes(search.toLowerCase()) ||
                          policy.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || policy.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Government Policies & Schemes
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Browse our comprehensive database of government initiatives. Filter by category or search to find exactly what you need.
          </p>

          <SearchBar 
            value={search} 
            onChange={setSearch} 
            className="mb-8"
          />
          
          <CategoryFilter 
            selected={category} 
            onSelect={setCategory} 
          />
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-900">
            Showing {filteredPolicies.length} {filteredPolicies.length === 1 ? 'Policy' : 'Policies'}
          </h2>
        </div>

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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-24 bg-white rounded-[3rem] border border-slate-200 shadow-sm"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <SearchX className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No policies found</h3>
              <p className="text-slate-500 mb-8">Try adjusting your search or category filter.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setCategory('All');
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
