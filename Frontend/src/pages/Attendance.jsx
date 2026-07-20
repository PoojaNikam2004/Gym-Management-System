import { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import AttendanceSearchBar from "../components/AttendanceSearchBar";
import AttendanceTable from "../components/AttendanceTable";
import MarkAttendanceModal from "../components/MarkAttendanceModal";

function Attendance() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingAttendance, setEditingAttendance] = useState(null);

  const [attendance, setAttendance] = useState([
    {
      id: 1,
      memberName: "Pooja Nikam",
      trainer: "Rahul Sharma",
      date: "2026-07-01",
      status: "Present",
    },
    {
      id: 2,
      memberName: "Amit Patil",
      trainer: "Karan Singh",
      date: "2026-07-01",
      status: "Absent",
    },
    {
      id: 3,
      memberName: "Sneha Patil",
      trainer: "Rahul Sharma",
      date: "2026-07-01",
      status: "Present",
    },
  ]);

  // Add Attendance
  const addAttendance = (newAttendance) => {
    setAttendance((prev) => [...prev, newAttendance]);
  };

  // Delete Attendance
  const deleteAttendance = (id) => {
    setAttendance((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Open Edit Modal
  const editAttendance = (attendance) => {
    setEditingAttendance(attendance);
    setShowModal(true);
  };

  // Update Attendance
  const updateAttendance = (updatedAttendance) => {
    setAttendance((prev) =>
      prev.map((item) =>
        item.id === updatedAttendance.id
          ? updatedAttendance
          : item
      )
    );
  };

  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1 bg-gray-100 p-6">

        <Header />

        <AttendanceSearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          onAddAttendance={() => {
            setEditingAttendance(null);
            setShowModal(true);
          }}
        />

        <AttendanceTable
          attendance={attendance}
          deleteAttendance={deleteAttendance}
          editAttendance={editAttendance}
          searchTerm={searchTerm}
          statusFilter={statusFilter}
        />

        {showModal && (
          <MarkAttendanceModal
            onClose={() => {
              setShowModal(false);
              setEditingAttendance(null);
            }}
            addAttendance={addAttendance}
            editingAttendance={editingAttendance}
            updateAttendance={updateAttendance}
          />
        )}

      </div>
    </div>
  );
}

export default Attendance;