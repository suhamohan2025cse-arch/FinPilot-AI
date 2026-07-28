import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import StudentStats from "../components/students/StudentStats";
import SearchBar from "../components/students/SearchBar";
import StudentsTable from "../components/students/StudentsTable";

export default function Students() {
  return (
    <div className="flex min-h-screen bg-[#020817]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">

        {/* Top Navigation */}
        <Topbar />

        {/* Page Content */}
        <main className="p-8 space-y-8">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>

              <h1 className="text-4xl font-bold text-white">
                Students Management
              </h1>

              <p className="text-slate-400 mt-2">
                Manage students, monitor fee payments, attendance,
                and AI-powered risk predictions.
              </p>

            </div>

            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg">
              Export Report
            </button>

          </div>

          {/* Statistics Cards */}
          <StudentStats />

          {/* Search & Filters */}
          <SearchBar />

          {/* Students Table */}
          <StudentsTable />

        </main>

      </div>

    </div>
  );
}