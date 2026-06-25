function MemberTable({ members, deleteMember, editMember }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Age</th>
            <th className="p-4 text-left">Gender</th>
            <th className="p-4 text-left">Plan</th>
            <th className="p-4 text-left">Trainer</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {members.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                className="text-center py-6 text-gray-500"
              >
                No Members Found
              </td>
            </tr>
          ) : (
            members.map((member) => (
              <tr
                key={member.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{member.name}</td>

                <td className="p-4">{member.age}</td>

                <td className="p-4">{member.gender}</td>

                <td className="p-4">{member.plan}</td>

                <td className="p-4">{member.trainer}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      member.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>

                <td className="p-4 text-center space-x-2">
                  <button
                    onClick={() => editMember(member)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteMember(member.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MemberTable;