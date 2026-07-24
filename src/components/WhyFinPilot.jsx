import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import SectionHeading from './SectionHeading.jsx'

const stats = [
  {
    value: 98,
    suffix: '%',
    label: 'Prediction Accuracy',
    detail: 'Validated against three academic years of historical fee data.',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Reduction in Fee Defaults',
    detail: 'Average across schools using early-warning reminders.',
  },
  {
    value: 30,
    suffix: '%',
    label: 'Better Budget Planning',
    detail: 'Fewer mid-year budget revisions after adopting forecasts.',
  },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1] })
      return controls.stop
    }
  }, [inView, value])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-display font-semibold gradient-text">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function WhyFinPilot() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-gradient-to-r from-violet-glow/10 via-transparent to-cyan-glow/10 blur-3xl pointer-events-none" />

      <div className="relative section-padding">
        <SectionHeading
          eyebrow="Why FinPilot"
          title="Numbers finance teams can stand behind"
          description="Every metric below comes from schools that replaced manual fee tracking with FinPilot's forecasting engine."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 md:p-10 flex flex-col items-center text-center hover:border-white/[0.18] transition-colors duration-300"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-base font-semibold text-white">{stat.label}</p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
