import { Eye, Pencil } from "lucide-react";

export default function StudentRow({ student }) {
  const feeColor = {
    Paid: "bg-green-500/20 text-green-400",
    Partial: "bg-yellow-500/20 text-yellow-400",
    Pending: "bg-red-500/20 text-red-400",
  };

  const riskColor = {
    Low: "bg-green-500/20 text-green-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    High: "bg-red-500/20 text-red-400",
  };

  return (
    <tr className="border-t border-slate-800 hover:bg-slate-900 transition">

      <td className="px-6 py-5">

        <div className="flex items-center gap-4">

          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`}
            alt={student.name}
            className="w-11 h-11 rounded-full bg-slate-700"
          />

          <div>

            <h3 className="text-white font-semibold">
              {student.name}
            </h3>

          </div>

        </div>

      </td>

      <td className="px-6 text-slate-300">
        {student.admission}
      </td>

      <td className="px-6 text-slate-300">
        {student.grade}
      </td>

      <td className="px-6 text-cyan-400 font-semibold">
        {student.attendance}
      </td>

      <td className="px-6">

        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${feeColor[student.fee]}`}>
          {student.fee}
        </span>

      </td>

      <td className="px-6 text-white">
        {student.pending}
      </td>

      <td className="px-6">

        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${riskColor[student.risk]}`}>
          {student.risk}
        </span>

      </td>

      <td className="px-6">

        <div className="flex justify-center gap-3">

          <button className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30">
            <Eye size={18} className="text-cyan-400" />
          </button>

          <button className="p-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30">
            <Pencil size={18} className="text-amber-400" />
          </button>

        </div>

      </td>

    </tr>
  );
}