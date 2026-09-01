import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginHR() {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
  
      const onOpenChange = () => {
          setIsOpen(prev => !prev)
      }

    const [hrInfo, setHrInfo] = useState({
            username: '',
            password: '',
        });
    

    const handleChange = (e) => {
        setHrInfo({
            ...hrInfo,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
            e.preventDefault();
            setIsOpen(false);
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('role', 'HR')
            navigate('/hrportal');
        };
  return (
    <div>
        <button 
            type="button" 
            onClick={onOpenChange}
            className="bg-blue-400 rounded py-1 px-2 cursor-pointer
              text-white hover:bg-blue-500
              font-semibold shadow-[1px_1px_3px] shadow-black"
        >HR Login</button>
    {isOpen && <div className="fixed inset-0 z-50 flex items-center justify-center
             bg-black/40 backdrop-blur-sm p-4">
            <form 
            onSubmit={handleSubmit} 
            className="fixed top-10 w-100 bg-white flex flex-col justify-center gap-2 
                min-h-70 px-5 rounded-2xl overflow-hidden
                border-3 border-gray-300">
            <h1 className="font-bold">HR Login</h1>
            <hr className="-mx-5 border border-slate-300"/>
            <label className="font-bold" htmlFor="name">Username</label>
            <input 
                type="text" 
                id="username" 
                name="username" 
                value={hrInfo.username} 
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                required 
            />
            <label className="font-bold" htmlFor="email">Password</label>
             <input 
                type="password" 
                id="password" 
                name="password" 
                value={hrInfo.password} 
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
                    className="shadow-[1px_1px_5px] shadow-black/90 text-sm text-white 
                    px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 cursor-pointer"
                >Log In</button>
            </div>       
        </form>
        </div>}
        </div>
  )
}

export default LoginHR