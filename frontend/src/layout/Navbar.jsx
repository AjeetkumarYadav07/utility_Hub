

import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = ({ setSidebarOpen }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const defaultAvatar =
    "https://ui-avatars.com/api/?name=" + (user?.name || "User");

  // 🔥 Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white w-full shadow p-4 flex items-center relative z-40">

      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-2xl font-bold"
      >
        ☰
      </button>
      
           <div className="flex  gap-4 ml-auto">
            <Link
            to="/"
            className="font-semibold  hover:text-purple-500 font-lato ">
             Home 
            </Link>
           <Link
            to=""
            className="font-semibold hover:text-purple-500 font-lato ">
             Menus 
            </Link>
           </div>

      <div className="relative ml-auto" ref={dropdownRef}>
        
        <div
          className="cursor-pointer flex items-center gap-2 hover:bg-gray-200 px-3 py-1 rounded"
          onClick={() => setOpen(!open)}
        >
           
          <img
            src={user?.profileImage || defaultAvatar}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        {open && (
          <div className="absolute right-0 top-12 bg-gray-50 shadow-lg rounded-lg p-4 z-50 ">
            <div className="mb-3">
              <p className="font-semibold text-gray-800">
                {user?.name || "User"}
              </p>
              <p className="text-sm text-gray-500">
                {user?.email}
              </p>
            </div>

            <hr />


            <button
              onClick={handleLogout}
              className="mt-3 w-full cursor-pointer text-left text-red-500 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;