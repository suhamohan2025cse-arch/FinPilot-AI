import { motion } from "framer-motion";
import {
  Search,
  Plus,
  ChevronDown,
} from "lucide-react";

export default function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-800 bg-[#0F172A] p-6 shadow-xl"
    >
      <div className="flex flex-col xl:flex-row gap-4 justify-between">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search by student name, ID or class..."
            className="w-full bg-[#020817] border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none transition"
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 bg-[#020817] border border-slate-700 px-5 py-3 rounded-xl text-slate-300 hover:border-cyan-500 transition">
            Grade
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-2 bg-[#020817] border border-slate-700 px-5 py-3 rounded-xl text-slate-300 hover:border-cyan-500 transition">
            Fee Status
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-2 bg-[#020817] border border-slate-700 px-5 py-3 rounded-xl text-slate-300 hover:border-cyan-500 transition">
            AI Risk
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl text-white font-semibold">
            <Plus size={18} />
            Add Student
          </button>

        </div>

      </div>
    </motion.div>
  );
}