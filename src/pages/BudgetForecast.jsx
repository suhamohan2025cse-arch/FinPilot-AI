import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import {
  TrendingUp,
  Wallet,
  Calendar,
  BrainCircuit,
} from "lucide-react";

import BudgetForecastCard from "../components/forecast/BudgetForecastCard";
import ForecastChart from "../components/forecast/ForecastChart";
import ForecastTable from "../components/forecast/ForecastTable";
import AISummary from "../components/forecast/AISummary";

export default function BudgetForecast() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">

      <Sidebar />

      <div className="flex-1 overflow-auto">

        <Topbar />

        <main className="p-8 space-y-8">

          {/* Header */}

          <div>

            <h1 className="text-4xl font-bold text-slate-900">
              Budget Forecast
            </h1>

            <p className="text-slate-500 mt-2">
              AI-powered revenue and expense forecasting for upcoming months.
            </p>

          </div>

          {/* KPI */}

          <div className="grid lg:grid-cols-4 gap-6">

            <BudgetForecastCard
              title="Expected Revenue"
              value="₹2.84 Cr"
              icon={Wallet}
              color="blue"
            />

            <BudgetForecastCard
              title="Expected Expenses"
              value="₹1.63 Cr"
              icon={TrendingUp}
              color="red"
            />

            <BudgetForecastCard
              title="Profit Forecast"
              value="₹1.21 Cr"
              icon={Calendar}
              color="green"
            />

            <BudgetForecastCard
              title="AI Confidence"
              value="96%"
              icon={BrainCircuit}
              color="purple"
            />

          </div>

          <ForecastChart />

          <div className="grid xl:grid-cols-3 gap-6">

            <div className="xl:col-span-2">

              <ForecastTable />

            </div>

            <AISummary />

          </div>

        </main>

      </div>

    </div>
  );
}