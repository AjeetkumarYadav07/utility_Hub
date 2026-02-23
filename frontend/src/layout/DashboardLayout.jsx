
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


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

//     <>

  
//     <div className="flex flex-col min-h-screen">
      
//       {/* 🔥 Navbar */}
//       <Navbar setSidebarOpen={setSidebarOpen} />

//       {/* 🔥 Content Area */}
//       <div className="flex flex-1 relative">
        
//         {/* Sidebar */}
//         <Sidebar
//           isOpen={sidebarOpen}
//           setIsOpen={setSidebarOpen}
//         />

//         {/* Main Content */}
//         <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
//           <DefaultPage/>
//           <Outlet />
//         </div>

//       </div>
//     </div>

//     </>
//   );
// };

// export default DashboardLayout;

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 relative">
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;