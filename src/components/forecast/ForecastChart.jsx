import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", revenue: 90, expense: 62, profit: 28 },
  { month: "Feb", revenue: 102, expense: 65, profit: 37 },
  { month: "Mar", revenue: 118, expense: 72, profit: 46 },
  { month: "Apr", revenue: 128, expense: 80, profit: 48 },
  { month: "May", revenue: 142, expense: 88, profit: 54 },
  { month: "Jun", revenue: 156, expense: 95, profit: 61 },
  { month: "Jul", revenue: 170, expense: 101, profit: 69 },
  { month: "Aug", revenue: 182, expense: 110, profit: 72 },
];

export default function ForecastChart() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          AI Budget Forecast
        </h2>

        <p className="text-slate-400 mt-2">
          Revenue, expenses and expected profit over the coming months.
        </p>

      </div>

      <div className="h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>

            </defs>

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
              labelStyle={{ color: "#fff" }}
            />

            <Legend
              wrapperStyle={{
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#06B6D4"
              fill="url(#revenue)"
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="expense"
              stroke="#EF4444"
              fill="url(#expense)"
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="profit"
              stroke="#22C55E"
              fill="url(#profit)"
              strokeWidth={3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}