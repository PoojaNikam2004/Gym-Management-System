
function RecentMembers() {

    const members = [
        {
            id: 1,
            name: "Pooja Nikam",
            plan: "Yearly",
            joinedDate: new Date("2023-01-15"),
            status: "Active"
        },
        {
            id: 2,
            name: "Rahul Sharma",
            plan: "Monthly",
            joinedDate: new Date("2023-02-20"),
            status: "Active"
        },
        {
            id: 3,
            name: "Komal Sharma",
            plan: "Quarterly",
            joinedDate: new Date("2023-03-10"),
            status: "Expired"
        },
        {
            id: 4,
            name: "Amit Kumar",
            plan: "Monthly",
            joinedDate: new Date("2023-04-05"),
            status: "Active"
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-8 w-full">

            <h2 className="text-2xl font-bold mb-6">
                Recent Members
            </h2>

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="px-6 py-3 text-left font-semibold text-gray-700">
                                Name
                            </th>

                            <th className="px-6 py-3 text-left font-semibold text-gray-700">
                                Plan
                            </th>

                            <th className="px-6 py-3 text-left font-semibold text-gray-700">
                                Joined Date
                            </th>

                            <th className="px-6 py-3 text-left font-semibold text-gray-700">
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {members.map((member) => (

                            <tr
                                key={member.id}
                                className="border-b hover:bg-gray-50 transition"
                            >

                                <td className="px-6 py-4">
                                    {member.name}
                                </td>

                                <td className="px-6 py-4">
                                    {member.plan}
                                </td>

                                <td className="px-6 py-4">
                                    {member.joinedDate.toLocaleDateString()}
                                </td>

                                <td className="px-6 py-4">

                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            member.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                        }`}
                                    >
                                        {member.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default RecentMembers;

