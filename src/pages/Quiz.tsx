import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "Identify your primary biological concern.",
    options: ["Structural Dryness", "Surface Irregularity", "Cellular Congestion", "Pigment Imbalance", "Reactive Sensitivity"]
  },
  {
    id: 2,
    question: "Assess mid-cycle lipid production.",
    options: ["Deficient (Flaky)", "Excessive (Oily)", "Localized (T-Zone)", "Balanced (Optimal)", "Inflamed (Reactive)"]
  },
  {
    id: 3,
    question: "Current maintenance complexity.",
    options: ["Minimal (1-2 Steps)", "Standard (3-4 Steps)", "Intensive (5+ Steps)", "Unregulated"]
  },
  {
    id: 4,
    question: "Targeted structural objective.",
    options: ["Radiant Alignment", "Textural Refinement", "Clarity Restoration", "Hydration Saturation", "Barrier Stabilization"]
  }
];

export default function Quiz() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
    
    // Automatically advance after a short delay
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsFinished(true);
      }
    }, 400);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setShowIntro(true);
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-white min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl w-full mx-auto px-6">
        <AnimatePresence mode="wait">
          {showIntro ? (
            <motion.div
              key="quiz-intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-12"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-slate-900 mb-8" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase">Consultation</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-slate-900 leading-none">
                Find Your <br />
                <span className="italic font-serif text-slate-400">Formula</span>
              </h1>
              <p className="text-xl font-light text-slate-500 leading-relaxed max-w-2xl mx-auto">
                Our diagnostic tool analyzes your biological profile to recommend a precision-engineered protocol tailored to your specific needs.
              </p>
              <button 
                onClick={() => setShowIntro(false)}
                className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-900 group"
              >
                Begin Diagnostic <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ) : !isFinished ? (
            <motion.div
              key="quiz-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase block mb-2">Phase 0{currentStep + 1} / 0{questions.length}</span>
                  <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900">{questions[currentStep].question}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full text-left p-8 transition-all duration-300 border ${
                      answers[currentStep] === option 
                        ? 'border-slate-900 bg-slate-900 text-white' 
                        : 'border-slate-100 bg-transparent text-slate-500 hover:border-slate-900 hover:text-slate-900'
                    }`}
                  >
                    <span className="text-sm font-medium tracking-tight uppercase">{option}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-8">
                <button 
                  onClick={prevStep}
                  className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${
                    currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Previous
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!answers[currentStep]}
                  className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    !answers[currentStep] ? 'text-slate-200 cursor-not-allowed' : 'text-slate-900 hover:tracking-[0.4em]'
                  }`}
                >
                  {currentStep === questions.length - 1 ? 'Generate Formula' : 'Next Phase'}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="quiz-results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-16"
            >
              <div className="flex flex-col items-center">
                <CheckCircle2 className="text-slate-900 mb-8" size={48} strokeWidth={1} />
                <span className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase">Diagnostic Complete</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 leading-none">
                Your Bespoke <br />
                <span className="italic font-serif text-slate-400">Protocol</span>
              </h2>
              
              <p className="text-lg text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
                Analysis indicates a requirement for <span className="text-slate-900 font-medium uppercase">{answers[3]}</span>. 
                We have engineered a 3-step protocol optimized for your biological profile.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
                {[
                  { step: '01', name: 'ERA RADIANCE', type: 'Surface' },
                  { step: '02', name: 'ERA HYDRATE', type: 'Structural' },
                  { step: '03', name: 'ERA PROTECT', type: 'Barrier' }
                ].map((item) => (
                  <div key={item.step} className="space-y-2">
                    <span className="text-[8px] font-bold tracking-widest text-slate-400 uppercase">Step {item.step}</span>
                    <h3 className="text-sm font-bold tracking-tight text-slate-900 uppercase">{item.name}</h3>
                    <p className="text-[8px] text-slate-400 uppercase tracking-widest">{item.type}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-12 justify-center items-center pt-8">
                <Link 
                  to="/shop"
                  className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-900 group flex items-center gap-3"
                >
                  Acquire Protocol <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <button 
                  onClick={resetQuiz}
                  className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-3"
                >
                  <RefreshCw size={14} />
                  Recalibrate
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
