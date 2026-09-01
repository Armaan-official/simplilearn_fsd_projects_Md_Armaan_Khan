
import { CalendarComponent } from "../components/hr-nested-components/Calender";
import DashboardCharts from "../components/hr-nested-components/DashboardCharts";


function Dashboard() {
  return (
    <div className="flex flex-col justify-center pt-5 md:pl-15 pl-2 pr-2 pb-10">
        <div className=" flex flex-wrap grow w-full pt-5 pb-2 justify-center items-center gap-2 mt-2">
        <div className="bg-linear-to-r from-blue-300 to-gray-300 w-full lg:w-fit md:text-xl rounded-lg shadow-[1px_1px_3px] shadow-gray-400 overflow-hidden">
        <h2 className="bg-linear-to-r from-gray-600 to-blue-800 bg-clip-text text-transparent font-bold mr-2 shrink-0 w-full  px-1.5 py-2 lg:py-7 text-center pl-2">Welcome To The HR Dashboard</h2>
        </div>
        <div className="w-fit h-fit flex-1 p-5 rounded-2xl flex flex-col justify-center 
          items-center shadow-[1px_1px_3px] shadow-black/60 text-emerald-800 font-bold bg-emerald-100">
          <p className="font-bold text-2xl">1,242</p>
          <p className="text-center text-sm">Total Employee</p>
        </div>
        <div className="w-fit h-fit flex-1 p-5 rounded-2xl flex flex-col justify-center 
          items-center shadow-[1px_1px_3px] shadow-black/60 bg-purple-100 text-purple-800 font-bold">
          <p className="font-bold text-2xl">15%</p>
          <p className="text-center text-sm">Turnover Rate</p>
        </div>
        <div className="w-fit h-fit flex-1 p-5 rounded-2xl flex flex-col justify-center 
          items-center shadow-[1px_1px_3px] shadow-black/60 bg-orange-100 text-orange-800 font-bold">
          <p className="font-bold text-2xl">85%</p>
          <p className="text-center text-sm">Happiness Rate</p>
        </div>
        <div className="w-fit h-fit flex-1 p-5 rounded-2xl flex flex-col justify-center 
          items-center shadow-[1px_1px_3px] shadow-black/60 bg-rose-100 text-rose-800 font-bold">
          <p className="font-bold text-2xl">60</p>
          <p className="text-center text-sm">Open Positions</p>
        </div>
        <div className="w-fit h-fit flex-1 p-5 rounded-2xl flex flex-col justify-center 
          items-center shadow-[1px_1px_3px] shadow-black/60 bg-mauve-200 text-mauve-700 font-bold">
          <p className="font-bold text-2xl">30K</p>
          <p className="text-center text-sm">Average Salary</p>
        </div>
        </div>

        <div className="lg:flex flex-col gap-2 ">
          <CalendarComponent />       
          <DashboardCharts />  
        </div>
    </div>
  )
}

export default Dashboard;