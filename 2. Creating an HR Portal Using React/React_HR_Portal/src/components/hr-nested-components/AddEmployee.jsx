import { useDispatch } from "react-redux";
import { addEmployees } from "../../slices/EmployeeSlice";
import { useState } from "react";

function AddEmployee() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    designation: "",
    email: "",
    password: "",
  });

  const onOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployees(employee));
    setEmployee({
      name: "",
      department: "",
      designation: "",
      email: "",
      password: "",
    });
    setIsOpen(false);
  };

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
    <div className="relative z-10 flex flex-col justify-center items-center">
      <button
        type="button"
        className="shadow-[0_0_3px] shadow-black/60 bg-blue-500 text-sm cursor-pointer
            hover:bg-blue-600 text-white rounded-md px-5 py-1.5 my-4"
        onClick={onOpenChange}
      >
        Add Employee
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
             bg-black/40 backdrop-blur-sm p-4"
        >
          <form
            onSubmit={handleSubmit}
            className="fixed top-10 bg-white flex flex-col justify-center gap-2 
                max-w-100 min-h-80 px-5 pt-5 rounded-2xl overflow-hidden
                border-3 border-gray-300"
          >
            <h1 className="font-bold text-lg">Add Employee</h1>
            <p className="flex font-semibold text-gray-700 text-sm">
              Add a new employee here. Click Add to save the details.
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
              onChange={handleChange}
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
              onChange={handleChange}
              className="border rounded-md px-2"
              required
            >
              <option value='' disabled>Choose department</option>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                Cancel
              </button>
              <button
                type="submit"
                className="shadow-[1px_1px_3px] shadow-black/60 text-white 
                    px-3.5 py-1 rounded text-xs bg-blue-500 hover:bg-blue-600 cursor-pointer"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddEmployee;
