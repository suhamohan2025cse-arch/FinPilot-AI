import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

const insights = [
  {
    title: "Fee Risk Alert",
    description:
      "47 students are predicted to delay fee payments this month. Early reminders are recommended.",
    icon: AlertTriangle,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    title: "Budget Optimization",
    description:
      "Reducing transport expenses by 8% can improve the projected annual surplus by ₹3.2 Lakhs.",
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    title: "AI Recommendation",
    description:
      "Schedule automated payment reminders 5 days before the due date to improve collection efficiency.",
    icon: Sparkles,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

export default function AIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-800 bg-[#0F172A] p-6 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BrainCircuit className="text-cyan-400" size={28} />
          <div>
            <h2 className="text-xl font-bold text-white">
              FinPilot AI Insights
            </h2>
            <p className="text-sm text-slate-400">
              AI-generated financial recommendations
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
          <p className="text-xs text-cyan-300">Confidence</p>
          <h3 className="text-lg font-bold text-white">96.2%</h3>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`rounded-2xl border ${item.border} ${item.bg} p-5`}
            >
              <div className="flex gap-4">
                <div
                  className={`h-11 w-11 rounded-xl flex items-center justify-center bg-[#111827]`}
                >
                  <Icon className={item.color} size={22} />
                </div>

                <div>
                  <h3 className={`font-semibold ${item.color}`}>
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}