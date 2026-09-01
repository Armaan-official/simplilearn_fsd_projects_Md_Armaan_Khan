import { NavLink, useLocation, useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('role');
    const employeeId = localStorage.getItem('employeeId');
    const location = useLocation();
    const isHrPortalActive = location.pathname.startsWith('/hrportal')
    const isEmployeeActive = location.pathname.startsWith('/employee')

    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('role');
        localStorage.removeItem('employeeId');
        navigate('/', {replace: true});
    }

  return (
    <nav className="fixed z-30 flex justify-center gap-2 md:gap-20 items-center 
        py-1 bg-taupe-500 shadow-[0px_2px_3px] text-sm w-full shadow-taupe-600"> 
        <NavLink 
            to='/hrportal/dashboard'
            onClick={(e) => {if (role !== 'HR') {e.preventDefault()
                alert('Access denied!!')
            }}}
            className={`px-3 py-1 ${isHrPortalActive ? 
                'bg-mauve-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black font-bold'}`
            }
            >HR Portal</NavLink>
   
        <NavLink 
            onClick={(e) => {if (role !== 'Employee') {e.preventDefault()
                alert('Access denied!!')
            }}}
            to={ employeeId && `/employee/${employeeId}/home`} 
             className={`px-3 py-1 ${(isEmployeeActive && employeeId) ? 
                'bg-mauve-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                'text-black font-bold'}`
            }
        >Employee Portal</NavLink>
        
        {isLoggedIn ? 
            <button 
                type="button" 
                onClick={logout} 
                className="cursor-pointer text-black font-bold" 
            >Logout</button> :
            <NavLink 
                to='/' 
                className={({isActive}) =>
                    `px-3 py-1 ${(isActive) ? 
                    'bg-mauve-600 shadow-[0_0_3px] shadow-gray-800/80 rounded-full text-white' : 
                    'text-black font-bold'}`
                }
            >Login</NavLink>
            
        }
        

    </nav>
  )
}

export default Navbar;