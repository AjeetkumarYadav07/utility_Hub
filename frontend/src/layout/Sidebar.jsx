

import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const baseStyle =
    "block text-lg font-bold px-4 py-2 rounded transition-all duration-200";

  const activeStyle = "bg-purple-600 text-white";
  const inactiveStyle =
    "text-gray-700 hover:bg-purple-400 hover:text-white";

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 h-screen bg-white shadow-md p-6">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm  bg-white/30 flex">
          <div className=" w-full   h-full p-6 animate-slideIn">
            <button
              className="text-xl mb-6"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <SidebarContent closeMenu={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );

  function SidebarContent({ closeMenu }) {
    return (
      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/user-dashboard/word_to_pdf"
          onClick={closeMenu}
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Word to PDF
        </NavLink>

        <NavLink
          to="/user-dashboard/pdf_to_word"
          onClick={closeMenu}
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          PDF to Word
        </NavLink>

        <NavLink
          to="/user-dashboard/url_shortener"
          onClick={closeMenu}
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          URL Shortener
        </NavLink>

        <NavLink
          to="/user-dashboard/text_convert"
          onClick={closeMenu}
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Text Case Converter
        </NavLink>
        <NavLink
          to="/user-dashboard/passwordGenerator"
          onClick={closeMenu}
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Password Generator
        </NavLink>
        
        <NavLink
          to="/user-dashboard/mp4_to_mp3"
          onClick={closeMenu}
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
         Mp4 to Mp3 
        </NavLink>

        <NavLink
          to="/user-dashboard/qr_generator"
          onClick={closeMenu}
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
         Qr Generator 
        </NavLink>
      </nav>
    );
  }
};

export default Sidebar;