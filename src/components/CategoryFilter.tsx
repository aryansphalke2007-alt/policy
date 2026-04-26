import { Category } from '@/src/types';
import { cn } from '@/src/lib/utils';
import { GraduationCap, Heart, Sprout, UserCheck, Users, Briefcase, Home, LayoutGrid } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const categories: { name: Category | 'All'; icon: any }[] = [
  { name: 'All', icon: LayoutGrid },
  { name: 'Education', icon: GraduationCap },
  { name: 'Health', icon: Heart },
  { name: 'Agriculture', icon: Sprout },
  { name: 'Women', icon: UserCheck },
  { name: 'Senior Citizens', icon: Users },
  { name: 'Employment', icon: Briefcase },
  { name: 'Housing', icon: Home },
];

interface CategoryFilterProps {
  selected: Category | 'All';
  onSelect: (category: Category | 'All') => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = selected === cat.name;
        
        return (
          <button
            key={cat.name}
            onClick={() => onSelect(cat.name)}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border whitespace-nowrap",
              isActive
                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105"
                : "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
            )}
          >
            <Icon className="w-4 h-4" />
            {cat.name === 'All' ? t('common.all') : t(`categories.${cat.name}`, { defaultValue: cat.name })}
          </button>
        );
      })}
    </div>
  );
}
