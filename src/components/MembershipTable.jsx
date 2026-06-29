function MembershipTable({ plans }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Plan Name</th>
            <th className="p-4 text-left">Duration</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {plans.map((plan) => (
            <tr
              key={plan.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4">{plan.name}</td>

              <td className="p-4">{plan.duration}</td>

              <td className="p-4">₹{plan.price}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    plan.status === "Active"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {plan.status}
                </span>
              </td>

              <td className="p-4 text-center">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default MembershipTable;