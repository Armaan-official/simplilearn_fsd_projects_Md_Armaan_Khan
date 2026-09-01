import AddEmployee from '../components/hr-nested-components/AddEmployee'
import EmployeeList from '../components/hr-nested-components/EmployeeList'
import { startOfWeek, addDays, format, isSameDay, isToday } from 'date-fns'
import { LuChevronsLeftRight } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import CardsForDirectory from '../components/hr-nested-components/CardsForDirectory';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../slices/EmployeeSlice';
import { useEffect, useMemo, useState } from 'react';


function EmployeeDirectory() {
  
  const weekDays = (baseDate = new Date()) => {
    const monday = startOfWeek(baseDate, {weekStartsOn: 1})

    return Array.from({length: 5}, (_, i) => {
      const day = addDays(monday, i)
      return {
        dayName: format(day, 'EEE'),
        dateNumber: format(day, 'd'),
        month: format(day, 'MMMM'),
        isToday: isSameDay(day, new Date()),
      }
    })
  }

  const currmonth = new Date().toLocaleDateString('en-US', {month: 'long'});

  
  const dispatch = useDispatch();
  const existingEmployees = useSelector(state => state.employees?.employees || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAscending, SetIsAscending] = useState(true);

  const toggleSort = () => {
    SetIsAscending(prev => !prev)
  }
  
  useEffect(() => {
      if (existingEmployees.length === 0) {
          dispatch(getEmployees());
        }
  },[dispatch, existingEmployees.length])

  const filteredEmployees = useMemo(() => { 
    const term = String(searchTerm).toLowerCase().trim()
    let list = existingEmployees.filter(emp =>
      !term ||
      emp.name?.toLowerCase().includes(term) || 
      emp.department?.toLowerCase().includes(term) ||
      emp.designation?.toLowerCase().includes(term) ||
      emp.email?.toLowerCase().includes(term)
    )

    return [...list].sort((a,b) => {
      const nameA = a.name || '';
      const nameB = b.name || '';

      return isAscending
       ? nameA.localeCompare(nameB)
       : nameB.localeCompare(nameA)
    })
  },[existingEmployees, searchTerm, isAscending])

  if (!filteredEmployees) {
        return (
            <div className="text-center pt-12">Loading...</div>
        )
    };
 

  return (
    <div className='md:pl-15 pl-3 pr-3 py-5'>
      <div className="flex flex-col lg:flex-row items-center mt-6">
        <div className='bg-linear-to-r from-slate-200 to-orange-100 w-full lg:w-fit xl:shrink-0 mr-2 rounded-lg overflow-hidden shadow-[1px_1px_3px] shadow-gray-400'>
        <h2 className='bg-linear-to-r from-orange-700 to-slate-600 bg-clip-text text-transparent font-bold px-1.5 py-2 lg:py-10 text-center md:text-xl pl-2'>Manage Employee</h2>
        </div>
        <CardsForDirectory/>         
      </div>
      <div className='w-full flex gap-5 flex-col md:flex-row mt-3'>
          <div className='flex flex-1 flex-col bg-emerald-100 lg:max-w-100 shadow-[1px_1px_3px] shadow-gray-400 justify-center 
            items-center gap-4 p-3 rounded-lg'>
            <div className='flex w-full justify-between px-2'>
            <h3 className='font-bold flex-wrap flex gap-2 items-center text-teal-800'>Schedule Calendar <span className='pt-1'><LuChevronsLeftRight/></span></h3>
            <p className='flex flex-wrap-reverse items-center gap-2 text-teal-600 font-semibold'><FaCalendarAlt />{currmonth}</p>
            </div>
            <div className='gap-1 w-full text-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-center px-2 py-2'>
              {weekDays().map(day =>
                <div key={day.dayName} className={`${day.isToday ? 'bg-teal-500 shadow-[0_0_5px]' : 'bg-teal-200'} px-4 py-6 rounded-lg`}>
                  <p className='text-xs text-teal-700'>{day.dayName}</p>
                  <p className='font-semibold text-teal-900'>{day.dateNumber}</p>
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-1 flex-col bg-cyan-200 rounded-lg p-3 shadow-[1px_1px_3px] shadow-gray-400'>
            <div className='flex justify-between font-semibold px-2'>
              <h3 className='font-extrabold text-cyan-800 text-lg'>New Applicants</h3>
              <p className='bg-cyan-400 text-cyan-900 flex items-center py-0.5 rounded px-1 shadow-[1px_1px_3px] shadow-gray-400 text-xs'>View All</p>
            </div>
            <div className='mt-2 grid grid-cols-1 lg:grid-cols-3 gap-y-2 gap-x-2 
              bg-cyan-100 rounded-lg shadow-[1px_1px_3px] shadow-gray-400 py-0.5 px-2'>
              <div className='flex justify-between px-2 py-1'>
                <div>
                <p className='font-bold text-cyan-700'>Mike Tyson</p>
                <p className='text-sm text-cyan-600'>Applied for: IOS Developer</p>
                </div>
                <div className='flex gap-4 items-center pt-1'>
                  <p className='text-sm text-cyan-500'><MdEmail /></p>
                  <p className='text-sm text-cyan-500'><FaPhoneFlip /></p>
                </div>
              </div>
              <div className='flex justify-between px-2 py-1'>
                <div>
                <p className='font-bold text-cyan-700'>Zara Thomas</p>
                <p className='text-sm text-cyan-600'>Applied for: Content Designer</p>
                </div>
                <div className='flex gap-4 items-center pt-1'>
                  <p className='text-sm text-cyan-500'><MdEmail /></p>
                  <p className='text-sm text-cyan-500'><FaPhoneFlip /></p>
                </div>
              </div>
              <div className='flex justify-between px-2 py-1'>
                <div>
                <p className='font-bold text-cyan-700'>Neenu Abraham</p>
                <p className='text-sm text-cyan-600'>Applied for: Content Designer</p>
                </div>
                <div className='flex gap-4 items-center pt-1'>
                  <p className='text-sm text-cyan-500'><MdEmail /></p>
                  <p className='text-sm text-cyan-500'><FaPhoneFlip /></p>
                </div>
              </div>
              <div className='flex justify-between px-2 py-1'>
                <div>
                <p className='font-bold text-cyan-700'>John Samuel</p>
                <p className='text-sm text-cyan-600'>Applied for: IOS Developer</p>
                </div>
                <div className='flex gap-4 items-center pt-1'>
                  <p className='text-sm text-cyan-500'><MdEmail /></p>
                  <p className='text-sm text-cyan-500'><FaPhoneFlip /></p>
                </div>
              </div>
              <div className='flex justify-between px-2 py-1'>
                <div>
                <p className='font-bold text-cyan-700'>Peter Adams</p>
                <p className='text-sm text-cyan-600'>Applied for: UI/UX Designer</p>
                </div>
                <div className='flex gap-4 items-center pt-1'>
                 <p className='text-sm text-cyan-500'><MdEmail /></p>
                  <p className='text-sm text-cyan-500'><FaPhoneFlip /></p>
                </div>
              </div>
              <div className='flex justify-between px-2 py-1'>
                <div>
                <p className='font-bold text-cyan-700'>Tom Cooper</p>
                <p className='text-sm text-cyan-600'>Applied for: IOS Developer</p>
                </div>
                <div className='flex gap-4 items-center pt-1'>
                 <p className='text-sm text-cyan-500'><MdEmail /></p>
                <p className='text-sm text-cyan-500'><FaPhoneFlip /></p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div>
        <div className='flex gap-5 items-center'>
        <AddEmployee/>
        <div className="flex flex-1 justify-center items-center">
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='🔍︎  Search' 
              className="border-2 h-8 px-2 py-1 w-full
            border-gray-400 rounded-xl text-xs md:text-sm font-semibold"   
            />
          </div>
        </div>
        <EmployeeList filteredEmployees={filteredEmployees} isAscending={isAscending} toggleSort={toggleSort} />
      </div>
    </div>
  )
}

export default EmployeeDirectory