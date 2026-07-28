import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import {
  Brain,
  Search,
  ShieldAlert,
  Users,
  Download,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const chartData = [
  { name: "Low Risk", value: 45 },
  { name: "Medium Risk", value: 35 },
  { name: "High Risk", value: 20 },
];



export default function FeePrediction() {
  const [search, setSearch] = useState("");
const [students, setStudents] = useState([]);

useEffect(() => {
  loadPredictions();
}, []);

const loadPredictions = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/predictions");

    const formatted = res.data.predictions.map((item) => ({
      id: item.studentId,
      name: item.name,
      class: item.className,
      risk: item.risk,
      probability: item.probability + "%",
      confidence: "96%",
    }));

    setStudents(formatted);
  } catch (err) {
    console.error(err);
  }
};

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#020817]">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <Topbar />

        <main className="p-8 space-y-8">
                    {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-white">
                AI Fee Prediction
              </h1>

              <p className="text-slate-400 mt-2">
                Predict future fee defaults using AI-powered risk analysis.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl text-white font-semibold transition">
              <Download size={18} />
              Download Report
            </button>
          </div>

          {/* Summary Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6">
              <ShieldAlert className="text-red-400 mb-4" size={32} />

              <p className="text-slate-400">
                High Risk Students
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                18
              </h2>

              <p className="text-red-400 mt-2">
                Immediate attention required
              </p>
            </div>

            <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6">
              <Users className="text-cyan-400 mb-4" size={32} />

              <p className="text-slate-400">
                Total Students
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                250
              </h2>

              <p className="text-cyan-400 mt-2">
                AI analysed
              </p>
            </div>

            <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6">
              <Brain className="text-green-400 mb-4" size={32} />

              <p className="text-slate-400">
                Model Accuracy
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                96.8%
              </h2>

              <p className="text-green-400 mt-2">
                Excellent confidence
              </p>
            </div>

            <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6">
              <Brain className="text-yellow-400 mb-4" size={32} />

              <p className="text-slate-400">
                Predictions Today
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                250
              </h2>

              <p className="text-yellow-400 mt-2">
                Live AI Analysis
              </p>
            </div>

          </div>

          {/* Chart + AI */}

          <div className="grid lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 bg-[#0F172A] border border-slate-800 rounded-3xl p-6">

              <h2 className="text-2xl font-bold text-white mb-6">
                Student Risk Distribution
              </h2>

              <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={chartData}
                      dataKey="value"
                      outerRadius={120}
                      label
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </div>

            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6">

              <h2 className="text-2xl font-bold text-white mb-6">
                AI Recommendation
              </h2>

              <div className="space-y-4 text-slate-300">

                <div className="bg-slate-900 rounded-xl p-4">
                  ✅ Notify all High Risk parents immediately.
                </div>

                <div className="bg-slate-900 rounded-xl p-4">
                  💳 Offer EMI payment option.
                </div>

                <div className="bg-slate-900 rounded-xl p-4">
                  📈 Monitor attendance along with fee behaviour.
                </div>

                <div className="bg-slate-900 rounded-xl p-4">
                  🤖 AI confidence remains above 95%.
                </div>

              </div>

            </div>

          </div>

          {/* Search */}

          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5">

            <div className="relative">

              <Search
                size={20}
                className="absolute left-4 top-4 text-slate-500"
              />

              <input
                type="text"
                placeholder="Search student..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="w-full bg-[#111827] border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-500"
              />

            </div>

          </div>
                    {/* Students Table */}

          <div className="bg-[#0F172A] border border-slate-800 rounded-3xl overflow-hidden">

            <div className="px-6 py-5 border-b border-slate-800">
              <h2 className="text-2xl font-bold text-white">
                AI Prediction Results
              </h2>

              <p className="text-slate-400 mt-1">
                Students with predicted fee payment risk
              </p>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-[#111827]">

                  <tr className="text-slate-400 text-sm">

                    <th className="text-left px-6 py-4">Student</th>

                    <th className="text-left px-6 py-4">ID</th>

                    <th className="text-left px-6 py-4">Class</th>

                    <th className="text-left px-6 py-4">Risk</th>

                    <th className="text-left px-6 py-4">Probability</th>

                    <th className="text-left px-6 py-4">Confidence</th>

                  </tr>

                </thead>

                <tbody>

                  {filteredStudents.map((student) => (

                    <tr
                      key={student.id}
                      className="border-b border-slate-800 hover:bg-slate-900 transition"
                    >

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <img
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`}
                            alt={student.name}
                            className="w-10 h-10 rounded-full"
                          />

                          <span className="text-white font-medium">
                            {student.name}
                          </span>

                        </div>

                      </td>

                      <td className="px-6 text-slate-300">
                        {student.id}
                      </td>

                      <td className="px-6 text-slate-300">
                        {student.class}
                      </td>

                      <td className="px-6">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            student.risk === "High"
                              ? "bg-red-500/20 text-red-400"
                              : student.risk === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {student.risk}
                        </span>

                      </td>

                      <td className="px-6 text-cyan-400 font-semibold">
                        {student.probability}
                      </td>

                      <td className="px-6 text-green-400 font-semibold">
                        {student.confidence}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}