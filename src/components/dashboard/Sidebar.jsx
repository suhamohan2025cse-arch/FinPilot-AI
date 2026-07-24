import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BrainCircuit,
  Wallet,
  TriangleAlert,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Students", icon: Users, path: "/students" },
  { name: "Fee Prediction", icon: BrainCircuit, path: "/prediction" },
  { name: "Budget Forecast", icon: Wallet, path: "/budget" },
  { name: "Expense Detection", icon: TriangleAlert, path: "/expense" },
  { name: "Reports", icon: FileText, path: "/reports" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-[#0B1120] border-r border-slate-800 flex flex-col">

      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white">
          FinPilot <span className="text-cyan-400">AI</span>
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Financial Intelligence Platform
        </p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-5 border-t border-slate-800">
        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-white font-semibold">
            FinPilot AI
          </p>

          <p className="text-slate-400 text-sm mt-2">
            AI Powered Financial Decision Intelligence
          </p>
        </div>
      </div>

    </aside>
  );
}