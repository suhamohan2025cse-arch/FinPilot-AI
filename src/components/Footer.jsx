import { Sparkles, Linkedin, Twitter, Github } from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: ['Fee Risk Prediction', 'Budget Forecasting', 'Anomaly Detection', 'AI Copilot'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Security', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Case Studies', 'Support'],
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/[0.06] pt-16 pb-8">
      <div className="section-padding">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-3">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-glow to-cyan-glow shadow-glow">
                <Sparkles className="h-4 w-4 text-white" strokeWidth={2.25} />
              </span>
              <span className="font-display text-[1.05rem] font-semibold text-white">
                FinPilot <span className="text-slate-400 font-normal">AI</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
              The financial co-pilot built for school administrators — predictions you can explain
              to a board.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#footer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass text-slate-400 hover:text-white hover:bg-white/[0.07] transition-colors duration-200"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-1">
              <p className="text-sm font-semibold text-white mb-4">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#footer"
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} FinPilot AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <a href="#footer" className="hover:text-slate-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#footer" className="hover:text-slate-300 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
