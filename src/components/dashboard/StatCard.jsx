import { TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  growth,
  icon: Icon,
}) {
  return (
    <div className="bg-[#111827] rounded-2xl p-6 border border-slate-800 hover:border-cyan-500 transition">

      <div className="flex justify-between">

        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl text-white font-bold mt-3">
            {value}
          </h2>

          <div className="flex items-center mt-4 text-green-400">
            <TrendingUp size={16} />
            <span className="ml-2">{growth}</span>
          </div>

        </div>

        <div className="bg-cyan-500/20 p-4 rounded-xl h-fit">
          <Icon className="text-cyan-400" />
        </div>

      </div>

    </div>
  );
}