import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div className="bg-neutral-700 h-screen w-screen flex flex-col
            justify-center items-center text-white font-semibold text-2xl gap-10">
            <h2> 404 - Page Not Found </h2>

            <p>
                Sorry, The page you are looking for doesnot exist
            </p>

            <Link 
                className="text-white underline underline-offset-4
                    hover:text-blue-400" 
                to="/"> Go to Home </Link>
        </div>
    )
}

export default NotFound;