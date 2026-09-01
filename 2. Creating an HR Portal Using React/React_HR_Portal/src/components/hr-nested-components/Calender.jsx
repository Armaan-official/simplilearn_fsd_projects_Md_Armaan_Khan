import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt } from "react-icons/fa";

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
`


export function CalendarComponent() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="bg-purple-50 p-5 rounded 
            shadow-[1px_1px_3px] shadow-black/60 
            w-full flex md:flex-row flex-col gap-2 mt-1 mb-2">
                <style>{css}</style>
                <div className="flex flex-1 flex-col justify-center flex-wrap text">
            <h3 
                className="font-bold text-neutral-800 mb-3 flex 
                items-center gap-2 justify-center text-lg">
                    <span><FaCalendarAlt/></span>Company Calender</h3>
            <div className="flex justify-center">
                <Calendar 
                    onChange={setSelectedDate}
                    value={selectedDate}
                />
            </div>
            <p 
                className="text-xs text-neutral-500 mt-3 text-center"
            >Selected: <span className="font-semibold text-neutral-800">
                {selectedDate.toDateString()}</span></p>

                </div>
                <div className="border-gray-400 border" ></div>
                <div className="flex flex-1 justify-center">
                    <div className="flex flex-col justify-center gap-12">
                    <p className="flex flex-wrap text-gray-500">9:00 AM to 9:30 AM</p>
                    <p className="flex flex-wrap text-gray-500">10:00 AM to 10:00 AM</p>
                    <p className="flex flex-wrap text-gray-500">11:30 AM to 12:30 PM</p>
                     <p className="flex flex-wrap text-gray-500">15:30 PM to 16:30 PM</p>
                </div>
                <div className="border border-gray-400 mx-2 my-1"></div>
                <div className="flex flex-col p-2 gap-6 justify-center">
                    <div>
                        <p className="font-semibold py-1">Morning Briefing</p>
                        <p className="bg-blue-200 text-xs text-blue-600 py-0.5 px-1.5 w-fit rounded-2xl">All Departments</p>
                    </div>
                    <div>
                        <p className="font-semibold py-1">Project Review Meeting</p>
                        <p className="bg-red-200 text-xs text-red-600 py-0.5 px-1.5 w-fit rounded-2xl">Product Delevopment</p>
                    </div>
                    <div>
                        <p className="font-semibold py-1">Marketing Strategy Session</p>
                        <p className="bg-red-200 text-xs text-red-600 py-0.5 px-1.5 w-fit rounded-2xl">Marketing</p>
                    </div>
                     <div>
                        <p className="font-semibold py-1">Product deployment</p>
                        <p className="bg-red-200 text-xs text-red-600 py-0.5 px-1.5 w-fit rounded-2xl">Engineering & Tech</p>
                    </div>
                </div>
                </div>
                
                
        </div>
    )
}