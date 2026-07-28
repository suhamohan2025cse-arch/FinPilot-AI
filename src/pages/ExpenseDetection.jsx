import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import {
  ShieldAlert,
  Receipt,
  BrainCircuit,
  TrendingDown,
} from "lucide-react";

import ExpenseSummaryCard from "../components/expense/ExpenseSummaryCard";
import ExpenseChart from "../components/expense/ExpenseChart";
import SuspiciousTransactions from "../components/expense/SuspiciousTransactions";
import AIExpenseAnalysis from "../components/expense/AIExpenseAnalysis";

export default function ExpenseDetection() {
  return (
    <div className="flex min-h-screen bg-[#020817]">

      <Sidebar />

      <div className="flex-1 overflow-auto">

        <Topbar />

        <main className="p-8 space-y-8">

          <div>

            <h1 className="text-4xl font-bold text-white">
              AI Expense Detection
            </h1>

            <p className="text-slate-400 mt-2">
              Detect unusual expenses and monitor financial anomalies using AI.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-6">

            <ExpenseSummaryCard
              title="Monthly Expense"
              value="₹18.6 L"
              icon={Receipt}
              color="blue"
            />

            <ExpenseSummaryCard
              title="Suspicious Expenses"
              value="12"
              icon={ShieldAlert}
              color="red"
            />

            <ExpenseSummaryCard
              title="Risk Score"
              value="87%"
              icon={BrainCircuit}
              color="purple"
            />

            <ExpenseSummaryCard
              title="Savings Opportunity"
              value="₹2.3 L"
              icon={TrendingDown}
              color="green"
            />

          </div>

          <ExpenseChart />

          <div className="grid xl:grid-cols-3 gap-6">

            <div className="xl:col-span-2">
              <SuspiciousTransactions />
            </div>

            <AIExpenseAnalysis />

          </div>

        </main>

      </div>

    </div>
  );
}