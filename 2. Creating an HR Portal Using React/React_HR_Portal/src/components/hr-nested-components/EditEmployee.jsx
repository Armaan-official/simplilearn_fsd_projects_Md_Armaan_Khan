import { useDispatch } from "react-redux";
import { editEmployees } from "../../slices/EmployeeSlice";
import { useState, useEffect } from "react";

function EditEmployee({ existingEmployee, isOpen, onOpenChange }) {
  const dispatch = useDispatch();

  const [employee, setEmployee] = useState(existingEmployee);

  useEffect(() => {
    if (isOpen) {
      setEmployee({
        name: existingEmployee.name,
        department: existingEmployee.department,
        designation: existingEmployee.designation,
        email: existingEmployee.email,
      });
    }
  }, [isOpen, existingEmployee]);

  function editField(field, value) {
    setEmployee((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!employee.name.trim() || !employee.department.trim()) return;

    dispatch(editEmployees({ id: existingEmployee.id, newInfo: employee }));
    onOpenChange(false);
  }

  const items = [
    { label: "Engineering" },
    { label: "Design" },
    { label: "Marketing" },
    { label: "Sales" },
    { label: "Customer Support" },
    { label: "Human Resources" },
    { label: "Finance" },
    { label: "Operations" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center pt-10">
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center
            backdrop-blur-sm bg-black/40 p-4"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-white justify-center text-left gap-2 max-w-100 
                min-h-80 px-5 pt-5 rounded-2xl overflow-hidden border-3 border-gray-300"
          >
            <h1 className="font-bold text-lg">Edit Employee</h1>
            <p className="flex font-semibold text-gray-700 text-sm">
              Edit the employee details here. Click Save Changes to save the
              details.
            </p>
            <hr className="-mx-5 border border-slate-300" />
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={employee.name}
              onChange={(e) => editField("name", e.target.value)}
              className="border rounded-md px-2"
              required
            />
            <label className="font-bold" htmlFor="department">
              Department
            </label>
            <select
              id="department"
              name="department"
              value={employee.department}
              onChange={(e) => editField("department", e.target.value)}
              className="border rounded-md px-2"
              required
            >
              {items.map((item) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
            <label className="font-bold" htmlFor="designation">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={employee.designation}
              onChange={(e) => editField("designation", e.target.value)}
              className="border rounded-md px-2"
              required
            />
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={employee.email}
              onChange={(e) => editField("email", e.target.value)}
              className="border rounded-md px-2"
              required
            />
            <div className="bg-gray-300 -mx-5 -my-2 mt-2 py-5 flex justify-center items-center gap-10">
              <button
                type="button"
                className="shadow-[1px_1px_3px] shadow-black/60 bg-white 
                        px-2 py-1 rounded text-xs
                        hover:bg-gray-100 cursor-pointer"
                onClick={onOpenChange}
              >
                close
              </button>
              <button
                type="submit"
                className="shadow-[1px_1px_3px] shadow-black/60 text-white 
                        px-2 py-1 rounded text-xs bg-blue-500 
                        hover:bg-blue-600 cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EditEmployee;
