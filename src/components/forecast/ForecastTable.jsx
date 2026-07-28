import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const forecastData = [
  {
    month: "August",
    revenue: "₹24,50,000",
    expense: "₹16,80,000",
    profit: "₹7,70,000",
    confidence: "96%",
    growth: "Positive",
  },
  {
    month: "September",
    revenue: "₹26,20,000",
    expense: "₹17,10,000",
    profit: "₹9,10,000",
    confidence: "95%",
    growth: "Positive",
  },
  {
    month: "October",
    revenue: "₹27,80,000",
    expense: "₹18,40,000",
    profit: "₹9,40,000",
    confidence: "94%",
    growth: "Positive",
  },
  {
    month: "November",
    revenue: "₹23,60,000",
    expense: "₹18,00,000",
    profit: "₹5,60,000",
    confidence: "89%",
    growth: "Moderate",
  },
];

export default function ForecastTable() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl overflow-hidden">

      <div className="px-8 py-6 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">
          Monthly Forecast
        </h2>

        <p className="text-slate-400 mt-2">
          AI estimated financial forecast for upcoming months.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#111827]">

            <tr>

              <th className="px-6 py-4 text-left text-slate-400">
                Month
              </th>

              <th className="px-6 py-4 text-left text-slate-400">
                Revenue
              </th>

              <th className="px-6 py-4 text-left text-slate-400">
                Expense
              </th>

              <th className="px-6 py-4 text-left text-slate-400">
                Profit
              </th>

              <th className="px-6 py-4 text-left text-slate-400">
                AI Confidence
              </th>

              <th className="px-6 py-4 text-center text-slate-400">
                Trend
              </th>

            </tr>

          </thead>

          <tbody>

            {forecastData.map((item, index) => (

              <tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-900 transition"
              >

                <td className="px-6 py-5 font-semibold text-white">
                  {item.month}
                </td>

                <td className="px-6 font-semibold text-cyan-400">
                  {item.revenue}
                </td>

                <td className="px-6 font-semibold text-red-400">
                  {item.expense}
                </td>

                <td className="px-6 font-bold text-green-400">
                  {item.profit}
                </td>

                <td className="px-6">

                  <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 font-semibold text-sm">
                    {item.confidence}
                  </span>

                </td>

                <td className="px-6">

                  <div className="flex justify-center">

                    {item.growth === "Positive" ? (

                      <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">

                        <TrendingUp size={16} />

                        Positive

                      </div>

                    ) : (

                      <div className="flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">

                        <TrendingDown size={16} />

                        Moderate

                      </div>

                    )}

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}