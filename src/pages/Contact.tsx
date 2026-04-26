import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('contact.infoTitle')}</h2>
              <p className="text-slate-600 mb-8">{t('contact.infoDesc')}</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t('contact.emailLabel')}</h3>
                    <p className="text-slate-600">support@policybridge.gov.in</p>
                    <p className="text-xs text-slate-400 mt-1">{t('contact.emailSub')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t('contact.phoneLabel')}</h3>
                    <p className="text-slate-600">+91 1800-123-4567</p>
                    <p className="text-xs text-slate-400 mt-1">{t('contact.phoneSub')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t('contact.officeLabel')}</h3>
                    <p className="text-slate-600">123 Policy Street, New Delhi, India</p>
                    <p className="text-xs text-slate-400 mt-1">{t('contact.officeSub')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <MessageSquare className="w-10 h-10 text-blue-200 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{t('contact.communityTitle')}</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                {t('contact.communityDesc')}
              </p>
              <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all active:scale-95">
                {t('contact.joinForum')}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('contact.successTitle')}</h2>
                <p className="text-slate-600 mb-10 max-w-sm mx-auto">
                  {t('contact.successDesc')}
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  {t('contact.sendAnother')}
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">{t('contact.formTitle')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.nameLabel')}</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.emailInputLabel')}</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.subjectLabel')}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.messageLabel')}</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-3"
                  >
                    {t('contact.sendButton')}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
