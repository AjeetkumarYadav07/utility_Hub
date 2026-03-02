

import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white w-full h-16 flex items-center px-6 border-b border-gray-200 relative z-40">

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-2xl mr-4"
      >
        ☰
      </button>

      {/* Page Title */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          User Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back, {user?.name || "User"}
        </p>
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center gap-6">

        {/* Notification Placeholder */}
        <div className="relative cursor-pointer">
          {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div> */}
          {/* <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </div>

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
        {/* User Dropdown */}

  <div
    onClick={() => setOpen(!open)}
    className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
  >
    {user?.profileImage ? (
      <img
        src={user.profileImage}
        alt="profile"
        className="w-full h-full object-cover"
      />
    ) : user?.name ? (
      <div className="w-full h-full bg-purple-600 text-white flex items-center justify-center font-semibold">
        {user.name.charAt(0).toUpperCase()}
      </div>
    ) : (
      <div className="w-full h-full bg-gray-400 text-white flex items-center justify-center">
        U
      </div>
    )}
  </div>


      

          {open && (
            <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-4 ">
              <p className="font-semibold text-gray-800">
                {user?.name || "User"}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                {user?.email}
              </p>

              <hr />

              <button
                onClick={handleLogout}
                className="mt-3 text-red-400 hover:text-red-600 text-sm cursor-pointer "
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;