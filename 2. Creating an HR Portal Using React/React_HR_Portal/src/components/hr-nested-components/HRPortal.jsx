import { Outlet } from 'react-router-dom';
import HRSidebar from './HRSidebar';
import Navbar from '../Navbar';

function HRPortal() {
  return (
    <div className='min-h-screen w-full overflow-x-scroll flex flex-col'>
      <Navbar/>
      <div className='flex-1 w-full min-w-0'>
        <div className='relative z-20'>
          <HRSidebar/>

        </div>
          <div>
            <Outlet/>
          </div>         
      </div>
       
    </div>
  )
}

export default HRPortal;