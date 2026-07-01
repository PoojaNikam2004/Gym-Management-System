 import {useState} from "react";

import SideBar from "../components/SideBar";
import AttendanceSearchBar from "../components/AttendanceSearchBar";
function Attendance(){


   const [attendance,setAttendance] = useState("");
   const [statusFilter,setStatusFilter] = useState("All");

   const handleAddAttendance = () => {
   }

   const decreaseAttendance = () => {
   }

    return(
        <div className="bg-gray-100 min-h-screen ">
   <SideBar/>
            <div className="flex flex-col p-6 ml-64">

                <AttendanceSearchBar
                attendance={attendance}
                setAttendance={setAttendance}
                handleAddAttendance={handleAddAttendance}
                decreaseAttendance={decreaseAttendance}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                />
            </div>
          
        </div>
    )
}
export default Attendance;