import {
  Clock3,
  Eye,
  Download,
} from "lucide-react";

const history = [
  {
    id: 1,
    student: "Rahul Sharma",
    date: "22 Jul 2026",
    score: "92%",
    risk: "High",
    status: "Action Required",
  },
  {
    id: 2,
    student: "Priya Menon",
    date: "21 Jul 2026",
    score: "78%",
    risk: "Medium",
    status: "Monitor",
  },
  {
    id: 3,
    student: "Arjun Kumar",
    date: "20 Jul 2026",
    score: "35%",
    risk: "Low",
    status: "Healthy",
  },
  {
    id: 4,
    student: "Aisha Khan",
    date: "18 Jul 2026",
    score: "88%",
    risk: "High",
    status: "Action Required",
  },
];

export default function PredictionHistory() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-8 py-6 border-b border-slate-200">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Prediction History
          </h2>

          <p className="text-slate-500 mt-1">
            Previously generated AI predictions
          </p>

        </div>

        <Clock3
          className="text-violet-600"
          size={28}
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr className="text-slate-600 text-sm">

              <th className="text-left px-6 py-4">
                Student
              </th>

              <th className="text-left px-6 py-4">
                Date
              </th>

              <th className="text-left px-6 py-4">
                AI Score
              </th>

              <th className="text-left px-6 py-4">
                Risk
              </th>

              <th className="text-left px-6 py-4">
                Status
              </th>

              <th className="text-center px-6 py-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition"
              >

                <td className="px-6 py-5 font-semibold text-slate-800">
                  {item.student}
                </td>

                <td className="px-6 text-slate-500">
                  {item.date}
                </td>

                <td className="px-6">

                  <span className="font-bold text-violet-700">
                    {item.score}
                  </span>

                </td>

                <td className="px-6">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.risk === "High"
                        ? "bg-red-100 text-red-600"
                        : item.risk === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {item.risk}
                  </span>

                </td>

                <td className="px-6 text-slate-600">
                  {item.status}
                </td>

                <td className="px-6">

                  <div className="flex justify-center gap-3">

                    <button className="p-2 rounded-xl bg-blue-100 hover:bg-blue-200 transition">

                      <Eye
                        size={18}
                        className="text-blue-700"
                      />

                    </button>

                    <button className="p-2 rounded-xl bg-emerald-100 hover:bg-emerald-200 transition">

                      <Download
                        size={18}
                        className="text-emerald-700"
                      />

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