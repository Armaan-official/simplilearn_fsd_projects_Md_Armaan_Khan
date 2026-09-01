import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getEmployees } from "../slices/EmployeeSlice";
import {
  FaClock,
  FaSuitcaseRolling,
  FaComputer,
  FaBoxArchive,
} from "react-icons/fa6";
import { FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { BsBagPlus } from "react-icons/bs";
import { GoFileDirectoryFill } from "react-icons/go";

import { useState } from "react";
import Calendar from "react-calendar";

const css = `
.react-calendar {
  width: 100% !important;
  max-width: 100% !important;
  background: transparent !important;
  border: none !important;
  font-family: inherit !important;
}
.react-calendar__tile--now{
    background: none;
    color: blue !important;     
    font-weight: 700 !important;
}
.react-calendar__tile--active{
    background: none;
    color: #FFB900 !important;     
    font-weight: 700 !important;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
background: transparent !important;
}
.react-calendar__month-view__weekdays abbr {
  text-decoration: none !important;
}
`;

function EmployeeHome() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const employees = useSelector((state) => state.employees?.employees || []);

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(getEmployees());
    }
  }, [dispatch, employees.length]);

  const employee = employees.find((emp) => String(emp.id) === String(id));

  if (!employee) {
    return (
      <div>
        <p className="text-center pt-12 text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="pt-11 md:pl-15 pl-3 pr-3">
      <div className="bg-linear-to-r from-purple-300 to-blue-300 py-4 mb-2 rounded-lg">
      <h2 className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center text-lg md:text-2xl lg:text-4xl font-bold">
        Welcome, {employee.name}
      </h2>
      <div className="flex items-center justify-center my-4">
        <input
          type="text"
          placeholder="🔍︎   Search"
          className="bg-linear-to-r from-purple-100 to-blue-100 rounded-full px-2 py-1 md:w-100 lg:w-150"
        />
      </div>
      </div>
      <div className="grid bg-neutral-100 shadow-[1px_1px_3px] shadow-black/50 gap-2 w-full rounded-lg grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 md:px-3 px-6 py-3">
        <div className="bg-teal-100 text-teal-800 shadow-[1px_1px_3px] shadow-black/50 py-2 px-1 rounded-xl flex flex-col gap-4 items-center">
          <span className="text-3xl">
            <FaClock />
          </span>
          <p className="text-sm font-semibold">Time Sheets</p>
        </div>
        <div className="bg-blue-200 text-blue-800 shadow-[1px_1px_3px] shadow-black/50 py-2 px-1 rounded-xl flex flex-col gap-4 items-center">
          <span className="text-3xl">
            <FaSuitcaseRolling />
          </span>
          <p className="text-sm font-semibold">Time Off</p>
        </div>
        <div className="bg-rose-200 text-rose-800 shadow-[1px_1px_3px] shadow-black/50 py-2 px-1 rounded-xl flex flex-col gap-4 items-center">
          <span className="text-3xl">
            <FaDollarSign />
          </span>
          <p className="text-sm font-semibold">Expenses</p>
        </div>
        <div className="bg-amber-200 text-amber-800 shadow-[1px_1px_3px] shadow-black/50 py-2 px-1 rounded-xl flex flex-col gap-4 items-center">
          <span className="text-3xl">
            <FaCalendarAlt />
          </span>
          <p className="text-sm font-semibold">Holidays</p>
        </div>
        <div className="bg-violet-200 text-violet-800 shadow-[1px_1px_3px] shadow-black/50 py-2 px-1 rounded-xl flex flex-col gap-4 items-center">
          <span className="text-3xl">
            <BsBagPlus />
          </span>
          <p className="text-sm font-semibold">Benefits</p>
        </div>
        <div className="bg-orange-200 text-orange-800 shadow-[1px_1px_3px] shadow-black/50 py-2 px-1 rounded-xl flex flex-col gap-4 items-center">
          <span className="text-3xl">
            <GoFileDirectoryFill />
          </span>
          <p className="text-sm font-semibold">Directory</p>
        </div>
        <div className="bg-cyan-100 text-cyan-800 shadow-[1px_1px_3px] shadow-black/50 py-2 px-1 rounded-xl flex flex-col gap-4 items-center">
          <span className="text-3xl">
            <FaComputer />
          </span>
          <p className="text-sm font-semibold">IT Helpdesk</p>
        </div>
        <div className="bg-fuchsia-200 text-fuchsia-800 shadow-[1px_1px_3px] shadow-black/50 py-2 px-1 rounded-xl flex flex-col gap-4 items-center">
          <span className="text-3xl">
            <FaBoxArchive />
          </span>
          <p className="text-sm font-semibold">Products</p>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div
        className="bg-purple-50 px-5 py-2 rounded
            shadow-[1px_1px_3px] shadow-black/60 
            2xl:w-200 lg:w-120 md:w-90 w-full h-fit flex md:flex-row flex-col gap-2 my-3"
      >
        <style>{css}</style>
        <div className="flex flex-1 flex-col justify-center flex-wrap text">
          <h3
            className="font-bold text-neutral-800 mb-3 flex 
                items-center gap-2 justify-center text-lg"
          >
            <span>
              <FaCalendarAlt />
            </span>
            Company Calender
          </h3>
          <div className="flex justify-center text-sm">
            <Calendar onChange={setSelectedDate} value={selectedDate} />
          </div>
          <p className="text-xs text-neutral-500 mt-3 text-center">
            Selected:{" "}
            <span className="font-semibold text-neutral-800">
              {selectedDate.toDateString()}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 flex-1 my-3 px-2 ">
        <h3 className="font-extrabold text-gray-600 border-b-3 w-fit border-gray-600 mb-2">TOP RESOURCES</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        <div>
          <p className="flex flex-col px-1 justify-center items-center text-center h-30 rounded-lg text-sm font-semibold text-gray-800 bg-taupe-200 shadow-[1px_1px_3px] shadow-black/50"><span className="text-2xl">✏️</span>Request Forms</p>
        </div>
        <div>
          <p className="flex flex-col px-1 justify-center items-center text-center h-30 rounded-lg text-sm font-semibold text-gray-800 bg-taupe-200 shadow-[1px_1px_3px] shadow-black/50"><span className="text-2xl">📋</span>Applications</p>
        </div>
        <div>
          <p className="flex flex-col px-1 justify-center items-center text-center h-30 rounded-lg text-sm font-semibold text-gray-800 bg-taupe-200 shadow-[1px_1px_3px] shadow-black/50"><span className="text-2xl">🗂️</span>Templates</p>
        </div>
        <div>
          <p className="flex flex-col px-1 justify-center items-center text-center h-30 rounded-lg text-sm font-semibold text-gray-800 bg-taupe-200 shadow-[1px_1px_3px] shadow-black/50"><span className="text-2xl">💡</span>Projects</p>
        </div>
        <div>
          <p className="flex flex-col px-1 justify-center items-center text-center h-30 rounded-lg text-sm font-semibold text-gray-800 bg-taupe-200 shadow-[1px_1px_3px] shadow-black/50"><span className="text-2xl">📓</span>Employee Handbook</p>
        </div>
        <div>
          <p className="flex flex-col px-1 justify-center items-center text-center h-30 rounded-lg text-sm font-semibold text-gray-800 bg-taupe-200 shadow-[1px_1px_3px] shadow-black/50"><span className="text-2xl">📜</span>Policies & Procedures</p>
        </div>
        <div>
          <p className="flex flex-col px-1 justify-center items-center text-center h-30 rounded-lg text-sm font-semibold text-gray-800 bg-taupe-200 shadow-[1px_1px_3px] shadow-black/50"><span className="text-2xl">📈</span>Marketing Collateral</p>
        </div>
        <div>
          <p className="flex flex-col px-1 justify-center items-center text-center h-30 rounded-lg text-sm font-semibold text-gray-800 bg-taupe-200 shadow-[1px_1px_3px] shadow-black/50"><span className="text-2xl">📰</span>Newsletters</p>
        </div>
                   
        </div>
      </div>

      </div>
      <div className="flex w-full flex-wrap flex-col mb-4">
              <h3 className="font-extrabold text-gray-600 border-b-2 border-gray-600 w-fit mb-2">
                Social Corner
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 flex-col">
            <div className="flex flex-col flex-1 border border-gray-600 gap-2 py-2 px-2 rounded-lg w-full">
              <div className="flex justify-between pr-10 text-gray-600">
                <p className="font-bold">James Brown</p>
                <p className="font-semibold text-sm">3 months ago</p>
              </div>
              <p className="text-xs">
                Wishing a very Happy Easter to my dear colleagues! May you enjoy 
                this occasion with beautifully painted eggs and bunny chocolates. 
                We will be closed Monday. July 10th for an Easter weekend. Our 
                regular working hours will resume Tuesday.
              </p>
            </div>
            <div className="flex flex-col flex-1 border border-gray-600 gap-2 py-2 px-2 rounded-lg w-full">
              <div className="flex justify-between pr-10 text-gray-600">
                <p className="font-bold">Mohan Das</p>
                <p className="font-semibold text-sm">1 month ago</p>
              </div>
              <p className="text-xs">
                Relax, recover, and feel refreshed with a yoga session on 
                international yoga day. Whether you already have an established 
                home practice or this is your first yoga experience. Our instructors 
                will guide uou through a set of yoga poses.
              </p>
            </div>
              <div className="flex flex-col flex-1 border border-gray-600 gap-2 py-2 px-2 rounded-lg w-full">
              <div className="flex justify-between pr-10 text-gray-600">
                <p className="font-bold">Sabina Saetgareeva</p>
                <p className="font-semibold text-sm">26 days ago</p>
              </div>
              <p className="text-xs">
                Learn about our new product and watch our brand-new corporate 
                video over delicious brunch from Medina Cafel Share your ideas 
                for a project improvement and go-to-market strategy. See you at 
                10 am in conference room 12.
              </p>
            </div>
              </div>
            
          </div>
      
    </div>
  );
}

export default EmployeeHome;
