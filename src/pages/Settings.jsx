import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import {
  User,
  Bell,
  ShieldCheck,
  Database,
  BrainCircuit,
  Save,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-[#020817]">

      <Sidebar />

      <div className="flex-1 overflow-auto">

        <Topbar />

        <main className="p-8 space-y-8">

          {/* Header */}

          <div>

            <h1 className="text-4xl font-bold text-white">
              Settings
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your FinPilot AI application preferences.
            </p>

          </div>

          {/* Profile */}

          <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <User className="text-cyan-400" />

              <h2 className="text-2xl font-bold text-white">
                Profile
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                placeholder="School Name"
                defaultValue="ABC Public School"
                className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:border-cyan-500"
              />

              <input
                placeholder="Finance Officer"
                defaultValue="John David"
                className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:border-cyan-500"
              />

              <input
                placeholder="Email"
                defaultValue="finance@school.com"
                className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:border-cyan-500"
              />

              <input
                placeholder="Phone"
                defaultValue="+91 9876543210"
                className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:border-cyan-500"
              />

            </div>

          </div>

          {/* Notifications & AI */}

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <Bell className="text-orange-400" />

                <h2 className="text-2xl font-bold text-white">
                  Notifications
                </h2>

              </div>

              <div className="space-y-6 text-white">

                <label className="flex justify-between items-center">
                  <span>Email Alerts</span>
                  <input type="checkbox" defaultChecked className="accent-cyan-500 w-5 h-5" />
                </label>

                <label className="flex justify-between items-center">
                  <span>SMS Alerts</span>
                  <input type="checkbox" defaultChecked className="accent-cyan-500 w-5 h-5" />
                </label>

                <label className="flex justify-between items-center">
                  <span>Monthly Reports</span>
                  <input type="checkbox" defaultChecked className="accent-cyan-500 w-5 h-5" />
                </label>

              </div>

            </div>

            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <BrainCircuit className="text-violet-400" />

                <h2 className="text-2xl font-bold text-white">
                  AI Settings
                </h2>

              </div>

              <div className="space-y-6 text-white">

                <label className="flex justify-between items-center">
                  <span>Enable AI Prediction</span>
                  <input type="checkbox" defaultChecked className="accent-cyan-500 w-5 h-5" />
                </label>

                <label className="flex justify-between items-center">
                  <span>Auto Risk Analysis</span>
                  <input type="checkbox" defaultChecked className="accent-cyan-500 w-5 h-5" />
                </label>

                <label className="flex justify-between items-center">
                  <span>Smart Recommendations</span>
                  <input type="checkbox" defaultChecked className="accent-cyan-500 w-5 h-5" />
                </label>

              </div>

            </div>

          </div>

          {/* Security & Database */}

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <ShieldCheck className="text-green-400" />

                <h2 className="text-2xl font-bold text-white">
                  Security
                </h2>

              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-xl">
                Change Password
              </button>

            </div>

            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <Database className="text-cyan-400" />

                <h2 className="text-2xl font-bold text-white">
                  Database
                </h2>

              </div>

              <button className="w-full bg-cyan-600 hover:bg-cyan-700 transition text-white py-4 rounded-xl">
                Connect MongoDB
              </button>

            </div>

          </div>

          {/* Save */}

          <div className="flex justify-end">

            <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition">

              <Save size={20} />

              Save Changes

            </button>

          </div>

        </main>

      </div>

    </div>
  );
}