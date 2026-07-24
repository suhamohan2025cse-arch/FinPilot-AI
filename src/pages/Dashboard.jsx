import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import AIInsights from "../components/dashboard/AIInsights";
import RecentTransactions from "../components/dashboard/RecentTransactions";

import {
  IndianRupee,
  Users,
  TriangleAlert,
  BarChart3,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#020817]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <Topbar />

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Total Fees Collected"
              value="₹1.28 Cr"
              growth="+12.5%"
              icon={IndianRupee}
            />

            <StatCard
              title="Students"
              value="1245"
              growth="+8%"
              icon={Users}
            />

            <StatCard
              title="High Risk Students"
              value="47"
              growth="-15%"
              icon={TriangleAlert}
            />

            <StatCard
              title="Collection Rate"
              value="91.4%"
              growth="+4%"
              icon={BarChart3}
            />

          </div>

          {/* Revenue Chart + AI Insights */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            <div className="xl:col-span-2">
              <RevenueChart />
            </div>

            <AIInsights />

          </div>

          {/* Recent Transactions */}
          <RecentTransactions />

        </div>
      </div>
    </div>
  );
}