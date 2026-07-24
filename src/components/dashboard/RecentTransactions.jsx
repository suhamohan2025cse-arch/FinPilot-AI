import { motion } from "framer-motion";
import { CheckCircle2, Clock3 } from "lucide-react";

const transactions = [
  {
    student: "Arjun Kumar",
    grade: "Grade 10 - A",
    amount: "₹45,000",
    date: "24 Jul 2026",
    status: "Paid",
  },
  {
    student: "Priya Sharma",
    grade: "Grade 8 - C",
    amount: "₹38,500",
    date: "23 Jul 2026",
    status: "Pending",
  },
  {
    student: "Rahul Verma",
    grade: "Grade 12 - B",
    amount: "₹52,000",
    date: "22 Jul 2026",
    status: "Paid",
  },
  {
    student: "Meera Nair",
    grade: "Grade 7 - A",
    amount: "₹34,000",
    date: "21 Jul 2026",
    status: "Paid",
  },
  {
    student: "Aditya Singh",
    grade: "Grade 9 - D",
    amount: "₹41,000",
    date: "20 Jul 2026",
    status: "Pending",
  },
];

export default function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-800 bg-[#0F172A] p-6 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            Recent Fee Transactions
          </h2>
          <p className="text-sm text-slate-400">
            Latest payment activity across the school
          </p>
        </div>

        <button className="text-sm text-cyan-400 hover:text-cyan-300 transition">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="text-left py-3 text-slate-400 font-medium">Student</th>
              <th className="text-left py-3 text-slate-400 font-medium">Class</th>
              <th className="text-left py-3 text-slate-400 font-medium">Amount</th>
              <th className="text-left py-3 text-slate-400 font-medium">Date</th>
              <th className="text-left py-3 text-slate-400 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.08 }}
                className="border-b border-slate-800 hover:bg-slate-800/30 transition"
              >
                <td className="py-4 text-white font-medium">
                  {item.student}
                </td>

                <td className="py-4 text-slate-300">
                  {item.grade}
                </td>

                <td className="py-4 text-cyan-400 font-semibold">
                  {item.amount}
                </td>

                <td className="py-4 text-slate-400">
                  {item.date}
                </td>

                <td className="py-4">
                  {item.status === "Paid" ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-medium text-emerald-400">
                      <CheckCircle2 size={14} />
                      Paid
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-3 py-1 text-xs font-medium text-orange-400">
                      <Clock3 size={14} />
                      Pending
                    </span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}