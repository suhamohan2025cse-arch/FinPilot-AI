import {
  Eye,
  ShieldAlert,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    vendor: "ABC Supplies",
    category: "Stationery",
    amount: "₹1,85,000",
    risk: "High",
    reason: "Amount 68% higher than average",
  },
  {
    id: 2,
    vendor: "Quick Transport",
    category: "Transport",
    amount: "₹92,000",
    risk: "Medium",
    reason: "Duplicate payment detected",
  },
  {
    id: 3,
    vendor: "Bright Technologies",
    category: "IT Equipment",
    amount: "₹3,40,000",
    risk: "High",
    reason: "Vendor payment unusually high",
  },
  {
    id: 4,
    vendor: "Green Foods",
    category: "Canteen",
    amount: "₹54,000",
    risk: "Low",
    reason: "Within normal spending",
  },
];

export default function SuspiciousTransactions() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl overflow-hidden">

      {/* Header */}

      <div className="px-8 py-6 border-b border-slate-800 flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Flagged Transactions
          </h2>

          <p className="text-slate-400 mt-2">
            Expenses identified by AI for further review.
          </p>

        </div>

        <ShieldAlert
          className="text-red-400"
          size={30}
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#111827]">

            <tr>

              <th className="px-6 py-4 text-left text-slate-400">
                Vendor
              </th>

              <th className="px-6 py-4 text-left text-slate-400">
                Category
              </th>

              <th className="px-6 py-4 text-left text-slate-400">
                Amount
              </th>

              <th className="px-6 py-4 text-left text-slate-400">
                AI Reason
              </th>

              <th className="px-6 py-4 text-center text-slate-400">
                Risk
              </th>

              <th className="px-6 py-4 text-center text-slate-400">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-800 hover:bg-slate-900 transition"
              >

                <td className="px-6 py-5 font-semibold text-white">
                  {item.vendor}
                </td>

                <td className="px-6 text-slate-300">
                  {item.category}
                </td>

                <td className="px-6 font-semibold text-cyan-400">
                  {item.amount}
                </td>

                <td className="px-6 text-slate-400">
                  {item.reason}
                </td>

                <td className="px-6">

                  <div className="flex justify-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.risk === "High"
                          ? "bg-red-500/20 text-red-400"
                          : item.risk === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.risk}
                    </span>

                  </div>

                </td>

                <td className="px-6">

                  <div className="flex justify-center">

                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white transition">

                      <Eye size={16} />

                      Review

                    </button>

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