import {
  BrainCircuit,
  TrendingUp,
  TriangleAlert,
  BadgeCheck,
} from "lucide-react";

import RiskGauge from "./RiskGauge";
import RecommendationCard from "./RecommendationCard";

export default function PredictionResult() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white">

        <div className="flex items-center gap-3">

          <BrainCircuit size={30} />

          <div>

            <h2 className="text-2xl font-bold">
              AI Prediction Result
            </h2>

            <p className="text-violet-100 mt-1">
              Powered by FinPilot AI
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-8 space-y-8">

        {/* Risk Gauge */}

        <RiskGauge />

        {/* Risk Score */}

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-red-50 rounded-2xl p-5">

            <div className="flex items-center gap-2 mb-3">

              <TriangleAlert
                className="text-red-500"
                size={20}
              />

              <h3 className="font-semibold text-slate-700">
                Risk Level
              </h3>

            </div>

            <h1 className="text-4xl font-bold text-red-600">
              HIGH
            </h1>

            <p className="text-slate-500 mt-2">
              92% probability
            </p>

          </div>

          <div className="bg-blue-50 rounded-2xl p-5">

            <div className="flex items-center gap-2 mb-3">

              <TrendingUp
                className="text-blue-600"
                size={20}
              />

              <h3 className="font-semibold text-slate-700">
                Expected Delay
              </h3>

            </div>

            <h1 className="text-4xl font-bold text-blue-700">
              18 Days
            </h1>

            <p className="text-slate-500 mt-2">
              Estimated by AI
            </p>

          </div>

        </div>

        {/* AI Explanation */}

        <div className="bg-slate-50 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">

            <BadgeCheck
              className="text-violet-600"
              size={24}
            />

            <h3 className="text-xl font-bold text-slate-800">
              AI Explanation
            </h3>

          </div>

          <ul className="space-y-3 text-slate-600">

            <li>
              • Attendance is below the required threshold.
            </li>

            <li>
              • Parent payment history shows previous delays.
            </li>

            <li>
              • Current pending fee is significantly high.
            </li>

            <li>
              • AI predicts a high chance of late payment.
            </li>

          </ul>

        </div>

        {/* Recommendation */}

        <RecommendationCard />

      </div>

    </div>
  );
}