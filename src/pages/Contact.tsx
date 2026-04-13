import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Get in <span className="text-blue-600">Touch</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about a policy or need help with the platform? Our team is here to support you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Reach out to us through any of these channels. We typically respond within 24-48 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600">support@policybridge.gov.in</p>
                  <p className="text-slate-400 text-sm mt-1">For general inquiries and support</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600">+91 1800-123-4567</p>
                  <p className="text-slate-400 text-sm mt-1">Mon-Fri, 9am to 6pm IST</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Our Office</h3>
                  <p className="text-slate-600">123 Policy Street, New Delhi, India</p>
                  <p className="text-slate-400 text-sm mt-1">Visit us for in-person consultation</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-blue-600 rounded-[3rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <MessageSquare className="w-10 h-10 mb-6 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Community Support</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Join our community forum to discuss policies with other citizens and experts.
              </p>
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all">
                Join Forum
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] border border-slate-200 p-8 md:p-12 shadow-xl relative"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Thank you for reaching out. We have received your message and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Subject</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Policy Clarification</option>
                      <option>Technical Support</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
                    />
                  </div>
                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
