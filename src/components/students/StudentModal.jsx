import {
  X,
  BrainCircuit,
  User,
  GraduationCap,
  IndianRupee,
  CalendarDays,
} from "lucide-react";

export default function StudentModal({ student, onClose }) {
  if (!student) return null;

  const riskColor = {
    Low: "text-green-400",
    Medium: "text-yellow-400",
    High: "text-red-400",
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">

      <div className="bg-[#0F172A] border border-slate-700 rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="flex justify-between items-center border-b border-slate-800 px-8 py-6">

          <div className="flex items-center gap-5">

            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`}
              alt={student.name}
              className="w-20 h-20 rounded-full"
            />

            <div>

              <h1 className="text-3xl font-bold text-white">
                {student.name}
              </h1>

              <p className="text-slate-400 mt-1">
                {student.admission}
              </p>

              <p className={`mt-2 font-semibold ${riskColor[student.risk]}`}>
                AI Risk : {student.risk}
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 p-3 rounded-xl"
          >
            <X className="text-white" />
          </button>

        </div>

        {/* Body */}

        <div className="grid lg:grid-cols-3 gap-6 p-8">

          {/* Left */}

          <div className="space-y-5">

            <div className="bg-slate-900 rounded-2xl p-5">

              <User className="text-cyan-400 mb-3" />

              <p className="text-slate-400">
                Attendance
              </p>

              <h2 className="text-3xl text-white font-bold mt-2">
                {student.attendance}
              </h2>

            </div>

            <div className="bg-slate-900 rounded-2xl p-5">

              <GraduationCap className="text-purple-400 mb-3" />

              <p className="text-slate-400">
                Grade
              </p>

              <h2 className="text-2xl text-white font-bold mt-2">
                {student.grade}
              </h2>

            </div>

            <div className="bg-slate-900 rounded-2xl p-5">

              <IndianRupee className="text-green-400 mb-3" />

              <p className="text-slate-400">
                Pending Fee
              </p>

              <h2 className="text-2xl text-white font-bold mt-2">
                {student.pending}
              </h2>

            </div>

          </div>

          {/* Center */}

          <div className="bg-slate-900 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <CalendarDays className="text-cyan-400" />

              <h2 className="text-xl font-bold text-white">
                Fee History
              </h2>

            </div>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-slate-300">January</span>
                <span className="text-green-400">Paid</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-300">February</span>
                <span className="text-green-400">Paid</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-300">March</span>
                <span className="text-red-400">Pending</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-300">April</span>
                <span className="text-green-400">Paid</span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-slate-900 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <BrainCircuit className="text-cyan-400" />

              <h2 className="text-xl font-bold text-white">
                AI Recommendation
              </h2>

            </div>

            <ul className="space-y-4 text-slate-300">

              <li>✅ Attendance has dropped recently.</li>

              <li>✅ Parent payment history indicates possible delay.</li>

              <li>✅ Send fee reminder notification.</li>

              <li>✅ Offer EMI payment option.</li>

              <li>✅ Schedule parent counselling.</li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}