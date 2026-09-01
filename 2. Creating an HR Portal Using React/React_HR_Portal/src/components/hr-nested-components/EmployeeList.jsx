import ListItem from "./ListItem";



function EmployeeList({filteredEmployees, isAscending, toggleSort}) {


      return (
        <div className="w-full overflow-hidden rounded shadow-[1px_1px_5px] shadow-gray-400">

        <div className="w-full overflow-x-auto text-gray-600">
            <h3 className="text-center py-2 font-bold tracking-wider">Employee List</h3>
            {filteredEmployees?.length === 0 ? <p className="text-center py-2 tracking-wider bg-gray-500 text-white">No employee records found</p> : <table className="w-full min-w-150 text-sm">
                <thead className="bg-slate-300">
                    <tr>
                       <th className="py-2 cursor-pointer" onClick={toggleSort}>Name <span>{isAscending ? '▼' : '▲'}</span></th>
                       <th className="py-2">Department</th>
                       <th className="py-2">Designation</th>
                       <th className="py-2">Email</th>
                       <th className="py-2">Action</th> 
                    </tr>

                </thead>
                <tbody>
                    {filteredEmployees?.map((employee, index) =>
                        <ListItem key={employee.id} employee={employee} index={index} />
                    )}
                </tbody>
            </table>}
        </div>
        </div>
      )
    }
    
    export default EmployeeList;