import { motion } from "framer-motion";
import {
  UserPlus,
  CreditCard,
  FileBarChart2,
  BellRing,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Add Student",
    description: "Register a new student",
    icon: UserPlus,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Fee Payment",
    description: "Record a payment",
    icon: CreditCard,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Generate Report",
    description: "Download AI reports",
    icon: FileBarChart2,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Send Reminder",
    description: "Notify pending parents",
    icon: BellRing,
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "AI Prediction",
    description: "View fee default risk",
    icon: BrainCircuit,
    color: "from-pink-500 to-rose-500",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-[#0F172A] p-6 shadow-2xl">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Quick Actions
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Frequently used operations
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.title}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="group cursor-pointer rounded-2xl border border-slate-700 bg-slate-900/70 p-5 hover:border-cyan-500/40 transition-all"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg`}
              >
                <Icon className="text-white" size={28} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {action.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition">
                Open
                <ArrowRight size={16} />
              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}