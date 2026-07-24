import { motion } from "framer-motion";
import {
  Users,
  IndianRupee,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "1,245",
    subtitle: "+32 this month",
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    title: "Fees Collected",
    value: "₹1.28 Cr",
    subtitle: "91.4% Collection",
    icon: IndianRupee,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    title: "Pending Fees",
    value: "158",
    subtitle: "Students",
    icon: AlertTriangle,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    title: "Low Risk",
    value: "82%",
    subtitle: "AI Prediction",
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function StudentStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            whileHover={{
              y: -6,
              transition: { duration: 0.2 },
            }}
            className="rounded-3xl border border-slate-800 bg-[#0F172A] p-6 shadow-xl"
          >
            <div className="flex justify-between items-start">

              <div>

                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-white mt-3">
                  {item.value}
                </h2>

                <p className={`text-sm mt-3 ${item.color}`}>
                  {item.subtitle}
                </p>

              </div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.border} border`}
              >
                <Icon
                  className={item.color}
                  size={28}
                />
              </div>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}