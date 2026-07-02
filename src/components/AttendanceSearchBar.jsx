function AttendanceSearchBar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  onAddAttendance,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">

      <h2 className="text-2xl font-bold mb-6">
        Attendance Management
      </h2>

      <div className="flex justify-between items-center flex-wrap gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search Member..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-80"
        />

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        {/* Add Attendance */}
        <button
          onClick={onAddAttendance}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Mark Attendance
        </button>

      </div>

    </div>
  );
}

export default AttendanceSearchBar;