import "../css/NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="header">
      <NavLink 
          to="/" 
          end 
          className="header_logo"
        >Movie App</NavLink>
      
      <nav className="nav-links">
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/favorites" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Favorite
        </NavLink>
      </nav>
    </header>
  );
}
