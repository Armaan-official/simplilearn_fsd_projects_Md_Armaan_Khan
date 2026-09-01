import { NavLink } from "react-router-dom"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome, IoSettings } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaCalendarAlt, FaMoneyCheck, FaBook } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaClock, FaFolderClosed } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { MdOutlineHelp } from "react-icons/md";


function EmployeeSidebar() {
    const [toggleBar, setToggleBar] = useState(false)
    
      const handleToggle = () => {
        setToggleBar(prev => !prev)
      }

  return (
    <div>
        <nav className="group fixed hidden top-0 left-0 py-6 px-2 md:flex flex-col gap-6 text-sm 
        bg-mauve-400 hover:w-64 w-12 pt-15 h-screen transition-all 
        duration-500 ease-in-out overflow-hidden overflow-y-auto">
        <NavLink 
            to='home'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><IoHome /></span>
            <span className="px-2 py-1 hidden group-hover:block 
            transition-block duration-200 
            ease-in-out whitespace-nowrap">Home</span>
        </NavLink>
        <NavLink 
            to='profile'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><ImProfile /></span>
            <span className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">My Profile</span>
        </NavLink>
        <NavLink 
            to='apply-for-leave'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><FaCalendarAlt /></span>
            <span className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">My Leaves</span>
        </NavLink>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full  
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><RiTeamFill /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Team Directory</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaClock /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">My Timesheet/Clock-In</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaMoneyCheck /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Payslips/Compensation</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full  
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><GoGoal /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block group-hover:opacity-100 opacity-0
            ease-in-out whitespace-nowrap">My Goals</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaFolderClosed /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">My Documents</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaBook /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Company Handbook</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><IoSettings /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Account Settings</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><MdOutlineHelp /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Help Desk/HR Support</p>
        </div>
    </nav>

    <div>
            <button type="button"  onClick={handleToggle} className="pt-12 fixed pl-3 z-10 md:hidden">
            <GiHamburgerMenu />
            </button>

            {toggleBar && <nav className="group fixed top-0 left-0 py-6 px-2 flex flex-col gap-6 text-sm 
        bg-mauve-400 hover:w-64 w-12 pt-20 h-screen transition-all 
        duration-500 ease-in-out overflow-hidden overflow-y-auto">
        <NavLink 
            to='home'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><IoHome /></span>
            <span className="px-2 py-1 hidden group-hover:block 
            transition-block duration-200 
            ease-in-out whitespace-nowrap">Home</span>
        </NavLink>
        <NavLink 
            to='profile'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><ImProfile /></span>
            <span className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">My Profile</span>
        </NavLink>
        <NavLink 
            to='apply-for-leave'
            className={({isActive}) =>
                `flex justify-start items-center h-8 w-8 group-hover:w-full ${isActive ? 
                'bg-gray-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black hover:bg-gray-400 rounded-full'}`
            } 
        >
            <span className="px-1.5 text-lg"><FaCalendarAlt /></span>
            <span className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">My Leaves</span>
        </NavLink>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full  
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><RiTeamFill /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Team Directory</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaClock /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">My Timesheet/Clock-In</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaMoneyCheck /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Payslips/Compensation</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full  
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><GoGoal /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block group-hover:opacity-100 opacity-0
            ease-in-out whitespace-nowrap">My Goals</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaFolderClosed /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">My Documents</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><FaBook /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Company Handbook</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><IoSettings /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Account Settings</p>
        </div>
        <div className="flex justify-start items-center h-8 w-8 group-hover:w-full 
            hover:bg-gray-400 rounded-full cursor-pointer">
            <span className="px-1.5 text-lg"><MdOutlineHelp /></span>
            <p className="px-2 py-1 hidden 
            group-hover:block
            ease-in-out whitespace-nowrap">Help Desk/HR Support</p>
        </div>
    </nav>}
    </div>
    </div>
    
  )
}

export default EmployeeSidebar