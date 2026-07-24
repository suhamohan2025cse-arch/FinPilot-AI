import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Rahul Sharma",
    class: "Grade 10 • A",
    amount: "₹45,000",
    date: "21 Jul 2026",
    status: "Paid",
  },
  {
    id: 2,
    name: "Priya Menon",
    class: "Grade 8 • C",
    amount: "₹32,500",
    date: "20 Jul 2026",
    status: "Paid",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    class: "Grade 9 • B",
    amount: "₹18,000",
    date: "Pending",
    status: "Pending",
  },
  {
    id: 4,
    name: "Sneha Raj",
    class: "Grade 11 • A",
    amount: "₹51,000",
    date: "18 Jul 2026",
    status: "Paid",
  },
  {
    id: 5,
    name: "Vivek Prasad",
    class: "Grade 7 • D",
    amount: "₹27,000",
    date: "Overdue",
    status: "Overdue",
  },
];

function Badge({ status }) {
  if (status === "Paid") {
    return (
      <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
        <CheckCircle2 size={14} />
        Paid
      </span>
    );
  }

  if (status === "Pending") {
    return (
      <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
        <Clock3 size={14} />
        Pending
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
      <AlertCircle size={14} />
      Overdue
    </span>
  );
}

export default function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-800 bg-[#0F172A] shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            Recent Transactions
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Latest fee payment activities
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 transition hover:bg-cyan-500/20">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="divide-y divide-slate-800">
        {transactions.map((student) => (
          <motion.div
            key={student.id}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between px-6 py-5 hover:bg-slate-800/40 transition"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold text-white">
                {student.name
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {student.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {student.class}
                </p>
              </div>
            </div>

            <div className="hidden text-center md:block">
              <p className="font-semibold text-white">
                {student.amount}
              </p>

              <p className="text-sm text-slate-500">
                {student.date}
              </p>
            </div>

            <Badge status={student.status} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}