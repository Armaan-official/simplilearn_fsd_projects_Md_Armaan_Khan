import { useState } from "react";
import EditEmployee from "./EditEmployee";
import { deleteEmployees } from "../../slices/EmployeeSlice";
import { useDispatch } from "react-redux";



function ListItem({employee, index}) {
    

    const [isOpen, setIsOpen] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const dispatch = useDispatch();

    const bgColor = index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'

    const onOpenChange = (value) => {
        setIsOpen(typeof value === 'boolean' ? value : (prev) => !prev)
    }

    const handleDelete = () => {
        dispatch(deleteEmployees(employee.id))
        setConfirmDelete(false)
    }

    const confirmDeleteModal = (value) => {
        setConfirmDelete(typeof value === 'boolean' ? value : (prev) => !prev)
    }

    

  return (
        <tr key={employee.id} className={`${bgColor}`}>
            <td className="text-center py-2">{employee.name}</td>
            <td className="text-center py-2">{employee.department}</td>
            <td className="text-center py-2">{employee.designation}</td>
            <td className="text-center py-2">{employee.email}</td>

            <td className="text-center py-2 flex gap-2 items-center justify-center">
                <button 
                    type="button"
                    onClick={() => onOpenChange(true)} 
                    className="bg-gray-500 rounded text-white 
                    px-2 py-1 hover:bg-gray-600 cursor-pointer text-xs"
                >Edit</button>
                <button 
                    type="button"
                    className='bg-red-500 rounded text-white cursor-pointer 
                    px-2 py-1 hover:bg-red-600 text-xs'
                    onClick={() => confirmDeleteModal(true)} 
                    >Delete</button>
                {confirmDelete && <div className="fixed inset-0 z-60 flex items-center justify-center
                    bg-black/10 backdrop-blur-sm p-4">
                    <div 
                        className="fixed top-10 bg-white flex flex-col justify-center gap-3 
                        max-w-100 min-h-40 px-10 rounded-2xl overflow-hidden
                        border-3 border-gray-300">
                        <p>This employee will be deleted permanently.</p>
                        <button type="button" className="bg-white rounded text-xs cursor-pointer
                            px-2 py-1 hover:bg-gray-200 shadow-[1px_1px_2px]" 
                            onClick={() => confirmDeleteModal(false)}>Cancel
                        </button>
                        <button type="button" className='bg-red-500 rounded text-white cursor-pointer 
                            px-2 py-1 hover:bg-red-600 text-xs shadow-[1px_1px_2px] shadow-black' 
                            onClick={handleDelete}>
                                Confirm Delete
                        </button>
                    </div>
                </div>}
                {isOpen && <EditEmployee existingEmployee={employee} onOpenChange={onOpenChange} isOpen={isOpen}/>}
            </td>
        </tr>
  )
}

export default ListItem;