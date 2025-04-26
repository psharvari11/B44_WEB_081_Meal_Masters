import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  FiHome, 
  FiClipboard, 
  FiEdit, 
  FiList, 
  FiUser, 
  FiLogOut, 
  FiChevronLeft, 
  FiChevronRight 
} from "react-icons/fi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FiEdit /> },
    { name: "Recipe Maker", path: "/recipes", icon: <FiEdit /> },
    { name: "Meal Planner", path: "/meal-planner", icon: <FiClipboard /> },
    { name: "Nutrition Logger", path: "/nutrition-logger", icon: <FiList /> },
    { name: "Grocery List", path: "/grocery-list", icon: <FiList /> },
    { name: "User Profile", path: "/profile", icon: <FiUser /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token on logout!
    navigate("/login"); // redirect to login page
  };

  return (
    <div className={`bg-gray-900 text-white h-screen p-4 flex flex-col justify-between ${isCollapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      <div>
        {/* Collapse Button */}
        <button className="text-xl mb-6" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>

        {/* Sidebar Menu */}
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.name} className={`p-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 ${location.pathname === item.path ? "bg-gray-700" : ""}`}>
              <Link to={item.path} className="flex items-center space-x-3">
                {item.icon}
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-600 transition-all"
      >
        <FiLogOut />
        {!isCollapsed && <span>Logout</span>}
      </button>
    </div>
  );
};

export default Sidebar;
