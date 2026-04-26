import React from 'react';
import { 
  CheckCircle2, 
  FileText, 
  ClipboardList, 
  CreditCard, 
  MapPin, 
  ExternalLink,
  Landmark as BridgeIcon,
  GraduationCap,
  HeartPulse,
  Sprout,
  UserCheck,
  Calendar
} from 'lucide-react';
import { Policy } from '@/src/types';
import { useTranslation } from 'react-i18next';

interface PolicyDetailSectionProps {
  policy: Policy;
}

const categoryIcons: Record<string, React.ElementType> = {
  'Education': GraduationCap,
  'Health': HeartPulse,
  'Agriculture': Sprout,
  'Women': UserCheck,
  'Senior Citizens': Calendar,
  'Employment': ClipboardList,
  'Housing': Landmark,
};

function Landmark(props: any) {
  return <BridgeIcon {...props} />;
}

export default function PolicyDetailSection({ policy }: PolicyDetailSectionProps) {
  const { t } = useTranslation();
  const Icon = categoryIcons[policy.category] || BridgeIcon;

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50">
      {/* Header */}
      <div className="bg-slate-900 p-8 md:p-12 text-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-600 rounded-2xl">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-wider">
              {t(`categories.${policy.category}`, { defaultValue: policy.category })}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {t(`policy.${policy.id}.name`)}
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            {t(`policy.${policy.id}.description`)}
          </p>
        </div>
      </div>

      <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Eligibility */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t('policy.eligibility')}</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <p className="text-slate-700 leading-relaxed mb-4">
                {t(`policy.${policy.id}.eligibility`)}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                <Calendar className="w-4 h-4 text-blue-600" />
                {t('policy.ageLimit')}: {policy.ageLimit}
              </div>
            </div>
          </section>

          {/* Documents */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t('policy.docsRequired')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {policy.documents.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700 font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Application Process */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <ClipboardList className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t('policy.howToApply')}</h2>
            </div>
            <div className="space-y-6">
              {policy.applicationProcess.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                    {idx + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-slate-700 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          {/* Charges Card */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold">{t('policy.charges')}</h3>
            </div>
            <p className="text-3xl font-bold text-blue-400 mb-2">{policy.charges}</p>
            <p className="text-slate-400 text-sm">{t('policy.online')} & {t('policy.offline')}</p>
          </div>

          {/* Where to Apply */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">{t('policy.whereToApply')}</h3>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {policy.whereToApply.online || policy.whereToApply.offline}
            </p>
            <a 
              href={policy.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              {t('common.visitPortal')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
