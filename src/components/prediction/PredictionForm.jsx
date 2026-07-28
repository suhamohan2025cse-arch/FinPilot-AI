import { BrainCircuit, Sparkles } from "lucide-react";

export default function PredictionForm() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between px-8 py-6 border-b border-slate-200">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            AI Fee Prediction
          </h2>

          <p className="text-slate-500 mt-2">
            Predict students who are likely to delay fee payments.
          </p>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center">

          <BrainCircuit
            className="text-violet-600"
            size={28}
          />

        </div>

      </div>

      {/* Form */}

      <div className="p-8 grid md:grid-cols-2 gap-6">

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Student Name
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500">

            <option>Rahul Sharma</option>
            <option>Priya Menon</option>
            <option>Aisha Khan</option>
            <option>Arjun Kumar</option>

          </select>

        </div>

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Attendance (%)
          </label>

          <input
            type="number"
            placeholder="85"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

        </div>

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Pending Fee
          </label>

          <input
            type="number"
            placeholder="15000"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

        </div>

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Parent Monthly Income
          </label>

          <input
            type="number"
            placeholder="45000"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

        </div>

      </div>

      {/* Button */}

      <div className="px-8 pb-8">

        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold text-lg shadow-lg transition duration-300 flex justify-center items-center gap-3">

          <Sparkles size={20} />

          Generate AI Prediction

        </button>

      </div>

    </div>
  );
}