import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CtaBand() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] glass-card px-8 py-14 md:p-16 text-center"
        >
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-violet-glow/25 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-glow/20 blur-[100px]" />

          <div className="relative">
            <h2 className="text-3xl md:text-[2.5rem] font-semibold max-w-xl mx-auto leading-tight">
              Give your finance team a head start on next term
            </h2>
            <p className="mt-4 text-slate-400 max-w-md mx-auto">
              Set up takes under a day. Your first risk report is ready before the week is out.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#hero-cta" className="btn-primary group">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#footer" className="btn-secondary">
                Talk to Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
