import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Briefcase, GraduationCap, Heart, Sprout, Home, UserCheck, Landmark as BridgeIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Policy } from '@/src/types';
import { cn } from '@/src/lib/utils';

const categoryIcons = {
  Education: GraduationCap,
  Health: Heart,
  Agriculture: Sprout,
  Women: UserCheck,
  'Senior Citizens': Users,
  Employment: Briefcase,
  Housing: Home,
};

interface PolicyCardProps {
  policy: Policy;
  index?: number;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ policy, index = 0 }) => {
  const Icon = categoryIcons[policy.category] || BridgeIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={cn(
          "p-3 rounded-xl transition-colors",
          "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">
          {policy.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {policy.name}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
        {policy.description}
      </p>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <UserCheck className="w-4 h-4 text-blue-500" />
          <span>{policy.eligibility}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Calendar className="w-4 h-4 text-blue-500" />
          <span>Age: {policy.ageLimit}</span>
        </div>
      </div>

      <Link
        to={`/policies/${policy.id}`}
        className="mt-auto flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-50 text-slate-900 rounded-xl font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all group/btn"
      >
        View Details
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default PolicyCard;

