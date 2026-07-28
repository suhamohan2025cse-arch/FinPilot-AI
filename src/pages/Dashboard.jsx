import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import AIInsights from "../components/dashboard/AIInsights";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import QuickActions from "../components/dashboard/QuickActions";
import FeeRiskAnalysis from "../components/dashboard/FeeRiskAnalysis";
import BudgetForecast from "../components/dashboard/BudgetForecast";
import ExpenseAnalytics from "../components/dashboard/ExpenseAnalytics";

import {
  IndianRupee,
  Users,
  TriangleAlert,
  BarChart3,
} from "lucide-react";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setDashboard(res.data.dashboard);
      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    };

    fetchDashboard();
  }, []);

  if (!dashboard) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#020817] text-white text-2xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#020817]">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <Topbar />

        <main className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Financial Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              AI-powered school financial intelligence platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard
              title="Total Fees Collected"
              value={`₹${dashboard.collectedFees.toLocaleString()}`}
              growth={`${dashboard.collectionRate}%`}
              icon={IndianRupee}
            />

            <StatCard
              title="Students"
              value={dashboard.totalStudents}
              growth={`${dashboard.partialStudents} Partial`}
              icon={Users}
            />

            <StatCard
              title="Total Expenses"
              value={`₹${dashboard.totalExpenses.toLocaleString()}`}
              growth="Live"
              icon={TriangleAlert}
            />

            <StatCard
              title="Collection Rate"
              value={`${dashboard.collectionRate}%`}
              growth="Updated"
              icon={BarChart3}
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <RevenueChart />
            </div>

            <AIInsights />
          </div>

          <RecentTransactions />

          <QuickActions />

          <FeeRiskAnalysis />

          <BudgetForecast />

          <ExpenseAnalytics />
        </main>
      </div>
    </div>
  );
}