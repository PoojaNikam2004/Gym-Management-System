function UpcomingClasses() {

    const classes = [
        {
            id: 1,
            className: "Yoga",
            trainer: "Priya Sharma",
            time: "07:00 AM",
            members: 18
        },
        {
            id: 2,
            className: "CrossFit",
            trainer: "Rahul Sharma",
            time: "09:00 AM",
            members: 12
        },
        {
            id: 3,
            className: "zumba",
            trainer: "Sneha pise",
            time: "06:00 PM",
            members: 25
        },
        {
            id: 4,
            className: "Cardio",
            trainer: "Amit Kumar",
            time: "08:00 PM",
            members: 20
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold mb-5">
                📅 Upcoming Classes
            </h2>

            <div className="space-y-4">

                {classes.map((item) => (

                    <div
                        key={item.id}
                        className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-100 transition"
                    >

                        <div>

                            <h3 className="font-semibold text-lg">
                                {item.className}
                            </h3>

                            <p className="text-gray-500">
                                Trainer: {item.trainer}
                            </p>

                        </div>

                        <div className="text-right">

                            <p className="font-semibold">
                                {item.time}
                            </p>

                            <p className="text-sm text-gray-500">
                                👥 {item.members} Members
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default UpcomingClasses;