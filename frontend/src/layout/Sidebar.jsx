
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const baseStyle =
//     "block text-lg font-bold px-4 py-2 rounded transition-all duration-200";

//   const activeStyle = "bg-purple-600 text-white";
//   const inactiveStyle =
//     "text-gray-700 hover:bg-purple-400 hover:text-white";

//   return (
//     <>
//       {/* 🔥 MOBILE HAMBURGER ONLY */}
//       <div className="md:hidden p-4">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="text-2xl font-bold"
//         >
//           ☰
//         </button>
//       </div>

//       {/* 🔥 DESKTOP SIDEBAR */}
//       <div className="hidden md:flex flex-col w-64 h-screen bg-white shadow-md p-6">
//         {/* <h2 className="text-xl font-bold text-gray-800 mb-8">
//           Tools 🚀
//         </h2> */}

//         <SidebarContent />
//       </div>

//       {/* 🔥 MOBILE FULL SCREEN MENU */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 bg-white/30 flex flex-col backdrop-blur-sm  p-6 animate-slideIn">
//           {/* Top bar */}
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-xl font-bold text-gray-800">
//               Tools 🚀
//             </h2>

//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-2xl"
//             >
//               ✕
//             </button>
//           </div>

//           <SidebarContent closeMenu={() => setIsOpen(false)} />
//         </div>
//       )}
//     </>
//   );

//   function SidebarContent({ closeMenu }) {
//     return (
//       <nav className="flex flex-col space-y-3">
//         <NavLink
//           to="/user-dashboard/word_to_pdf"
//           onClick={closeMenu}
//           className={({ isActive }) =>
//             `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
//           }
//         >
//           Word to PDF
//         </NavLink>

//         <NavLink
//           to="/user-dashboard/pdf_to_word"
//           onClick={closeMenu}
//           className={({ isActive }) =>
//             `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
//           }
//         >
//           PDF to Word
//         </NavLink>

//         <NavLink
//           to="/user-dashboard/url_shortener"
//           onClick={closeMenu}
//           className={({ isActive }) =>
//             `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
//           }
//         >
//           URL Shortener
//         </NavLink>

//         <NavLink
//           to="/user-dashboard/text_convert"
//           onClick={closeMenu}
//           className={({ isActive }) =>
//             `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
//           }
//         >
//           Text Case Converter
//         </NavLink>
//       </nav>
//     );
//   }
// };

// export default Sidebar;


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
      </nav>
    );
  }
};

export default Sidebar;