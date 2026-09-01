import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getEmployees } from '../slices/EmployeeSlice';
import { GiPodiumWinner } from "react-icons/gi";
import { FaBug } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { RiSpaceShip2Fill } from "react-icons/ri";
import { GiPathDistance } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { GiClassicalKnowledge } from "react-icons/gi";
import { GiMountainClimbing } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdHotelClass } from "react-icons/md";
import { SiBackbonedotjs } from "react-icons/si";


function EmployeeProfile() {
  const {id} = useParams();
  const dispatch = useDispatch();

  const employees = useSelector(state => state.employees?.employees || []);

  useEffect(() => {
    if(employees.length === 0) {
      dispatch(getEmployees());
    }
  },[dispatch, employees.length])

  const employee = employees.find((emp => String(emp.id) === String(id)));

  const displayCharacters = () => {
    if (!employee) return <p>Loading</p>
    const splitName = employee.name.split(' ');
    if (splitName.length === 1) return splitName[0].slice(0,2).toUpperCase();
    return splitName.map(word => word.slice(0,1)).join('').toString(); 
  }
  


  if (!employee) {
    return (
      <div>
        <p className='text-center pt-12 text-2xl'>Loading...</p>
      </div>
    )
  }


  return (
    <div className='pt-12 md:pl-15 pl-3 pr-3'>
      <h2 className='text-center text-2xl lg:text-4xl font-bold rounded-tl-lg rounded-tr-lg pt-2 text-gray-600 bg-linear-to-r from-orange-200/70 via-green-200/50 to-blue-200/80'>My Profile</h2>
      <div className='flex text-gray-800 bg-linear-to-r from-orange-200/70 via-green-200/50 to-blue-200/80 gap-4 flex-wrap md:flex-nowrap rounded-tl-none rounded-tr-none rounded-lg w-full'>
        <div className='flex flex-wrap justify-evenly items-center gap-10 p-2'>       
          <div className='flex flex-col w-full items-center gap-2'>
          <p className='border-2 border-gray-300 rounded-full w-40 h-40 flex justify-center items-center text-5xl bg-linear-to-r from-orange-50/70 via-green-50/50 to-blue-50/80'>{displayCharacters()}</p>                  
          <p className='text-2xl font-bold'>{employee.name}</p>
          <p>Id: {employee.id}</p>
          <p>Contact Number: {employee.phone}</p>
          <p>Email: {employee.email}</p>
          </div>
          <div className='flex gap-4'>
            <p className='bg-gray-600 rounded-full px-3 py-1 text-white text-sm flex justify-center items-center'>Edit Profile</p>
            <p className='bg-white rounded-full px-3 py-1 border text-sm flex justify-center items-center'>Settings</p>
          </div>
        </div>
        <div className='flex w-full flex-col lg:flex-row'>
        <div className='flex w-full flex-col gap-4 justify-between items-start px-4 py-6'>
        <div>
          <p className='font-semibold flex pb-2 pl-2'>Current Role</p>
          <p className='border rounded-full px-3'>Full Stack Developer</p>
        </div>
        <div>
          <p className='font-semibold flex pb-2 pl-2'>Current Status</p>
          <p className='border rounded-full px-3 w-fit'>Active</p>
        </div>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold pl-2'>Skills</p>
            <div className='flex gap-2 flex-wrap'>
              <p className='border rounded-full px-4'>HTML</p>
              <p className='border rounded-full px-4'>CSS</p>
              <p className='border rounded-full px-4'>JS</p>
              <p className='border rounded-full px-4'>REACT</p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col px-4 py-6'>
          <p className='font-semibold flex pb-6 pl-2'>Badges</p>
          <div className='grid grid-cols-4 gap-4 pl-2 text-2xl'>
          <p className='w-fit p-3 rounded-lg text-blue-800 bg-blue-300'><GiPodiumWinner /></p>
          <p className='w-fit p-3 rounded-lg text-gray-800 bg-gray-300'><FaBug /></p>
          <p className='w-fit p-3 rounded-lg text-blue-800 bg-blue-300'><GiStairsGoal /></p>
          <p className='w-fit p-3 rounded-lg text-blue-800 bg-blue-300'><RiSpaceShip2Fill /></p>
          <p className='w-fit p-3 rounded-lg text-gray-800 bg-gray-300'><GiPathDistance /></p>
          <p className='w-fit p-3 rounded-lg text-gray-800 bg-gray-300'><FaLightbulb /></p>
          <p className='w-fit p-3 rounded-lg text-gray-800 bg-gray-300'><GiClassicalKnowledge /></p>
          <p className='w-fit p-3 rounded-lg text-blue-800 bg-blue-300'><GiMountainClimbing /></p>
          <p className='w-fit p-3 rounded-lg text-gray-800 bg-gray-300'><GrOptimize /></p>
          <p className='w-fit p-3 rounded-lg text-blue-800 bg-blue-300'><FaPeopleGroup /></p>
          <p className='w-fit p-3 rounded-lg text-gray-800 bg-gray-300'><MdHotelClass /></p>
          <p className='w-fit p-3 rounded-lg text-gray-800 bg-gray-300'><SiBackbonedotjs /></p>
          </div>
        </div>
        </div>
      </div>
      <h3 className='mt-3 pl-2 text-lg font-bold text-gray-800'>Profile Info</h3>
      <div className='border-3 border-gray-300 my-3 bg-gray-200 text-gray-800 rounded-lg px-2 py-4 grid grid-cols-1 md:grid-cols-4 gap-10'>
        <p><span className='font-semibold pr-2'>Date of birth: </span>{employee.dateOfBirth}</p>
        <p><span className='font-semibold pr-2'>Address:</span> {employee.address}</p>
        <p><span className='font-semibold pr-2'>Emergency contact:</span> {employee.emergencyContact}</p>
        <p><span className='font-semibold pr-2'>Date of joining:</span> {employee.dateOfJoining}</p>
        <p><span className='font-semibold pr-2'>Department:</span> {employee.department}</p>
        <p><span className='font-semibold pr-2'>Designation:</span> {employee.designation}</p>
        <p><span className='font-semibold pr-2'>Working mode:</span> {employee.workingMode}</p>
        <p><span className='font-semibold pr-2'>Reporting Manager:</span> {employee.reportingManager}</p>
      </div>
    </div>
  )
}

export default EmployeeProfile