import {
  BrainCircuit,
  ShieldAlert,
  BadgeCheck,
  PiggyBank,
  Sparkles,
} from "lucide-react";

export default function AIExpenseAnalysis() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl overflow-hidden h-full">

      {/* Header */}

      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 px-6 py-5">

        <div className="flex items-center gap-3">

          <BrainCircuit
            className="text-white"
            size={30}
          />

          <div>

            <h2 className="text-2xl font-bold text-white">
              AI Expense Analysis
            </h2>

            <p className="text-red-100 mt-1">
              Intelligent Financial Monitoring
            </p>

          </div>

        </div>

      </div>

      {/* AI Score */}

      <div className="p-6">

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-400">
                Expense Risk Score
              </p>

              <h1 className="text-5xl font-bold text-red-400 mt-2">
                87%
              </h1>

            </div>

            <Sparkles
              className="text-red-400"
              size={42}
            />

          </div>

        </div>

      </div>

      {/* AI Cards */}

      <div className="px-6 pb-6 space-y-4">

        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex gap-4">

          <ShieldAlert
            className="text-red-400 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              High Risk Detected
            </h3>

            <p className="text-slate-400 mt-1">
              Three vendor payments are significantly above historical averages
              and require immediate verification.
            </p>

          </div>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 flex gap-4">

          <BrainCircuit
            className="text-yellow-400 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              AI Observation
            </h3>

            <p className="text-slate-400 mt-1">
              Maintenance expenses increased by 24% this month without a
              corresponding increase in school activity.
            </p>

          </div>

        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-4 flex gap-4">

          <PiggyBank
            className="text-cyan-400 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              Cost Optimization
            </h3>

            <p className="text-slate-400 mt-1">
              Consolidating stationery and transport vendors could reduce
              operational expenses by approximately ₹2.3 lakh annually.
            </p>

          </div>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex gap-4">

          <BadgeCheck
            className="text-green-400 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              AI Recommendation
            </h3>

            <p className="text-slate-400 mt-1">
              Enable automated approval for low-risk transactions and require
              manual approval only for expenses exceeding ₹1 lakh.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}