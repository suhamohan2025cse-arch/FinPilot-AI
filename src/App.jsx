import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import WhyFinPilot from "./components/WhyFinPilot";
import DashboardPreview from "./components/DashboardPreview";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import FeePrediction from "./pages/FeePrediction";
import BudgetForecast from "./pages/BudgetForecast";
import ExpenseDetection from "./pages/ExpenseDetection";
import AICopilot from "./pages/AICopilot";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <WhyFinPilot />
      <DashboardPreview />
      <CtaBand />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/prediction" element={<FeePrediction />} />
      <Route path="/budget" element={<BudgetForecast />} />
      <Route path="/expense" element={<ExpenseDetection />} />
      <Route path="/copilot" element={<AICopilot />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;