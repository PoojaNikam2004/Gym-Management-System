function AttendanceTable({
  attendance,
  deleteAttendance,
  editAttendance,
  searchTerm,
  statusFilter,
}) {

  const filteredAttendance = attendance.filter((record) => {

    const matchesSearch =
      record.memberName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      record.trainer
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesFilter =
      statusFilter === "All" ||
      record.status === statusFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-4 text-left">Member Name</th>
            <th className="p-4 text-left">Trainer</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>

        </thead>

        <tbody>

          {filteredAttendance.length > 0 ? (

            filteredAttendance.map((record) => (

              <tr
                key={record.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {record.memberName}
                </td>

                <td className="p-4">
                  {record.trainer}
                </td>

                <td className="p-4">
                  {record.date}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      record.status === "Present"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {record.status}
                  </span>

                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => editAttendance(record)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteAttendance(record.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="5"
                className="text-center py-6 text-gray-500"
              >
                No Attendance Found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default AttendanceTable;