function AttendanceChart() {

    const attendance = [
        { day: "Mon", value: 80 },
        { day: "Tue", value: 60 },
        { day: "Wed", value: 95 },
        { day: "Thu", value: 55 },
        { day: "Fri", value: 90 },
        { day: "Sat", value: 70 },
        { day: "Sun", value: 40 }
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">

            <h2 className="text-2xl font-bold mb-6">
                Weekly Attendance
            </h2>

            <div className="space-y-4">


                {attendance.map((item, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-4" >

                        <div className="w-12 font-semibold">
                            {item.day}
                        </div>

                        <div className="flex-1 bg-gray-200 rounded-full h-5">

                            <div
                                className={
                                    item.value >= 90
                                        ? "bg-green-500 h-5 rounded-full"
                                        : item.value >= 60
                                            ? "bg-blue-500 h-5 rounded-full"
                                            : "bg-red-500 h-5 rounded-full"
                                }
                                style={{ width: `${item.value}%` }}
                            ></div>
                        </div>

                        <div className="font-semibold">
                            {item.value}%
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default AttendanceChart;