import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { attendanceMatrics, leaveDistribution, leaveRequestMatrics, workMatrics } from "../../components/hr-nested-components/DashboardDummyData";

function DashboardCharts() {
  return (
        <div className="grid grid-rows-1 md:grid-cols-2 gap-2">
          
          <div className="bg-gray-100  rounded shadow-[1px_1px_3px] shadow-black/60">
            <h3 className="text-center py-2 font-semibold">Monthly Employee Headcount & Attendance Trends</h3>
            <div className="flex-1 w-full h-83 py-2 pr-2 ">
          <ResponsiveContainer width='100%' height='90%'>
            <LineChart data={attendanceMatrics} width={600} height={300}>
            <Line 
              type='monotone' 
              dataKey='headcount' 
              stroke="#FB2C36" 
              strokeWidth={2} 
            />
              <Line 
              type='monotone' 
              dataKey='attendanceRate' 
              stroke="#155DFC" 
              strokeWidth={2} 
            />
              <CartesianGrid strokeDasharray='5 5' />
              <XAxis dataKey='month' />
              <YAxis />
              <Legend />
              <Tooltip />
          </LineChart>
          </ResponsiveContainer>   
        </div>
          </div>
          
        <div className="bg-gray-100 rounded shadow-[1px_1px_3px] shadow-black/60">
          <h3 className="text-center py-2 font-semibold">Leave Distribution by Category</h3>
          <div className="flex-1 w-full h-83 py-2 pr-2">
          <ResponsiveContainer width='100%' height='100%'>
          <PieChart width={600} height={300}>
            <Pie 
              data={leaveDistribution} 
              dataKey='value'
              label
            />
            <Legend />
            <Tooltip /> 
          </PieChart>
          </ResponsiveContainer>
        </div>
        </div>

        

        <div className="bg-gray-100 rounded shadow-[1px_1px_3px] shadow-black/60">
            <h3 className="text-center py-2 font-semibold">Hiring vs. Exits per quarter</h3> 
            <div className="flex-1 w-full h-83 py-2 pr-2 ">
            <ResponsiveContainer width='100%' height='100%'>
          <BarChart width={600} height={300} data={leaveRequestMatrics}>
            <Bar 
              dataKey='approved'
              fill='#10b981'
            />
            <Bar 
              dataKey='pending'
              fill='#f59e0b'
            />
            <Bar 
              dataKey='rejected'
              fill='#FB2C36'
            />
            <CartesianGrid strokeDasharray='5 5' />
            <XAxis dataKey='department' />
            <YAxis />
            <Tooltip />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
        </div>
        </div>
            
        <div className="bg-gray-100  rounded shadow-[1px_1px_3px] shadow-black/60">
          <h3 className="text-center py-2 font-semibold">Monthly Workforce Trends</h3>
          <div className="flex-1 w-full h-83 py-2 pr-2">
          <ResponsiveContainer width='100%' height='100%'>
          <AreaChart width={600} height={300} data={workMatrics}>
          <Area 
            dataKey='onsite' 
            type='monotone' 
            stroke="#00BBA7"
            fill="#00C950"
          />
          <Area 
            dataKey='remote' 
            type='monotone' 
            stroke="#2563eb"
            fill="#155DFC"
          />
          <Area 
            dataKey='leaves'
            type='monotone' 
            stroke="#ef4444"
            fill="#FF6467"
          />
          <Tooltip />
          <Legend />
          <XAxis dataKey='month' />
          <CartesianGrid strokeDasharray='5 5' />
          <YAxis />
          </AreaChart>
          </ResponsiveContainer>
        </div>
        </div>    
        </div>
  )
}

export default DashboardCharts