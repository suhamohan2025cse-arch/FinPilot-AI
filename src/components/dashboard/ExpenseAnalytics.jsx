import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Wallet } from "lucide-react";

const data = [
  { name: "Salary", value: 45 },
  { name: "Transport", value: 18 },
  { name: "Infrastructure", value: 22 },
  { name: "Utilities", value: 10 },
  { name: "Others", value: 5 },
];

const COLORS = [
  "#3B82F6",
  "#06B6D4",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

export default function ExpenseAnalytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-[#0F172A] border border-slate-800 p-6 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Expense Analytics
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            School expenditure distribution
          </p>
        </div>

        <Wallet className="text-cyan-400" size={28}/>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <div style={{ width: "100%", height: 280 }}>
          <ResponsiveContainer>
            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">

          {data.map((item, index) => (

            <div
              key={item.name}
              className="rounded-xl bg-slate-900 border border-slate-800 p-4 flex justify-between items-center"
            >

              <div className="flex items-center gap-3">

                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: COLORS[index],
                  }}
                />

                <div>

                  <p className="text-white font-medium">
                    {item.name}
                  </p>

                  <p className="text-slate-500 text-sm">
                    Expense Category
                  </p>

                </div>

              </div>

              <div className="text-cyan-400 font-bold">
                {item.value}%
              </div>

            </div>

          ))}

          <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-4">

            <h3 className="text-cyan-400 font-semibold">
              AI Recommendation
            </h3>

            <p className="text-slate-300 text-sm mt-2 leading-6">
              Transport expenses increased by <b>8%</b>.
              Optimizing bus routes could save approximately
              <span className="text-cyan-400 font-semibold">
                {" "}₹4.5 Lakhs
              </span>
              annually.
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}