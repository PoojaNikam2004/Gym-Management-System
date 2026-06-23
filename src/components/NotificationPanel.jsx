function NotificationPanel() {

    const notifications = [

        {
            id:1,
            message:"🎉 New member registered.",
            time:"5 min ago"
        },

        {
            id:2,
            message:"💳 Rahul completed payment.",
            time:"20 min ago"
        },

        {
            id:3,
            message:"⚠️ 5 memberships expire tomorrow.",
            time:"1 hour ago"
        },

        {
            id:4,
            message:"🏋 New trainer joined.",
            time:"Today"
        }

    ];

    return (

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold mb-5">
                🔔 Notifications
            </h2>

            <div className="space-y-4">

                {notifications.map((item)=>(

                    <div
                        key={item.id}
                        className="border-l-4 border-blue-500 pl-4"
                    >

                        <p className="font-medium">
                            {item.message}
                        </p>

                        <p className="text-sm text-gray-500">
                            {item.time}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default NotificationPanel;