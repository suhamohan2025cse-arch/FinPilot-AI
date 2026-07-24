import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  { month: "Jan", revenue: 22 },
  { month: "Feb", revenue: 27 },
  { month: "Mar", revenue: 31 },
  { month: "Apr", revenue: 29 },
  { month: "May", revenue: 41 },
  { month: "Jun", revenue: 48 },
  { month: "Jul", revenue: 56 },
];

export default function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-slate-800 bg-[#0F172A] p-6 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-slate-400 text-sm">
            Monthly Fee Collection
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            ₹4.82 Cr
          </h2>

          <div className="flex items-center gap-2 mt-2 text-green-400 text-sm">
            <TrendingUp size={16} />
            +12.4% compared to last month
          </div>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl px-5 py-3">
          <p className="text-cyan-400 text-sm">
            AI Forecast
          </p>

          <h3 className="text-white font-bold text-xl">
            ₹5.18 Cr
          </h3>
        </div>
      </div>

      <div style={{ width: "100%", height: 340 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1E293B"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <YAxis stroke="#94A3B8" />

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #334155",
                borderRadius: "12px",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#gradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}