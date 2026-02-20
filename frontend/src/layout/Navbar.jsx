import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-white shadow p-4 flex justify-end relative">
      <div
        className="cursor-pointer bg-gray-200 px-3 py-1 rounded"
        onClick={() => setOpen(!open)}
      >
        User ▼
      </div>

      {open && (
        <div className="absolute right-4 top-14 bg-white  shadow-md rounded p-3 w-40">
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
  );
};

export default Navbar;
