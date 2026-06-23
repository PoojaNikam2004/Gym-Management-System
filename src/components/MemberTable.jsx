function MemberTable() {

    const members = [
        {
            id: 1,
            name: "Pooja Nikam",
            age: 21,
            gender: "Female",
            plan: "Yearly",
            trainer: "Rahul",
            status: "Active"
        },
        {
            id: 2,
            name: "Amit Kumar",
            age: 24,
            gender: "Male",
            plan: "Monthly",
            trainer: "Karan",
            status: "Expired"
        },
        {
            id: 3,
            name: "Sneha Patil",
            age: 22,
            gender: "Female",
            plan: "Quarterly",
            trainer: "Mohan",
            status: "Active"
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">

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

                    {members.map((member) => (

                        <tr key={member.id} className="border-b hover:bg-gray-50">

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

export default MemberTable;