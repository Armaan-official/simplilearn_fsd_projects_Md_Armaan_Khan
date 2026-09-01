import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { editEmployees, getEmployees } from "../slices/EmployeeSlice";

function LeaveApplication() {
    const dispatch = useDispatch();

    const currentUserId = localStorage.getItem('employeeId');

    const existingEmployees = useSelector(state => state.employees?.employees || []);
    
    useEffect(() => {
        if (existingEmployees.length === 0) {
            dispatch(getEmployees());
        }
    },[dispatch, existingEmployees.length])

    const currentUser = existingEmployees.find(
        emp => String(emp.id) === String(currentUserId)
    );

    const [leaveForm, setLeaveForm] = useState({
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: ''
    })

    const handleChange = (e) => {
        setLeaveForm({
            ...leaveForm,
            [e.target.name]: e.target.value
        })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newLeaveRecord = {
            requestId: Date.now().toString(),
            ...leaveForm,
            status: 'Pending',
            appliedAt: new Date().toISOString(),
        }

        const updatedLeaveList = [
            ...(currentUser.leaveList || []),
            newLeaveRecord,
        ]


        try {
                dispatch(editEmployees({
                    id: currentUser.id,
                    newInfo: {
                        ...currentUser,
                        leaveList: updatedLeaveList,
                    } 
                })
                ).unwrap();
            } catch(err) {
                alert(err.message)
            }
        setLeaveForm({
            leaveType: '',
            startDate: '',
            endDate: '',
            reason: ''
        })
    };

    if (!currentUser) {
        return (
            <div className="pt-12 text-center">Loading...</div>
        )
    };

    
    

  return (
    <div className='md:pl-15 pr-3 pl-3  pt-10 text-gray-600'>
    <div className="flex flex-col lg:flex-row justify-around gap-4">
        <form 
            onSubmit={handleSubmit}
            className='border border-gray-400 rounded w-full md:mt-2 lg:mb-3 flex justify-center lg:justify-between flex-col
                p-5 gap-2'
        >
            <h2 className='font-bold text-lg text-gray-800'>Apply For Leave</h2>
            <label htmlFor="name" className='font-semibold text-gray-800'>Name</label>
            <input 
                type="text"
                id='name'
                name='name'
                value={currentUser.name}
                className='border rounded px-2 py-0.5'
                disabled
            />
            <label htmlFor="department" className='font-semibold text-gray-800'>Department</label>
            <input 
                type="text"
                id='department'
                name='department'
                value={currentUser.department}
                className='border rounded px-2 py-0.5'
                disabled
            />
            <label htmlFor="leaveType" className='font-semibold text-gray-800'>Leave Type</label>
            <select 
                name="leaveType" 
                id="leaveType"
                required
                value={leaveForm.leaveType}
                onChange={handleChange}
                className='border rounded px-2 py-0.5'
            >
                <option >Select Leave Type</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Earned/ Annual Leave">Earned/ Annual Leave</option>
                <option value="Floating Holiday">Floating Holiday</option>
            </select>
            <label htmlFor="startDate" className='font-semibold text-gray-800'>Start Date</label>
            <input 
                type="date"
                id='startDate'
                name='startDate'
                required
                value={leaveForm.startDate}
                onChange={handleChange}
                className='border rounded px-2 py-0.5'
            />
            <label htmlFor="endDate" className='font-semibold text-gray-800'>End Date</label>
            <input 
                type="date"
                id='endDate'
                name='endDate'
                required
                value={leaveForm.endDate}
                onChange={handleChange}
                className='border rounded px-2 py-0.5'
            />
            <label htmlFor="reason" className='font-semibold text-gray-800'>Reason</label>
            <textarea 
                name="reason" 
                id="reason"
                rows='3'
                required
                value={leaveForm.reason}
                onChange={handleChange}
                className='border rounded px-2 py-0.5'
            />
            <button
                type='submit'
                className='w-full bg-blue-500 hover:bg-blue-600 text-white
                 py-2 rounded-xl cursor-pointer text-sm mt-3'
            >
                Submit Leave Request
            </button>         
        </form>
        <div className="border border-gray-400 rounded px-2 sm:px-5 mb-3 py-4 w-full md:mt-2">
            <div className="flex flex-col gap-4">
            <h3 className="font-bold pl-2 text-gray-800">Leave Balance Summary Card</h3>
            <div className="bg-linear-to-b from-amber-50 via-amber-100 to-amber-200/80 text-amber-800 border-amber-300 grid text-center text-sm grid-cols-4 gap-2 sm:gap-3 border rounded-lg py-1 px-2">               
                    <p className="text-left font-semibold">Type</p>
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold">Used</p>
                    <p className="font-semibold">Available</p>                       
                    <hr className="col-span-4" />
                    <p className="text-left">Casual Leave</p>
                    <p>10</p>
                    <p>4</p>
                    <p>6</p>
                    <p className="text-left">Sick Leave</p>
                    <p>8</p>
                    <p>3</p>
                    <p>5</p>
                    <p className="text-left">Earned/ Annual Leave</p>
                    <p>6</p>
                    <p>3</p>
                    <p>3</p>
                    <p className="text-left">Floating Holiday</p>
                    <p>2</p>
                    <p>1</p>
                    <p>1</p>
                
            </div>
            </div>
            <div className="py-3 px-1 flex flex-col gap-2">
            <h3 className="font-bold text-gray-800 pl-2">Company Leave Policy</h3>
            <div className="bg-olive-100 border border-olive-400 text-olive-700 rounded-lg py-2 pl-4">
            <p className="font-semibold text-sm pb-2">Notice & Approval</p>
            <ul className="list-disc pl-2 space-y-1 list-outside text-xs font-semibold">
                <li className="">Casual & Earned Leave: Submit requests at least 3 business days in advance via the portal for manager sign-off.</li>
                <li>Medical / Sick Leave: Can be applied on the day of absence. Consecutive sick leave of 3 or more days requires a medical certificate.</li>
                <li>Floating Holidays: May be used for cultural, religious, or personal observances with 48 hours' prior notice.</li>
            </ul>
            <p className="font-semibold text-sm pt-4 pb-2">Carry-Forward Rules</p>
            <ul className="list-disc pl-2 list-outside space-y-1 text-xs font-semibold">
            <li>Up to 5 unused Earned Leave days may roll over into the following calendar year.</li>
            <li>Casual, Sick, and Floating Holidays follow a "use it or lose it" policy and expire on December 31st.</li>
            </ul>
            </div>
            </div>
            
            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-gray-800 pl-2">Upcoming Holidays</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                <div className='bg-teal-100 shadow-[1px_1px_3px] flex flex-col justify-center items-center py-8 rounded-lg'>
                    <p className='text-teal-700'>Friday</p>
                    <p className='font-semibold text-teal-900 text-lg'>2 Oct</p>
                    <p className="text-xs text-center">Mahatma Gandhi Jayanti</p>
                </div>
                <div className='bg-teal-100 shadow-[1px_1px_3px] flex flex-col justify-center items-center py-8 rounded-lg'>
                    <p className='text-teal-700'>Tuesday</p>
                    <p className='font-semibold text-teal-900 text-lg'>20 Oct</p>
                    <p className="text-xs text-center">Dussehra</p>
                </div>
                <div className='bg-teal-100 shadow-[1px_1px_3px] flex flex-col justify-center items-center py-8 rounded-lg'>
                    <p className='text-teal-700'>Sunday</p>
                    <p className='font-semibold text-teal-900 text-lg'>8 Nov</p>
                    <p className="text-xs text-center">Diwali</p>
                </div>
                <div className='bg-teal-100 shadow-[1px_1px_3px] flex flex-col justify-center items-center py-8 rounded-lg'>
                    <p className='text-teal-700'>Thursday</p>
                    <p className='font-semibold text-teal-900 text-lg'>26 Nov</p>
                    <p className="text-xs text-center">Company Wellness Day</p>
                </div>
                <div className='bg-teal-100 shadow-[1px_1px_3px] flex flex-col justify-center items-center py-8 rounded-lg'>
                    <p className='text-teal-700'>Friday</p>
                    <p className='font-semibold text-teal-900 text-lg'>25 Dec</p>
                    <p className="text-xs text-center">Christmas Day</p>
                </div>
                <div className='bg-teal-100 shadow-[1px_1px_3px] flex flex-col justify-center items-center py-8 rounded-lg'>
                    <p className='text-teal-700'>Friday</p>
                    <p className='font-semibold text-teal-900 text-lg'>Jan 1</p>
                    <p className="text-xs text-center">New Year's Day</p>
                </div>
                </div>
            </div>
        </div>
    </div>
        <div className="w-full overflow-hidden rounded shadow-[1px_1px_5px] shadow-gray-400 mb-4">
            <h3 className="text-center py-2 font-bold tracking-wider">My Leave History</h3>
          {(currentUser?.leaveList || []).length === 0 ? <p className="text-center py-2 tracking-wider bg-gray-500 text-white">No leave history found</p> : <div className="w-full overflow-x-auto">
            <table className="w-full min-w-150 text-sm">
                <thead className="bg-slate-300">
                    <tr>
                       <th className="py-2 font-semibold">Leave Type</th>
                       <th className=" py-2 font-semibold">Start Date</th>
                       <th className=" py-2 font-semibold">End Date</th>
                       <th className=" py-2 font-semibold">Reason</th> 
                       <th className=" py-2 font-semibold">Status</th> 
                       <th className=" py-2 font-semibold">Action</th> 
                    </tr>

                </thead>
                <tbody>
                   {currentUser?.leaveList.map((leave, index) => 
                        <tr key={leave.requestId}  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                          <td className="text-center py-2">{leave.leaveType}</td>
                          <td className="text-center py-2">{leave.startDate}</td>
                          <td className="text-center py-2">{leave.endDate}</td>
                          <td className="text-center py-2">{leave.reason}</td>
                          <td className="text-center py-2">{leave.status}</td>
                          <td className="text-center py-2">
                              <button 
                                  type="button" 
                                  className="bg-gray-500 rounded text-white px-2 
                                  py-1 mr-2 hover:bg-gray-600 cursor-pointer text-xs"
                              >Withdraw</button>
                          </td>
                      </tr>
                   )}
                    
                </tbody>
            </table>
        </div>}
        </div>
    </div>
  )
}

export default LeaveApplication