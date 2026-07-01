

function AttendanceSearchBar( attendance,setAttendance ,handleAddAttendance,decreaseAttendance ,statusFilter,setStatusFilter) {


    return(
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h1 className="text-2xl font-bold mb-6">
                Attendance Management
            </h1>
            <div className="flex justify-between items-center gap-4 flex-wrap">
                <input type="text" placeholder="Search Attendance..." className="border rounded-lg p-2" value={attendance} onChange={(e)=>setAttendance(e.target.value)} />
                <select value={statusFilter}  onChange={(e)=>setStatusFilter(e.target.value)} className="border rounded-lg p-2" >
                    <option value="All">All</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
            </div>

            <div className="flex justify-around items-baseline gap-4 flex-wrap mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg" onClick={handleAddAttendance}>
                    + Add Attendance
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg" onClick={decreaseAttendance}>
                    Export Attendance
                </button>
            </div>
        </div>
    )
        
    
} 
export default AttendanceSearchBar;
