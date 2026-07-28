import {
  BrainCircuit,
  TrendingUp,
  TriangleAlert,
  Lightbulb,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

export default function AISummary() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl overflow-hidden h-full">

      {/* Header */}

      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 px-6 py-5">

        <div className="flex items-center gap-3">

          <BrainCircuit className="text-white" size={30} />

          <div>

            <h2 className="text-2xl font-bold text-white">
              AI Financial Summary
            </h2>

            <p className="text-cyan-100 mt-1">
              FinPilot AI Insights
            </p>

          </div>

        </div>

      </div>

      {/* Confidence */}

      <div className="p-6">

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-400">
                Prediction Confidence
              </p>

              <h1 className="text-4xl font-bold text-cyan-400 mt-2">
                96%
              </h1>

            </div>

            <Sparkles
              className="text-cyan-400"
              size={42}
            />

          </div>

        </div>

      </div>

      {/* AI Cards */}

      <div className="px-6 pb-6 space-y-4">

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex gap-4">

          <TrendingUp
            className="text-green-400 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              Revenue Insight
            </h3>

            <p className="text-slate-400 mt-1">
              AI predicts nearly a 12% increase in fee collection over the next
              quarter based on historical payment trends.
            </p>

          </div>

        </div>

        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex gap-4">

          <TriangleAlert
            className="text-red-400 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              Risk Alert
            </h3>

            <p className="text-slate-400 mt-1">
              Grades 10 and 12 have the highest probability of delayed fee
              payments this academic term.
            </p>

          </div>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 flex gap-4">

          <Lightbulb
            className="text-cyan-400 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              Recommendation
            </h3>

            <p className="text-slate-400 mt-1">
              Send automated reminders 7 days before the due date and provide
              EMI options for high-risk parents to improve collections.
            </p>

          </div>

        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 flex gap-4">

          <BadgeCheck
            className="text-emerald-400 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              AI Decision
            </h3>

            <p className="text-slate-400 mt-1">
              Overall financial health is stable with a strong positive outlook.
              Current projections indicate healthy cash flow for upcoming months.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}