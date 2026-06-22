import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Header from "../components/Header";
function Dashboard(){
    return(
        <div className="flex">

    <Sidebar />

    <div className="flex-1 bg-gray-100 p-8">

        <Header />

        <h1 className="text-3xl font-bold mb-6"> Dashboard </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <DashboardCard title="Total Members" value="120" icon="👥" color="bg-red-500"/>

            <DashboardCard title="Trainers"
                value="8"
                icon="🏋"
                color="bg-blue-500"
            />

            <DashboardCard
                title="Membership Plans"
                value="95"
                icon="🎫"
                color="bg-pink-500"
            />

            <DashboardCard
                title="Today's Attendance"
                value="78"
                icon="📅"
                color="bg-green-500"
            />

        </div>

    </div>

</div>
    )
}
export default Dashboard;
