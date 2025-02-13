/* eslint-disable react/prop-types */
import { FaCoins } from "react-icons/fa";

export default function Navbar({count}) {
  return (
    <div className="w-[95%] mx-auto mb-10">
      <div className="navbar bg-base-100 flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="mb-3 text-lg font-semibold">Home</li>
              <li className="mb-3 text-lg font-semibold">Fixture</li>
              <li className="mb-3 text-lg font-semibold">Teams</li>
              <li className="mb-3 text-lg font-semibold">Schedules</li>
            </ul>
          </div>
          <div>
            {/* img link */}
            <img src="logo.png" className="w-20"/>
          </div>
        </div>
        
        <div className="navbar-end">
          <div className="hidden lg:flex mr-10">
          <ul className="menu menu-horizontal px-1 space-x-10">
              <li className="text-gray-500 text-sm font-bold cursor-pointer  bg-transparent border-none mr-3">Home</li>
              <li className="text-gray-500 text-sm font-bold cursor-pointer  bg-transparent border-none mr-3">Fixture</li>
              <li className="text-gray-500 text-sm font-bold cursor-pointer  bg-transparent border-none mr-3">Teams</li>
              <li className="text-gray-500 text-sm font-bold cursor-pointer  bg-transparent border-none mr-3">Schedules</li>
          </ul>
        </div>
          <button className="btn bg-transparent">$ {count} Coin <FaCoins></FaCoins></button>
        </div>
      </div>
    </div>
  );
}
