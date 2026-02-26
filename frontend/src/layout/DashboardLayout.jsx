
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { Outlet, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";




// const DashboardLayout = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar setSidebarOpen={setSidebarOpen} />

//       <div className="flex flex-1 relative">
//         <Sidebar
//           isOpen={sidebarOpen}
//           setIsOpen={setSidebarOpen}
//         />

//         <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) navigate("/login");
  // }, [navigate]);

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex flex-col flex-1">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;