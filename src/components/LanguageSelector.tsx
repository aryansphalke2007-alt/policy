import React from 'react';
import i18n from "i18next";
import { Languages } from 'lucide-react';

export default function LanguageSelector() {
  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
      <Languages className="w-4 h-4 text-blue-600" />
      <select 
        onChange={changeLang} 
        defaultValue={i18n.language}
        className="bg-transparent text-sm font-semibold text-slate-700 focus:outline-none cursor-pointer"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="mr">मराठी</option>
        <option value="ml">മലയാളം</option>
        <option value="te">తెలుగు</option>
        <option value="gu">ગુજરાતી</option>
        <option value="bn">বাংলা</option>
      </select>
    </div>
  );
}
