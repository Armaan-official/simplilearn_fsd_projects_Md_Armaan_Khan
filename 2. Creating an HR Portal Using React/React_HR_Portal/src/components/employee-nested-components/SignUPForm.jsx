import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import { editEmployees, getEmployees } from "../../slices/EmployeeSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SingUPForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employees = useSelector((state) => state.employees.employees);

  const [searchId, setSearchId] = useState("");
  const [isFound, setIsFound] = useState(false);
  const [error, setError] = useState("");

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
    department: "",
    designation: "",
    dateOfJoining: "",
    workingMode: "",
    reportingManager: "",
    salary: "",
    emergencyContact: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
         setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
   
  };

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(getEmployees());
    }
  }, [dispatch, employees.length]);

  const handleVerify = () => {
    if (!searchId.trim()) return setError("Please enter an Id");

    const match = employees.find(
      (emp) => String(emp.id) === String(searchId.trim()),
    );

    if (!match) {
        return (
            <div className="text-center pt-12">Loading...</div>
        )
    };


    if (match) {
      setEmployee({
        id: match.id,
        name: match.name,
        dateOfBirth: "",
        email: match.email,
        phone: "",
        address: "",
        department: match.department,
        designation: match.designation,
        dateOfJoining: "",
        workingMode: "",
        reportingManager: "",
        salary: "",
        emergencyContact: "",
        username: "",
        password: "",
      });
      setIsFound(true);
      setError("");
    } else {
      setError("Employee Id not found in records.");
      setIsFound(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(
        editEmployees({
          id: employee.id,
          newInfo: {
            ...employee,
          },
        }),
      ).unwrap();
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "Employee");
      localStorage.setItem("employeeId", String(employee.id));

      navigate(`/employee/${employee.id}`);
    } catch (err) {
      setError("Failted to update profile. Please try again.");
    }
    setEmployee({
      id: "",
      name: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      address: "",
      department: "",
      designation: "",
      dateOfJoining: "",
      workingMode: "",
      reportingManager: "",
      salary: "",
      emergencyContact: "",
      username: "",
      password: "",
    });
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-15 mb-2 mx-2">
        {isFound && <h1 className=" flex justify-center items-center font-bold mb-2 text-2xl">Employee Registration Form</h1>}
        {!isFound && (
          <form
            onSubmit={handleSubmit}
            className="min-w-100 bg-white flex flex-col justify-center gap-2 
                min-h-40 py-5 px-5 rounded-2xl overflow-hidden
                border-3 border-gray-300"
          >
            {error && <p className="text-red-500 text-xs">{error}</p>}

            <div className="flex flex-col justify-center gap-2">
              <label htmlFor="enterId" className="font-bold">
                Enter ID
              </label>
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="border rounded-md px-2 py-0.5"
              />
              <div className="flex justify-center items-center pt-2">
                <button
                  type="button"
                  onClick={handleVerify}
                  className="bg-blue-600 rounded-md text-white px-3 py-1 cursor-pointer"
                >
                  Verify
                </button>
              </div>
            </div>
          </form>
        )}
        
        {isFound && (
          <form
            onSubmit={handleSubmit}
            className=" bg-white w-full grid grid-cols-1 md:grid-cols-3
                py-5 px-5 rounded-2xl overflow-hidden gap-4
                border-3 border-gray-300"
          >
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={employee.name}
                className="border rounded-md px-2 py-0.5"
                disabled
              />
              <label className="font-bold" htmlFor="dateOfBirth">
                DOB
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={employee.dateOfBirth}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                required
              />
              <label className="font-bold" htmlFor="phone">
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={employee.phone}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
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
                className="border rounded-md px-2 py-0.5"
                disabled
              />
              <label className="font-bold" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={employee.address}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
              />
              </div>
              <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="emergencyContact">
                Emergency Contact Number
              </label>
              <input
                type="text"
                id="emergencyContact"
                name="emergencyContact"
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
              />
              <label className="font-bold" htmlFor="id">
                Employee ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={employee.id}
                className="border rounded-md px-2 py-0.5"
                disabled
              />
              <label className="font-bold" htmlFor="department">
                Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={employee.department}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                disabled
              />
              <label className="font-bold" htmlFor="designation">
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={employee.designation}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                disabled
              />
              <label className="font-bold" htmlFor="dateOfJoining">
                Joining Date
              </label>
              <input
                type="date"
                id="dateOfJoining"
                name="dateOfJoining"
                value={employee.dateOfJoining}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                required
              />
              </div>
              <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="workingMode">
                Mode
              </label>
              <select
                id="workingMode"
                name="workingMode"
                value={employee.workingMode || ''}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
            
              >
                <option value='' disabled>Select Working Mode</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
            </select>
            <label className="font-bold" htmlFor="reportingManager">
                Reporting Manager
              </label>
              <input
                type="text"
                id="reportingManager"
                name="reportingManager"
                value={employee.reportingManager}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                required
              />
            <label className="font-bold" htmlFor="salary">
                Salary
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                required
              />
            <label className="font-bold" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={employee.username}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                required
              />
              <label className="font-bold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={employee.password}
                onChange={handleChange}
                className="border rounded-md px-2 py-0.5"
                required
              />

             
            </div>
             <div className="md:col-start-2 text-sm flex items-center gap-2">
                <button 
                    type="button"
                    className="w-full md:w-20 lg:w-full shadow-[1px_1px_3px] shadow-black/60
                    px-2 py-1 rounded-lg bg-gray-500 text-white hover:text-black hover:bg-gray-200 cursor-pointer" 
                    onClick={() => setIsFound(false)}>
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full md:w-fit lg:w-full shadow-[1px_1px_3px] shadow-black/60 text-white 
                            px-2 py-1 rounded-lg bg-blue-500 hover:bg-blue-600 cursor-pointer"
                >
                  Register & Log In
                </button>
              </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SingUPForm;
