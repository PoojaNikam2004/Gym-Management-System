import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-100 shadow-md ">
      <div className="max-w-7xl mx-auto flex items-center align-bottom justify-between px-1 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">
          Gym Management System
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-gray-700 font-medium">

          <li>
            <Link to="/home" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/membership" className="hover:text-blue-600">
              Membership
            </Link>
          </li>

          <li>
            <Link to="/trainers" className="hover:text-blue-600">
              Trainers
            </Link>
          </li>

          <li>
            <Link to="/attendance" className="hover:text-blue-600">
              Attendance
            </Link>
          </li>

          <li>
            <Link to="/profile" className="hover:text-blue-600">
              Profile
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
          </li>

          <li>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Register
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;