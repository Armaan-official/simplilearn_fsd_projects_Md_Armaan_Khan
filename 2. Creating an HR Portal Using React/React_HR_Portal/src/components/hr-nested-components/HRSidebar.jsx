import { NavLink } from "react-router-dom"
import { MdOutlineSpaceDashboard, MdGroups, MdOutlinePayment, MdPolicy } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock, FaUniversalAccess } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


function HRSidebar() {
  const [toggleBar, setToggleBar] = useState(false)

  const handleToggle = () => {
    setToggleBar(prev => !prev)
  }

  return (
    <div>
        <nav className="group hidden fixed top-0 left-0 py-6 px-2 md:flex flex-col gap-6 text-sm 
        bg-mauve-400 hover:w-64 w-12 pt-15 h-screen transition-all 
        duration-500 ease-in-out overflow-hidden overflow-y-auto">
        <NavLink 
            to='dashboard'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><MdOutlineSpaceDashboard/></span>
            <span className="px-2 py-1 hidden group-hover:block 
            transition-block duration-200 
            ease-in-out whitespace-nowrap">Dashboard</span>
        </NavLink>
        <NavLink 
            to='employee-directory'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><IoIosPerson /></span>
            <span className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Employee Directory</span>
        </NavLink>
        <NavLink 
            to='manage-leave'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-2 "><FaCalendarAlt/></span>
            <span className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Leave Management</span>
        </NavLink>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full  
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaClock /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Attendance Logs</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-xl"><MdGroups /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Department & Teams</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><MdOutlinePayment /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Payroll processing</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full  
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><GoGoal /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block group-hover:opacity-100 opacity-0
            ease-in-out whitespace-nowrap">Performance & Goals</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-xl"><MdPolicy /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Documents & policies</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaUniversalAccess /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Role & Access Controls</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><IoSettings /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Portal Settings</p>
        </div>
    </nav>

    <div>
        <button type="button" onClick={handleToggle} className="pt-12 fixed pl-3 z-10 md:hidden">
        <GiHamburgerMenu />
        </button>

        {toggleBar && <nav className="group fixed top-0 left-0 py-6 px-2 flex flex-col gap-6 text-sm 
        bg-mauve-400 hover:w-64 w-12 pt-20 h-screen transition-all 
        duration-500 ease-in-out overflow-hidden overflow-y-auto">
        <NavLink 
            to='dashboard'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><MdOutlineSpaceDashboard/></span>
            <span className="px-2 py-1 hidden group-hover:block 
            transition-block duration-200 
            ease-in-out whitespace-nowrap">Dashboard</span>
        </NavLink>
        <NavLink 
            to='employee-directory'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><IoIosPerson /></span>
            <span className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Employee Directory</span>
        </NavLink>
        <NavLink 
            to='manage-leave'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-2 "><FaCalendarAlt/></span>
            <span className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Leave Management</span>
        </NavLink>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full  
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaClock /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Attendance Logs</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-xl"><MdGroups /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Department & Teams</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><MdOutlinePayment /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Payroll processing</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full  
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><GoGoal /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block group-hover:opacity-100 opacity-0
            ease-in-out whitespace-nowrap">Performance & Goals</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-xl"><MdPolicy /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Documents & policies</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaUniversalAccess /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Role & Access Controls</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><IoSettings /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Portal Settings</p>
        </div>
    </nav>}
    </div>
    </div>
    
  )
}

export default HRSidebar