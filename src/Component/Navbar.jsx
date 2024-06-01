import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartlength }) => {
  const user= localStorage.getItem("user")

  const Logout=()=>{
   localStorage.removeItem('user')
   alert("logout successfully")
   useNavigate("/")
  }
  return (
    <>
      <header className="text-white bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={'/'}  className="mr-5 hover:text-white     bg-gray-600 p-1 rounded ">Home</Link>
            <a className="mr-5 hover:text-white      bg-gray-600 p-1 rounded ">Second Link</a>
           {user?<button onClick={Logout} className="mr-5 hover:text-white   bg-gray-600 p-1 rounded ">Logout</button>:""} 
            <Link to={'/login'} className="mr-5 hover:text-white    bg-gray-600  p-1 rounded">Login</Link>
          </nav>
          <Link to={"/cart"}>
            <button className="relative inline-flex items-center bg-gray-600   border-0 py-1 px-3 focus:outline-none rounded text-white mt-4 md:mt-0 font-bold">
              Cart
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 absolute -top-4 -right-2">
                {cartlength}
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
