function DashboardCard({ title, value, icon ,color }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">

            <div className="flex items-center justify-between">

                <div>
                    <h3 className="text-gray-500 text-sm font-medium">
                        {title}
                    </h3>

                    <p className="text-3xl font-bold text-gray-800 mt-2">
                        {value}
                    </p>
                </div>

                <div className={` ${color} text-5xl`}>
                    {icon}
                </div>
                


            </div>
        </div>
    );
}

export default DashboardCard;