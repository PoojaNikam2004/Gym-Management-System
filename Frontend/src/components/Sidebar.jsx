import { Link } from "react-router-dom";



function Sidebar() {
    return (

        < div className="w-64 flex flex-col py-4 bg-gray-800 text-white h-screen p-5">
            <h2 className="text-2xl font-bold mb-6">Gym Admin</h2>

            <Link to="/dashboard" className="hover:bg-gray-700 px-4 py-2 gap-2 transition duration-300 rounded">📊 Dashboard</Link>
            <Link to="/members" className="hover:bg-gray-700 px-4 py-2 gap-2 transition duration-300 rounded">👥 Members</Link>
            <Link to="/trainers" className="hover:bg-gray-700 px-4 py-2 gap-2 transition duration-300 rounded">👨‍🏫 Trainers</Link>
            <Link to="/membership" className="hover:bg-gray-700 px-4 py-2 gap-2 transition duration-300 rounded">🎫 Membership</Link>

      
        
            <Link to="/attendance" className="hover:bg-gray-700 px-4 py-2 gap-2 transition duration-300 rounded">✅ Attendance</Link>
            <Link to="/recentpayment" className="hover:bg-gray-700 px-4 py-2 gap-2 transition duration-300 rounded">💵 RecentPayments</Link>
            <Link to="/profile" className="hover:bg-gray-700 px-4 py-2 gap-2 transition duration-300 rounded">👤 Profile</Link>
            <Link to="/settings" className="hover:bg-gray-700 px-4 py-2 gap-2 transition duration-300 rounded">⚙️ Settings</Link>
            <Link to="/logout" className="hover:bg-gray-700 mt-auto transition duration-300 rounded px-4 py-2">🚪 Logout</Link>

        </div>

    )
}
export default Sidebar;
