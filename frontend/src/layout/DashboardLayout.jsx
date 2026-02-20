import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashboardLayout = () => {

  const navigate =    useNavigate()
    useEffect(() =>{
        const token = localStorage.getItem("token");
    if(!token){
      navigate("/login")
    }
    })


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        <Navbar/>

        <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
