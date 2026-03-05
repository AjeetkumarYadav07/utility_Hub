

import { NavLink, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdPictureAsPdf } from "react-icons/md";
import { FaRegFileWord } from "react-icons/fa";
import { MdOutlineAddLink } from "react-icons/md";
import { IoText } from "react-icons/io5";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { MdLibraryMusic } from "react-icons/md";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";



const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    {name: "Home" , path:"/" , icons:<FaHome/>},
    { name: "Menus", path: "/user-dashboard" , icons:<RxDashboard/>  },
    { name: "Word to PDF", path: "/user-dashboard/word_to_pdf" , icons:<MdPictureAsPdf/> },
    { name: "PDF to Word", path: "/user-dashboard/pdf_to_word" , icons:<FaRegFileWord/> },
    { name: "URL Shortener", path: "/user-dashboard/url_shortener" , icons: <MdOutlineAddLink/> },
    { name: "Text Case Converter", path: "/user-dashboard/text_convert" , icons:<IoText/> },
    { name: "Password Generator", path: "/user-dashboard/passwordGenerator" , icons:<TbPasswordMobilePhone/> },
    { name: "Mp4 to Mp3", path: "/user-dashboard/mp4_to_mp3", icons:<MdLibraryMusic/> },
    { name: "QR Generator", path: "/user-dashboard/qr_generator" , icons:<IoQrCodeOutline/> },
  ];

    const navigate = useNavigate();
   const handleSignOut = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    
   }
  return (
    <>
      {/* Desktop Sidebar  bg-[#0B1220] */}  
      <div className="hidden md:flex flex-col w-64 h-screen bg-white   ">

        {/* Logo Section */}
        <div className="flex items-center gap-3 px-6 py-4.5 border-b border-gray-400">
         
          <h2 className="text-lg font-semibold font-lato text-black">User Panel</h2>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
               end={item.path === "/user-dashboard"} 
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-400 hover:text-white"
                }`
              }
            >
              {/* Icon Placeholder */}
              <div className="  rounded-sm">{item.icons}</div>

              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom Logout */}
        <div className="px-4 py-4 border-t border-gray-800">
          <button onClick={handleSignOut} className="flex items-center gap-3 w-full cursor-pointer px-4 py-2 hover:bg-purple-300 rounded-lg transition">
            <div className="  rounded-sm"> <MdOutlineLogout/> </div>
            <span  className="text-sm ">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
    {isOpen && (
  <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden">
    <div className="w-64 h-full bg-white  p-6 flex flex-col">

      <button
        className="mb-6 text-lg pl-36"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/user-dashboard"}   // 🔥 same fix
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition
              ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-purple-400 hover:text-white"
              }`
            }
          >
            {item.icons}
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <button
        onClick={handleSignOut}
        className="mt-auto flex items-center gap-3 px-4 py-2 hover:bg-purple-300 rounded-lg"
      >
        <MdOutlineLogout />
        <span className="text-sm">Sign Out</span>
      </button>
    </div>
  </div>
)}

    </>
  );
};

export default Sidebar;