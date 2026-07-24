import { motion } from 'framer-motion'
import { UploadCloud, BrainCircuit, Target, ClipboardCheck } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const steps = [
  {
    icon: UploadCloud,
    title: 'Upload Data',
    description: 'Connect your fee ledger, ERP export, or CSV — FinPilot maps the fields automatically.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Analysis',
    description: 'Models scan payment history, enrollment trends, and spend patterns for signal.',
  },
  {
    icon: Target,
    title: 'Predictions',
    description: 'Risk scores, forecasts, and anomalies are generated with a confidence rating attached.',
  },
  {
    icon: ClipboardCheck,
    title: 'Decision Support',
    description: 'Your team gets a ranked action list — who to contact, what to review, what to approve.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-24 md:py-32">
      <div className="section-padding">
        <SectionHeading
          eyebrow="How it works"
          title="From raw ledger to ranked action, in four steps"
          description="No data science team required — upload once and FinPilot keeps analyzing every time new records land."
        />

        <div className="mt-16 relative">
          {/* connecting line - desktop */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
            <motion.div
              className="absolute top-0 left-0 h-px bg-gradient-to-r from-violet-glow to-cyan-glow"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-start lg:items-center lg:text-center"
              >
                <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:gap-3">
                  <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl glass-card border-white/[0.1]">
                    <step.icon className="h-7 w-7 text-cyan-glow" strokeWidth={1.6} />
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-[240px]">
                  {step.description}
                </p>

                {/* mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-9 top-[72px] h-10 w-px bg-gradient-to-b from-white/[0.15] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
