import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getEmployees } from "../slices/EmployeeSlice";
 

function LeaveManagement() {
  const dispatch = useDispatch(); 

  const date = new Date(Date.now())
  const dateInfo = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

    const existingEmployees = useSelector(state => state.employees?.employees || []);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAscending, SetIsAscending] = useState(false);

    const toggleSort = () => {
    SetIsAscending(prev => !prev)
  }
    
    useEffect(() => {
        if (existingEmployees.length === 0) {
            dispatch(getEmployees());
        }
    },[dispatch, existingEmployees.length])

    const allLeaves = existingEmployees.flatMap(emp =>
    (emp.leaveList || []).map(leave => ({
         ...leave,
        employeeId: emp.id,
        employeeName: emp.name,
        department: emp.department,
        designation: emp.designation
    })
    )
    )
    
    const filteredLeaves = useMemo(() => { 
        const term = searchTerm.toLowerCase().trim()
        let list = allLeaves.filter(leave =>{
          const matchedSearch = 
          !term ||
          leave.employeeName.toLowerCase().includes(term) ||
      leave.department.toLowerCase().includes(term) ||
      leave.designation.toLowerCase().includes(term) ||
      leave.leaveType?.toLowerCase().includes(term) ||
      leave.status?.toLowerCase().includes(term) ||
      leave.reason?.toLowerCase().includes(term);

      return matchedSearch;

    })
    
        return [...list].sort((a,b) => {
          const dateA = new Date(a.appliedAt || a.startDate).getTime();
          const dateB = new Date(b.appliedAt || b.startDate).getTime();
    
          return isAscending ? dateA - dateB : dateB - dateA;
        })
      },[allLeaves, searchTerm, isAscending])
    
      if (!filteredLeaves) {
            return (
                <div className="text-center pt-12">Loading...</div>
            )
        };


    

  return (
    <div className="md:pl-15 pl-3 pr-3">
        <div className="flex flex-wrap justify-around items-center pt-12 gap-2">
          <div className="bg-linear-to-r from-cyan-200/50 to-mauve-300 w-full shrink-0 mr-2 lg:w-fit rounded-lg shadow-[1px_1px_3px] shadow-gray-400">
          <h2 className="bg-linear-to-r from-mauve-500 to-cyan-700 bg-clip-text text-transparent font-bold px-1.5 py-1 text-center md:text-xl pl-2">Manage Leave Requests</h2>
          </div>
          <div className="flex justify-center text-gray-500 flex-wrap md:flex-1 max-w-50 items-center gap-2 border-2 px-2 py-1  
            border-gray-400 rounded-xl text-sm font-semibold">
            <p>Filter Data</p>
            <p>▼</p>
          </div>
          <div className="flex flex-wrap md:flex-1">
            <input 
              type="text" 
              placeholder='🔍︎  Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 px-2 py-1 w-full
            border-gray-400 rounded-xl text-sm font-semibold" />
          </div>
          <div className="flex min-w-40 justify-center items-center gap-2 px-3 py-1.5 cursor-pointer  
             rounded-xl text-sm font-semibold bg-blue-400 shadow-[1px_1px_3px]
              text-white shadow-gray-600 hover:bg-blue-500">
            <p className="">+ Assign Leave</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-7 py-4 border-t border-b 
          border-amber-200 gap-3 md:gap-0 pt-4 px-2 text-xs font-semibold 
          bg-amber-100/50 text-gray-600 rounded-lg">
          <p className="flex flex-wrap-reverse md:flex-nowrap gap-3"><span>❮</span>{dateInfo}</p>
          <p className="text-blue-600 font-bold">Today</p>
          <p>This Week</p>
          <p>Last Week</p>
          <p>This Month</p>
          <p>Last Month</p>
          <p className="text-center md:text-left md:col-span-1 col-span-3">This Year</p>
        </div>
        <div className="grid grid-cols-2 pt-5 gap-2 md:grid-cols-3 lg:grid-cols-6 text-xs md:text-sm">
          <div className="p-2 flex flex-col justify-center items-center
            rounded shadow-[1px_1px_3px] bg-red-200 text-red-800 font-semibold">
            <p className="font-bold text-2xl">13</p>
            <p>Employee on Leave</p>
          </div>
          <div className="p-2 flex flex-col justify-center items-center
            rounded shadow-[1px_1px_3px] bg-blue-200 text-blue-800 font-semibold">
            <p className="font-bold text-2xl">8</p>
            <p>Sick Leaves</p>
          </div>
          <div className="p-2 flex flex-col justify-center items-center
            rounded shadow-[1px_1px_3px] bg-orange-200 text-orange-800 font-semibold">
            <p className="font-bold text-2xl">5</p>
            <p>Casual Leaves</p>
          </div>
          <div className="p-2 flex flex-col justify-center items-center
            rounded shadow-[1px_1px_3px] bg-teal-200 text-teal-800 font-semibold">
            <p className="font-bold text-2xl">9</p>
            <p>Total leave hours</p>
          </div>
          <div className="p-2 flex flex-col justify-center items-center
            rounded shadow-[1px_1px_3px] bg-violet-200 text-violet-800 font-semibold">
            <p className="font-bold text-2xl">2</p>
            <p>On leave (Single day)</p>
          </div>
          <div className="p-2 flex flex-col justify-center items-center
            rounded shadow-[1px_1px_3px] bg-cyan-200 text-cyan-800 font-semibold">
            <p className="font-bold text-2xl">3</p>
            <p>On leave (Multi days)</p>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded shadow-[1px_1px_5px] shadow-gray-400 my-4">
          <div className="w-full overflow-x-auto text-gray-600">
            <h3 className="text-center py-2 font-bold tracking-wider">Leave Requests</h3>
            {filteredLeaves?.length === 0 ? <p className="text-center py-2 tracking-wider bg-gray-500 text-white">No leave requests found</p>
             : <table className="w-full min-w-150 text-sm">
                <thead className="bg-slate-300">
                    <tr>
                       <th className="py-2 cursor-pointer font-semibold">Name</th>
                       <th className=" py-2 font-semibold">Department</th>
                       <th className=" py-2 font-semibold">Designation</th>
                       <th className=" py-2 font-semibold">Leave Type</th>
                       <th className=" py-2 font-semibold cursor-pointer" onClick={toggleSort}>Duration <span>{isAscending ? '▼' : '▲'}</span></th>
                       <th className=" py-2 font-semibold">Status</th>
                       <th className=" py-2 font-semibold">Action</th> 
                    </tr>

                </thead>
                <tbody>
                   {filteredLeaves?.map((leave, index) =>
                        <tr key={leave.requestId}  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                          <td className="text-center py-2">{leave.employeeName}</td>
                          <td className="text-center py-2">{leave.department}</td>
                          <td className="text-center py-2">{leave.designation}</td>
                          <td className="text-center py-2">{leave.leaveType}</td>
                          <td className="text-center py-2">{leave.startDate} &rarr; {leave.endDate}</td>
                          <td className="text-center py-2">{leave.status}</td>
                          <td className="text-center py-2">
                              <button 
                                  type="button" 
                                  className="bg-gray-500 rounded text-white px-2 
                                  py-1 mr-2 hover:bg-gray-600 cursor-pointer text-xs"
                              >Accept</button>
                              <button 
                              type="button" 
                                  className='bg-red-500 rounded text-white text-xs 
                                  px-2 py-1 hover:bg-red-600 cursor-pointer' 
                                  >Reject</button>
                          </td>
                      </tr>
                   )}
                    
                </tbody>
            </table>}
        </div>
        </div>
        
    </div>
  )
}

export default LeaveManagement