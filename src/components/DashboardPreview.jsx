import { motion } from 'framer-motion'
import { TrendingUp, AlertTriangle, Bot, ShieldCheck } from 'lucide-react'

const riskRows = [
  { grade: 'Grade 6 · Section B', risk: 82, tone: 'high' },
  { grade: 'Grade 9 · Section A', risk: 61, tone: 'mid' },
  { grade: 'Grade 4 · Section C', risk: 24, tone: 'low' },
]

const toneMap = {
  high: 'from-rose-500 to-orange-400',
  mid: 'from-amber-400 to-yellow-300',
  low: 'from-emerald-400 to-cyan-glow',
}

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative mx-auto w-full max-w-5xl"
      style={{ perspective: '1400px' }}
    >
      {/* ambient glow behind panel */}
      <div className="absolute -inset-6 md:-inset-10 rounded-[2rem] bg-gradient-to-br from-violet-glow/25 via-transparent to-cyan-glow/20 blur-3xl -z-10" />

      <div className="glass-card relative overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-xs font-mono text-slate-500">finpilot.app/overview</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/[0.06]">
          {/* Left: fee collection trend */}
          <div className="lg:col-span-3 backdrop-blur-xl p-5 md:p-7 bg-[#100F17]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Fee Collection Trend</p>
                <p className="text-2xl font-display font-semibold text-white mt-1">
                  ₹4.82Cr <span className="text-emerald-400 text-sm font-body font-medium">+12.4%</span>
                </p>
              </div>
              <TrendingUp className="h-5 w-5 text-cyan-glow" />
            </div>

            <svg viewBox="0 0 400 140" className="w-full h-32 md:h-40 overflow-visible">
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C5CFF" />
                  <stop offset="100%" stopColor="#3FE0D0" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 L40,92 L80,98 L120,70 L160,78 L200,50 L240,58 L280,32 L320,40 L360,18 L400,24 L400,140 L0,140 Z"
                fill="url(#areaFill)"
              />
              <motion.path
                d="M0,100 L40,92 L80,98 L120,70 L160,78 L200,50 L240,58 L280,32 L320,40 L360,18 L400,24"
                fill="none"
                stroke="url(#lineStroke)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.4 }}
              />
            </svg>

            <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-cyan-glow/20 bg-cyan-glow/[0.06] px-4 py-3">
              <Bot className="h-4 w-4 text-cyan-glow shrink-0" />
              <p className="text-xs text-slate-300 leading-relaxed">
                <span className="text-cyan-glow font-medium">Copilot:</span> 3 accounts show early default
                signals — recommend sending reminders before the 28th.
              </p>
            </div>
          </div>

          {/* Right: risk list */}
          <div className="lg:col-span-2 p-5 md:p-7 bg-[#0E0D14]">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Fee Default Risk</p>
              <AlertTriangle className="h-4 w-4 text-amber-400" />
            </div>

            <div className="flex flex-col gap-4">
              {riskRows.map((row, i) => (
                <div key={row.grade}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-300">{row.grade}</span>
                    <span className="text-slate-400 font-mono">{row.risk}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${toneMap[row.tone]}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.risk}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Model confidence <span className="text-emerald-400 font-medium">96.2%</span> · explanation
                trace attached
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
