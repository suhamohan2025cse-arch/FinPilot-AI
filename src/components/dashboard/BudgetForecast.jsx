import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const forecast = [
  {
    month: "August",
    income: "₹52 L",
    expense: "₹38 L",
    profit: "₹14 L",
    growth: "+9%",
  },
  {
    month: "September",
    income: "₹56 L",
    expense: "₹39 L",
    profit: "₹17 L",
    growth: "+13%",
  },
  {
    month: "October",
    income: "₹61 L",
    expense: "₹41 L",
    profit: "₹20 L",
    growth: "+16%",
  },
];

export default function BudgetForecast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-slate-800 bg-[#0F172A] shadow-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Budget Forecast
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Predicted financial performance
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-2">
          <Wallet className="text-cyan-400" size={18}/>
          <span className="text-cyan-400 text-sm">
            Next 3 Months
          </span>
        </div>
      </div>

      <div className="space-y-5">

        {forecast.map((item) => (

          <motion.div
            key={item.month}
            whileHover={{ scale: 1.01 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-white text-lg font-semibold">
                  {item.month}
                </h3>

                <p className="text-slate-400 text-sm">
                  Predicted Budget
                </p>

              </div>

              <div className="text-green-400 flex items-center gap-1">
                <TrendingUp size={18}/>
                {item.growth}
              </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">

              <div className="rounded-xl bg-slate-800 p-4">

                <p className="text-slate-400 text-sm">
                  Income
                </p>

                <h3 className="text-green-400 text-xl font-bold mt-2">
                  {item.income}
                </h3>

              </div>

              <div className="rounded-xl bg-slate-800 p-4">

                <p className="text-slate-400 text-sm">
                  Expense
                </p>

                <h3 className="text-red-400 text-xl font-bold mt-2 flex items-center gap-2">
                  <TrendingDown size={18}/>
                  {item.expense}
                </h3>

              </div>

              <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-4">

                <p className="text-slate-300 text-sm">
                  Profit
                </p>

                <h3 className="text-cyan-400 text-xl font-bold mt-2">
                  {item.profit}
                </h3>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
    </motion.div>
  );
}