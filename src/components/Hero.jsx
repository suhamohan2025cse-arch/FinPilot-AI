import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import DashboardPreview from './DashboardPreview.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* ledger grid backdrop */}
      <div className="absolute inset-0 ledger-grid opacity-70 pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 h-72 w-72 md:h-96 md:w-96 rounded-full bg-violet-glow/25 blur-[110px] pointer-events-none" />

      <div className="relative section-padding">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow animate-pulse-glow" />
            Built for K-12 &amp; higher-ed finance teams
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="text-4xl sm:text-5xl md:text-[3.4rem] font-semibold leading-[1.08] tracking-tight"
          >
            AI Financial Intelligence
            <br />
            <span className="gradient-text">Platform for Schools</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl"
          >
            FinPilot AI predicts fee defaults, forecasts budgets, and flags anomalies before they
            become deficits — with a copilot that explains every recommendation in plain language.
          </motion.p>

          <motion.div
            id="hero-cta"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#features" className="btn-primary group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#workflow" className="btn-secondary group">
              <PlayCircle className="h-4 w-4 text-cyan-glow" />
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-8 flex items-center gap-6 text-xs text-slate-500 font-mono uppercase tracking-wider"
          >
            <span>SOC 2 in progress</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>FERPA-aware architecture</span>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-24">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
