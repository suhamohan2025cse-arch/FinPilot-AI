import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import WhyFinPilot from "./components/WhyFinPilot";
import DashboardPreview from "./components/DashboardPreview";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
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

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <Students />
          </ProtectedRoute>
        }
      />

      <Route
        path="/prediction"
        element={
          <ProtectedRoute>
            <FeePrediction />
          </ProtectedRoute>
        }
      />

      <Route
        path="/budget"
        element={
          <ProtectedRoute>
            <BudgetForecast />
          </ProtectedRoute>
        }
      />

      <Route
        path="/expense"
        element={
          <ProtectedRoute>
            <ExpenseDetection />
          </ProtectedRoute>
        }
      />

      <Route
        path="/copilot"
        element={
          <ProtectedRoute>
            <AICopilot />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;