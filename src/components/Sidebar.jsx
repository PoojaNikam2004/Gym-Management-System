import {Link} from "react-router-dom";



function Sidebar(){
    return(

        < div className="w-64 bg-gray-800 text-white h-screen p-5">
            <h2 className="text-2xl font-bold mb-6">Gym Management</h2>
            
                <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
                <Link to="/members" className="hover:bg-gray-700 p-2 rounded">Members</Link>
                <Link to="/trainers" className="hover:bg-gray-700 p-2 rounded">Trainers</Link>
                <Link to="/membership" className="hover:bg-gray-700 p-2 rounded">Membership</Link>
                
                <Link to="/classes" className="hover:bg-gray-700 p-2 rounded">Classes</Link>
                <Link to="/schedules" className="hover:bg-gray-700 p-2 rounded">Schedules</Link>
                <Link to="/attendance" className="hover:bg-gray-700 p-2 rounded">Attendance</Link>
                <Link to="/payments" className="hover:bg-gray-700 p-2 rounded">Payments</Link>
                <Link to="/profile" className="hover:bg-gray-700 p-2 rounded">Profile</Link>
                <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">Settings</Link>
                <Link to="/logout" className="hover:bg-gray-700 p-2 rounded">Logout</Link>
            
        </div>

    )
}
export default Sidebar;
