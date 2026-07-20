import { useState, useEffect } from "react";

function MarkAttendanceModal({
  onClose,
  addAttendance,
  editingAttendance,
  updateAttendance,
}) {
  const [formData, setFormData] = useState({
    memberName: "",
    trainer: "",
    date: "",
    status: "Present",
  });

  useEffect(() => {
    if (editingAttendance) {
      setFormData({
        memberName: editingAttendance.memberName || "",
        trainer: editingAttendance.trainer || "",
        date: editingAttendance.date || "",
        status: editingAttendance.status || "Present",
      });
    } else {
      setFormData({
        memberName: "",
        trainer: "",
        date: "",
        status: "Present",
      });
    }
  }, [editingAttendance]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const attendanceData = {
      id: editingAttendance ? editingAttendance.id : Date.now(),
      ...formData,
    };

    if (editingAttendance) {
      updateAttendance(attendanceData);
    } else {
      addAttendance(attendanceData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-2">
          {editingAttendance ? "Edit Attendance" : "Mark Attendance"}
        </h2>

        <p className="text-gray-500 mb-6">
          Fill attendance details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">
              Member Name
            </label>

            <input
              type="text"
              name="memberName"
              value={formData.memberName}
              onChange={handleChange}
              placeholder="Enter Member Name"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Trainer Name
            </label>

            <input
              type="text"
              name="trainer"
              value={formData.trainer}
              onChange={handleChange}
              placeholder="Enter Trainer Name"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              {editingAttendance ? "Update Attendance" : "Save Attendance"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default MarkAttendanceModal;