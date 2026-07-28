import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import {
  BrainCircuit,
  Send,
  Sparkles,
} from "lucide-react";

export default function AICopilot() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">

      <Sidebar />

      <div className="flex-1 overflow-auto">

        <Topbar />

        <main className="p-8">

          {/* Header */}

          <div className="mb-8">

            <h1 className="text-4xl font-bold text-slate-900">
              AI Financial Copilot
            </h1>

            <p className="text-slate-500 mt-2">
              Ask anything about your school's finances and let AI help you.
            </p>

          </div>

          <div className="grid xl:grid-cols-4 gap-8">

            {/* Left */}

            <div className="xl:col-span-1">

              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6">

                <div className="flex items-center gap-3">

                  <BrainCircuit
                    className="text-violet-600"
                    size={28}
                  />

                  <h2 className="text-xl font-bold text-slate-900">
                    Quick Questions
                  </h2>

                </div>

                <div className="mt-6 space-y-3">

                  <button className="w-full text-left p-4 rounded-xl bg-violet-50 hover:bg-violet-100 transition">
                    Why did fee collection decrease?
                  </button>

                  <button className="w-full text-left p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition">
                    Show high-risk students.
                  </button>

                  <button className="w-full text-left p-4 rounded-xl bg-green-50 hover:bg-green-100 transition">
                    Predict next month's revenue.
                  </button>

                  <button className="w-full text-left p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition">
                    Which class has the highest pending fees?
                  </button>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="xl:col-span-3">

              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">

                {/* Chat Header */}

                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">

                  <div className="flex items-center gap-3">

                    <Sparkles
                      className="text-white"
                      size={28}
                    />

                    <div>

                      <h2 className="text-2xl font-bold text-white">
                        FinPilot AI
                      </h2>

                      <p className="text-cyan-100">
                        Financial Intelligence Assistant
                      </p>

                    </div>

                  </div>

                </div>

                {/* Chat */}

                <div className="p-8 h-[500px] overflow-y-auto space-y-6 bg-slate-50">

                  <div className="flex justify-end">

                    <div className="bg-blue-600 text-white rounded-2xl px-5 py-4 max-w-lg">

                      Why did fee collection decrease this month?

                    </div>

                  </div>

                  <div className="flex">

                    <div className="bg-white rounded-2xl border border-slate-200 shadow p-6 max-w-2xl">

                      <h3 className="font-bold text-violet-700 mb-3">
                        AI Analysis
                      </h3>

                      <p className="text-slate-600 leading-8">

                        Fee collection decreased by approximately
                        <strong> 8%</strong> compared to last month.

                        <br /><br />

                        Major reasons:

                        <br /><br />

                        • Grade 10 has ₹4.8 lakh pending.

                        <br />

                        • Attendance dropped by 9%.

                        <br />

                        • 17 parents delayed payments for more than 15 days.

                        <br />

                        • AI predicts recovery within 2 weeks if reminders are sent.

                      </p>

                    </div>

                  </div>

                </div>

                {/* Input */}

                <div className="border-t border-slate-200 p-5 bg-white">

                  <div className="flex gap-4">

                    <input
                      placeholder="Ask FinPilot AI..."
                      className="flex-1 border border-slate-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
                    />

                    <button className="px-8 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white">

                      <Send />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}