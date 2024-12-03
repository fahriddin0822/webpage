import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-[#1A1A2E] py-6 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <h3 className="text-2xl font-bold text-white">Finsweet</h3>

        {/* Navigation Links */}
        <ul className="flex items-center gap-x-8">
          <li>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-purple-500"
                  : "text-gray-300 hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/service"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-purple-500"
                  : "text-gray-300 hover:text-white"
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/company"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-purple-500"
                  : "text-gray-300 hover:text-white"
              }
            >
              Company
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/career"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-purple-500"
                  : "text-gray-300 hover:text-white"
              }
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
