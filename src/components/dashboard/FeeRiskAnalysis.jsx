import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, TrendingUp } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    class: "Grade 10 • A",
    risk: 94,
    confidence: 97,
    level: "High",
  },
  {
    id: 2,
    name: "Priya Menon",
    class: "Grade 8 • C",
    risk: 71,
    confidence: 91,
    level: "Medium",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    class: "Grade 9 • B",
    risk: 32,
    confidence: 95,
    level: "Low",
  },
  {
    id: 4,
    name: "Sneha Raj",
    class: "Grade 11 • A",
    risk: 87,
    confidence: 96,
    level: "High",
  },
];

function badge(level) {
  switch (level) {
    case "High":
      return "bg-red-500/10 text-red-400 border-red-500/30";
    case "Medium":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
    default:
      return "bg-green-500/10 text-green-400 border-green-500/30";
  }
}

function bar(level) {
  switch (level) {
    case "High":
      return "from-red-500 to-orange-500";
    case "Medium":
      return "from-yellow-400 to-amber-500";
    default:
      return "from-green-400 to-cyan-500";
  }
}

export default function FeeRiskAnalysis() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-[#0F172A] shadow-2xl">

      <div className="flex items-center justify-between border-b border-slate-800 p-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Fee Default Risk
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Students predicted to delay fee payments
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-2">
          <ShieldCheck className="text-cyan-400" size={18}/>
          <span className="text-cyan-400 text-sm font-medium">
            AI Accuracy 96.8%
          </span>
        </div>

      </div>

      <div className="p-6 space-y-6">

        {students.map((student) => (

          <motion.div
            key={student.id}
            whileHover={{ scale: 1.01 }}
            className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>

                  <h3 className="text-white font-semibold">
                    {student.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {student.class}
                  </p>

                </div>

              </div>

              <span
                className={`border px-3 py-1 rounded-full text-xs font-semibold ${badge(
                  student.level
                )}`}
              >
                {student.level} Risk
              </span>

            </div>

            <div className="mt-5">

              <div className="flex justify-between text-sm mb-2">

                <span className="text-slate-400">
                  Risk Score
                </span>

                <span className="text-white font-semibold">
                  {student.risk}%
                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${student.risk}%` }}
                  transition={{ duration: 1 }}
                  className={`h-full bg-gradient-to-r ${bar(student.level)}`}
                />

              </div>

            </div>

            <div className="mt-5 flex justify-between items-center">

              <div className="flex items-center gap-2 text-green-400 text-sm">

                <TrendingUp size={16} />

                AI Confidence {student.confidence}%

              </div>

              <div className="flex items-center gap-2 text-yellow-400 text-sm">

                <AlertTriangle size={16} />

                Needs Attention

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}