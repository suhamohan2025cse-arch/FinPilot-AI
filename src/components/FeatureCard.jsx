import { motion } from 'framer-motion'

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7
      transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.045] hover:border-white/[0.14]
      hover:shadow-[0_20px_60px_-15px_rgba(124,92,255,0.35)]"
    >
      {/* corner glow on hover */}
      <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-violet-glow/0 to-cyan-glow/0 group-hover:from-violet-glow/25 group-hover:to-cyan-glow/10 blur-2xl transition-all duration-500" />

      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-glow/20 to-cyan-glow/10 border border-white/[0.08] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="h-5 w-5 text-cyan-glow" strokeWidth={1.75} />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>

      <div className="mt-5 h-px w-0 bg-gradient-to-r from-violet-glow to-cyan-glow transition-all duration-500 group-hover:w-full" />
    </motion.div>
  )
}
