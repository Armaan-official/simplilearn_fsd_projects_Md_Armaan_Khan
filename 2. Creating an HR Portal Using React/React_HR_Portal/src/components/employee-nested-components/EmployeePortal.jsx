import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import EmployeeSidebar from './EmployeeSidebar';

function EmployeePortal() {
  return (
    <div>
      <Navbar/>
      <div>
          <EmployeeSidebar/>
          <div>
            <Outlet/>
          </div>         
      </div>
       
    </div>
  )
}

export default EmployeePortal;