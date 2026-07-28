export default function ExpenseSummaryCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  const colors = {
    blue: {
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
    },
    green: {
      bg: "bg-green-500/20",
      text: "text-green-400",
    },
    red: {
      bg: "bg-red-500/20",
      text: "text-red-400",
    },
    purple: {
      bg: "bg-violet-500/20",
      text: "text-violet-400",
    },
  };

  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-6 hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-300">

      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors[color].bg}`}
      >
        <Icon
          size={28}
          className={colors[color].text}
        />
      </div>

      <h3 className="mt-6 text-slate-400 font-medium text-lg">
        {title}
      </h3>

      <h1 className="mt-3 text-4xl font-bold text-white">
        {value}
      </h1>

      <div className="mt-5 flex items-center gap-2">

        <span className="text-red-400 font-semibold">
          ▲ +4.8%
        </span>

        <span className="text-slate-500 text-sm">
          compared to last month
        </span>

      </div>

    </div>
  );
}