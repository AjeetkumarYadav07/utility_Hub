


// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Navbar = ({ setSidebarOpen }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user"); // ✅ also remove user
//     navigate("/");
//   };

//   return (
//     <div className="bg-white w-full shadow p-4 flex items-center relative z-40">

//       {/* Hamburger */}
//       <button
//         onClick={() => setSidebarOpen(true)}
//         className="md:hidden text-2xl font-bold"
//       >
//         ☰
//       </button>

//       {/* User Section */}
//       <div className="relative ml-auto">
//         <div
//           className="cursor-pointer flex items-center gap-2 bg-gray-200 px-3 py-1 rounded"
//           onClick={() => setOpen(!open)}
//         >
//           <img
//             src={user?.profileImage || "https://via.placeholder.com/40"}
//             alt="profile"
//             className="w-8 h-8 rounded-full object-cover"
//           />
//           <span className="hidden sm:block text-sm font-medium">
//             {user?.name || "User"}
//           </span>
//         </div>

//         {open && (
//           <div className="absolute right-0 top-12 bg-sky-#e5ecf1c9 shadow-md rounded overflow-hidden p-4 w-70  z-50">
            
//             <p className="text-sm text-gray-600 mb-2">
//               {user?.email}
//             </p>


//             <p
//               className="cursor-pointer hover:text-red-500 mt-2"
//               onClick={handleLogout}
//             >
//               Logout
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ setSidebarOpen }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  // Default avatar if no image
  const defaultAvatar =
    "https://ui-avatars.com/api/?name=" + (user?.name || "User");

  return (
    <div className="bg-white w-full shadow p-4 flex items-center relative z-40">

      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-2xl font-bold"
      >
        ☰
      </button>

      <div className="relative ml-auto">
        <div
          className="cursor-pointer flex items-center gap-2 bg-gray-200 px-3 py-1 rounded"
          onClick={() => setOpen(!open)}
        >
          <img
            src={user?.profileImage || defaultAvatar}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          {/* <span className="hidden sm:block text-sm font-medium">
            {user?.name || "User"}
          </span> */}
        </div>

        {open && (
          <div className="absolute right-0 top-12 bg-gray-50 shadow-lg rounded-lg p-4 w-60 z-50">
            
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
              className="mt-3 w-full  cursor-pointer text-left text-red-500 hover:text-red-600"
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