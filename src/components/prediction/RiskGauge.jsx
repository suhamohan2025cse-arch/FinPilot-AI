import { AlertTriangle } from "lucide-react";

export default function RiskGauge() {
  const percentage = 92;

  return (
    <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-2xl font-bold">
            AI Risk Score
          </h3>

          <p className="text-violet-100 mt-2">
            Generated using attendance, fee history and financial behaviour.
          </p>

        </div>

        <AlertTriangle
          size={38}
          className="text-red-300"
        />

      </div>

      <div className="flex justify-center mt-10">

        <div className="relative w-52 h-52">

          <svg
            className="w-52 h-52 -rotate-90"
            viewBox="0 0 200 200"
          >

            {/* Background Circle */}

            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="14"
            />

            {/* Progress */}

            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={502}
              strokeDashoffset={502 - (502 * percentage) / 100}
            />

          </svg>

          <div className="absolute inset-0 flex flex-col justify-center items-center">

            <h1 className="text-5xl font-bold">
              {percentage}%
            </h1>

            <span className="mt-2 text-violet-100">
              High Risk
            </span>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">

        <div className="bg-white/10 rounded-2xl p-4 text-center">

          <h2 className="text-3xl font-bold">
            81%
          </h2>

          <p className="text-sm text-violet-100 mt-1">
            Attendance
          </p>

        </div>

        <div className="bg-white/10 rounded-2xl p-4 text-center">

          <h2 className="text-3xl font-bold">
            ₹18K
          </h2>

          <p className="text-sm text-violet-100 mt-1">
            Pending Fee
          </p>

        </div>

        <div className="bg-white/10 rounded-2xl p-4 text-center">

          <h2 className="text-3xl font-bold">
            3
          </h2>

          <p className="text-sm text-violet-100 mt-1">
            Previous Delays
          </p>

        </div>

      </div>

    </div>
  );
}