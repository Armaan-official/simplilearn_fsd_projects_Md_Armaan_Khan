import { BiSolidBookContent } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import { FaEdit, FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { IoInfinite } from "react-icons/io5";

function CardsForDirectory() {
  return (
    <div className="grid w-full lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-evenly items-center py-2 gap-2">
        <div className="bg-violet-200 text-violet-900 font-semibold shadow-[1px_1px_3px] shadow-gray-400 py-3 px-2 rounded-lg gap-1 flex flex-col justify-center items-center">
            <span className="text-3xl"><BiSolidBookContent /></span>
            <h2 className="text-lg">Content Designers</h2>
            <p  className="text-xs">(5 Candidates required)</p>
        </div>
        <div className="bg-fuchsia-100 text-fuchsia-800 font-semibold shadow-[1px_1px_3px] shadow-gray-400 py-3 px-2 rounded-lg gap-1 flex flex-col justify-center items-center">
            <span className="text-3xl"><SiPhp /></span>
            <h2 className="text-lg">PHP Developer</h2>
            <p className="text-xs">(8 Candidates required)</p>
        </div>
        <div className="bg-green-100 text-green-800 font-semibold shadow-[1px_1px_3px] shadow-gray-400 py-3 px-2 rounded-lg gap-1 flex flex-col justify-center items-center">
            <span className="text-3xl"><IoInfinite /></span>
            <h2 className="text-lg">DevOps Specialist</h2>
            <p  className="text-xs">(4 Candidates required)</p>
        </div>
         <div className="bg-orange-100 text-orange-700 font-semibold shadow-[1px_1px_3px] shadow-gray-400 py-3 px-2 rounded-lg gap-1 flex flex-col justify-center items-center">
            <span className="text-3xl"><FaEdit /></span>
            <h2 className="text-lg">UI/UX Designers</h2>
            <p className="text-xs">(3 Candidates required)</p>
        </div>
         <div className="bg-stone-200 text-stone-800 font-semibold shadow-[1px_1px_3px] shadow-gray-400 py-3 px-2 rounded-lg gap-1 flex flex-col justify-center items-center">
            <span className="text-3xl"><FaApple /></span>
            <h2 className="text-lg">IOS Developer</h2>
            <p className="text-xs">(7 Candidates required)</p>
        </div>
         <div className="bg-red-100 text-red-800 font-semibold shadow-[1px_1px_3px] shadow-gray-400 py-3 px-2 rounded-lg gap-1 flex flex-col justify-center items-center">
            <span className="text-3xl"><IoLogoAndroid /></span>
            <h2 className="text-lg">Android Developer</h2>
            <p className="text-xs">(10 Candidates required)</p>
        </div>
    </div>
  )
}

export default CardsForDirectory