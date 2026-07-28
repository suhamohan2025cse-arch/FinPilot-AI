import { useState } from "react";
import StudentRow from "./StudentRow";
import StudentModal from "./StudentModal";

const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    admission: "FP1001",
    grade: "Grade 10-A",
    attendance: "92%",
    fee: "Paid",
    pending: "₹0",
    risk: "Low",
  },
  {
    id: 2,
    name: "Priya Menon",
    admission: "FP1002",
    grade: "Grade 9-C",
    attendance: "81%",
    fee: "Pending",
    pending: "₹18,000",
    risk: "High",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    admission: "FP1003",
    grade: "Grade 8-B",
    attendance: "87%",
    fee: "Partial",
    pending: "₹6,500",
    risk: "Medium",
  },
  {
    id: 4,
    name: "Aisha Khan",
    admission: "FP1004",
    grade: "Grade 7-A",
    attendance: "95%",
    fee: "Paid",
    pending: "₹0",
    risk: "Low",
  },
  {
    id: 5,
    name: "Kavin Raj",
    admission: "FP1005",
    grade: "Grade 11-B",
    attendance: "74%",
    fee: "Pending",
    pending: "₹21,000",
    risk: "High",
  },
];

export default function StudentsTable() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <>
      <div className="bg-[#0F172A] border border-slate-800 rounded-3xl shadow-xl overflow-hidden">

        <div className="px-6 py-5 border-b border-slate-800">

          <h2 className="text-2xl font-bold text-white">
            Students List
          </h2>

          <p className="text-slate-400 mt-1">
            AI Powered Student Monitoring
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#111827]">

              <tr className="text-slate-400 text-sm">

                <th className="text-left px-6 py-4">
                  Student
                </th>

                <th className="text-left px-6 py-4">
                  Admission ID
                </th>

                <th className="text-left px-6 py-4">
                  Grade
                </th>

                <th className="text-left px-6 py-4">
                  Attendance
                </th>

                <th className="text-left px-6 py-4">
                  Fee Status
                </th>

                <th className="text-left px-6 py-4">
                  Pending
                </th>

                <th className="text-left px-6 py-4">
                  AI Risk
                </th>

                <th className="text-center px-6 py-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {students.map((student) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  onView={() => setSelectedStudent(student)}
                />
              ))}

            </tbody>

          </table>

        </div>

      </div>

      <StudentModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />

    </>
  );
}