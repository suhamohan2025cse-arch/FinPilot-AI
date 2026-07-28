import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import RevenueChart from "../components/dashboard/RevenueChart";
import RecentTransactions from "../components/dashboard/RecentTransactions";

import {
  FileSpreadsheet,
  Download,
  TrendingUp,
  Wallet,
  CircleDollarSign,
} from "lucide-react";

export default function Reports() {
  return (
    <div className="flex min-h-screen bg-[#020817]">

      <Sidebar />

      <div className="flex-1 overflow-auto">

        <Topbar />

        <main className="p-8 space-y-8">

          {/* Header */}

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-bold text-white">
                Financial Reports
              </h1>

              <p className="text-slate-400 mt-2">
                Monitor revenue, expenses and AI-generated financial insights.
              </p>

            </div>

            <div className="flex gap-4">

              <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0F172A] border border-slate-700 hover:border-cyan-500 text-white transition">

                <Download size={18} />

                Export PDF

              </button>

              <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white transition">

                <FileSpreadsheet size={18} />

                Export Excel

              </button>

            </div>

          </div>

          {/* KPI Cards */}

          <div className="grid lg:grid-cols-3 gap-6">

            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-6 hover:-translate-y-1 transition">

              <Wallet
                className="text-cyan-400 mb-4"
                size={35}
              />

              <p className="text-slate-400">
                Total Revenue
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                ₹1.28 Cr
              </h2>

            </div>

            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-6 hover:-translate-y-1 transition">

              <TrendingUp
                className="text-green-400 mb-4"
                size={35}
              />

              <p className="text-slate-400">
                Collection Growth
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                +12.4%
              </h2>

            </div>

            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-6 hover:-translate-y-1 transition">

              <CircleDollarSign
                className="text-violet-400 mb-4"
                size={35}
              />

              <p className="text-slate-400">
                Pending Fees
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                ₹18.5 L
              </h2>

            </div>

          </div>

          {/* Revenue Chart */}

          <RevenueChart />

          {/* Recent Transactions */}

          <RecentTransactions />

        </main>

      </div>

    </div>
  );
}