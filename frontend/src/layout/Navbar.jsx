import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ setSidebarOpen }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-white w-full shadow p-4 flex items-center relative z-40">

      {/* Hamburger - Always Left */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-2xl font-bold"
      >
        ☰
      </button>

      {/* Push User Menu to Right */}
      <div className="relative ml-auto">
        <div
          className="cursor-pointer bg-gray-200 px-3 py-1 rounded"
          onClick={() => setOpen(!open)}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22a8 8 0 1 1 16 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6"/></svg>
        </div>

        {open && (
          <div className="absolute right-0 top-12 bg-white shadow-md rounded p-3 w-40 z-50">
            <p
              className="cursor-pointer hover:text-blue-500"
              onClick={() => navigate("/dashboard/profile")}
            >
              My Profile
            </p>

            <p
              className="cursor-pointer hover:text-red-500 mt-2"
              onClick={handleLogout}
            >
              Logout
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;

