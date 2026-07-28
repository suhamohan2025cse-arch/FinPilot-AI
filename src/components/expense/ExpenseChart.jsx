import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", salary: 7.5, maintenance: 2.8, transport: 1.2, other: 0.9 },
  { month: "Feb", salary: 7.7, maintenance: 2.5, transport: 1.4, other: 1.1 },
  { month: "Mar", salary: 7.8, maintenance: 2.9, transport: 1.3, other: 1.0 },
  { month: "Apr", salary: 8.0, maintenance: 3.1, transport: 1.6, other: 1.2 },
  { month: "May", salary: 8.2, maintenance: 3.0, transport: 1.7, other: 1.4 },
  { month: "Jun", salary: 8.4, maintenance: 3.2, transport: 1.8, other: 1.5 },
];

export default function ExpenseChart() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Expense Distribution
        </h2>

        <p className="text-slate-400 mt-2">
          Monthly breakdown of school expenses across different categories.
        </p>

      </div>

      <div className="h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94A3B8" }}
              axisLine={{ stroke: "#475569" }}
              tickLine={{ stroke: "#475569" }}
            />

            <YAxis
              tick={{ fill: "#94A3B8" }}
              axisLine={{ stroke: "#475569" }}
              tickLine={{ stroke: "#475569" }}
            />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
              labelStyle={{
                color: "#fff",
              }}
            />

            <Legend
              wrapperStyle={{
                color: "#fff",
              }}
            />

            <Bar
              dataKey="salary"
              fill="#06B6D4"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="maintenance"
              fill="#F97316"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="transport"
              fill="#22C55E"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="other"
              fill="#A855F7"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}