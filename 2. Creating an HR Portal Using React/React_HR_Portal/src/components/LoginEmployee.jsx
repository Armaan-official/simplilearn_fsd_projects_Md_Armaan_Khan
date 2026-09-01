import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEmployees } from "../slices/EmployeeSlice";

function LoginEmployee() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const existingEmployees = useSelector(state => state.employees.employees || []);
    
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
  
    const [employee, setEmployee] = useState({
            username: '',
            password: '',
        });

    useEffect(() => {
        if (existingEmployees.length === 0) {
            dispatch(getEmployees());
        }
    },[dispatch, existingEmployees.length])

      const onOpenChange = () => {
          setIsOpen(prev => !prev)
          setError('');
      }
  

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
        setError('');
    };

    const handleSubmit = (e) => {
            e.preventDefault();

            const matchedEmployee = existingEmployees.find(
                emp => emp.username === employee.username.trim() &&
                    String(emp.password) === String(employee.password).trim()
            )

            if (!matchedEmployee) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('role');
                localStorage.removeItem('employeeId')
                setError('Invalid username or password');
                return;
            }

            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('role', 'Employee')
            localStorage.setItem('employeeId', String(matchedEmployee.id));
            navigate(`/employee/${matchedEmployee.id}`);
        };

  return (
    <div>
        <button
            type="button"  
            onClick={onOpenChange}
            className="bg-blue-400 rounded py-1 px-2 cursor-pointer
              text-white hover:bg-blue-500 
              font-semibold shadow-[1px_1px_3px] shadow-black"
        >Employee Login</button>
    {isOpen && <div className="fixed inset-0 z-50 flex items-center justify-center
             bg-black/40 backdrop-blur-sm p-4">
            <form 
            onSubmit={handleSubmit} 
            className="fixed top-10 w-100 bg-white flex flex-col justify-center gap-2 
                min-h-70 px-5 rounded-2xl overflow-hidden
                border-3 border-gray-300">
            <h1 className="font-bold">Employee Login</h1>
            <hr className="-mx-5 border border-slate-300"/>
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <label className="font-bold" htmlFor="name">Username</label>
            <input 
                type="text" 
                id="username" 
                name="username" 
                value={employee.username} 
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                required 
            />
            <label className="font-bold" htmlFor="password">Password</label>
             <input 
                type="password" 
                id="password" 
                name="password" 
                value={employee.password} 
                onChange={handleChange} 
                className="border rounded-md px-2 py-0.5"
                required 
            />
            
            <div className="bg-gray-300 -mx-5 -mb-6  mt-2 py-5 flex justify-center items-center gap-10">
                <button 
                    className="cursor-pointer shadow-[1px_1px_3px] shadow-black/60
                        px-2 py-1 rounded hover:bg-gray-200 text-sm"
                    type="button"
                    onClick={onOpenChange} 
                >Cancel</button>
                <button
                    type="submit" 
                    className="shadow-[1px_1px_3px] shadow-black/60 text-sm text-white 
                    px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 cursor-pointer"
                >Log In</button>
            </div>       
        </form>
        </div>}
        </div>
  )
}

export default LoginEmployee