import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 border-b border-slate-800 bg-[#0F172A] flex items-center justify-between px-8">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-1">
          Welcome back 👋 Here's your school's financial overview.
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center bg-slate-800 rounded-xl px-4 py-3 w-80">
          <Search className="text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 text-white w-full"
          />
        </div>

        <button className="relative p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
          <Bell className="text-white" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-xl">
          <UserCircle className="text-cyan-400" size={35} />
          <div>
            <p className="text-white font-semibold">
              Admin
            </p>
            <p className="text-slate-400 text-sm">
              Principal
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}