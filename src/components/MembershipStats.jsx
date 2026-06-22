function MembershipStats() {

    const plans = [
        {
            id: 1,
            plan: "Monthly",
            members: 45,
            color: "bg-green-500"
        },
        {
            id: 2,
            plan: "Quarterly",
            members: 25,
            color: "bg-blue-500"
        },
        {
            id: 3,
            plan: "Yearly",
            members: 30,
            color: "bg-purple-500"
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold mb-5">
                Membership Statistics
            </h2>

            <div className="space-y-5">

                {plans.map((item) => (

                    <div
                        key={item.id}
                        className="flex items-center gap-4"
                    >

                        <div
                            className={`w-4 h-4 rounded-full ${item.color}`}
                        ></div>

                        <div className="flex-1">

                            <h3 className="font-semibold">
                                {item.plan}
                            </h3>

                        </div>

                        <div className="font-bold text-lg">
                            {item.members}
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default MembershipStats;