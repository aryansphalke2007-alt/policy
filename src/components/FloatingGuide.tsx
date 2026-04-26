import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark as BridgeIcon, 
  X, 
  Minus, 
  Bot, 
  ChevronRight, 
  Loader2,
  Maximize2,
  Sparkles,
  Info
} from 'lucide-react';
import { analyzePolicyText } from '../utils/guideInjector';

export default function FloatingGuide() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle closing
  if (!isOpen) return null;

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setAnalysis(null);
    
    // Grab page text
    const pageText = document.body.innerText;
    const result = await analyzePolicyText(pageText);
    
    setAnalysis(result);
    setIsAnalyzing(false);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" ref={containerRef}>
      <motion.div
        drag
        dragConstraints={containerRef}
        initial={{ x: window.innerWidth - 380, y: window.innerHeight - 600 }}
        className={`pointer-events-auto absolute w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 ${
          isMinimized ? 'h-14' : 'h-[500px]'
        }`}
      >
        {/* Header */}
        <div className="bg-blue-600 p-4 flex items-center justify-between cursor-move shrink-0">
          <div className="flex items-center gap-2 text-white">
            <BridgeIcon className="w-5 h-5" />
            <span className="font-bold text-sm tracking-tight uppercase">PolicyBridge Guide</span>
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/20 rounded-lg text-white transition-colors"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <>
            <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {/* Introduction */}
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex gap-3 text-blue-800 text-sm leading-relaxed">
                <Bot className="w-5 h-5 shrink-0 text-blue-600" />
                <p>
                  Hello! I'm your civic assistant. I can help you understand this page in simple language.
                </p>
              </div>

              {/* Analysis Result */}
              {analysis && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="prose prose-slate prose-sm max-w-none text-slate-700 space-y-4"
                >
                  <div className="p-1 whitespace-pre-line">
                    {analysis}
                  </div>
                </motion.div>
              )}

              {/* Initial State / Prompt */}
              {!analysis && !isAnalyzing && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm uppercase">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      Quick Actions
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">
                        <Info className="w-4 h-4" />
                        Who is this for?
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">
                        <ChevronRight className="w-4 h-4" />
                        How to apply here?
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Loading State */}
              {isAnalyzing && (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                  <p className="text-sm font-semibold text-slate-500">Analyzing policy page...</p>
                </div>
              )}
            </div>

            {/* Footer / Action */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 shrink-0">
              <button 
                disabled={isAnalyzing}
                onClick={handleAnalyze}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 disabled:opacity-50"
              >
                {isAnalyzing ? "Processing..." : "Analyze This Page"}
                {!isAnalyzing && <Sparkles className="w-4 h-4" />}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
