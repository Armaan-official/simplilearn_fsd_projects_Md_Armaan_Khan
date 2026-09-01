import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginHR from "../components/LoginHR";
import LoginEmployee from "../components/LoginEmployee";
import loginImage from "../images/login.png";

function Login() {
  const navigate = useNavigate();

  const SignupNavigate = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col text-gray-800 md:flex-row px-4 bg-linear-to-b from-emerald-200/40 via-teal-200/30 to-fuchsia-200/30">
        <div className="w-full md:w-1/2 pt-15 pl-5 pb-5 overflow-hidden">
          <img src={loginImage} alt="Login page image" className="border-2 border-gray-300 rounded-2xl w-full h-full object-cover" />
        </div>
        <div className="flex justify-center pt-5 flex-col w-full md:w-1/2 h-screen items-center">
        <div className="flex justify-center items-center flex-col h-[90%] w-full">
          <h2
            className="text-center text-3xl font-bold 
          "
          >
            Please Login To Continue
          </h2>
          <div className="flex gap-4 pt-20">
            <LoginHR />
            <LoginEmployee />
          </div>
          <div className="flex gap-5 pt-20 ">
            <p>New Employee?</p>
            <button
              type="button"
              className="text-blue-600 underline underline-offset-4 hover:text-gray-800"
              onClick={SignupNavigate}
            >
              Complete Your Registration
            </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
