import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext) || {};
  const [theme, setTheme] = useState('light');

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('Successfully logged out'))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-10">
            <li><Link to="/" className="hover:bg-gray-100 p-2 rounded">Home</Link></li>
            <li><Link to="/pet" className="hover:bg-gray-100 p-2 rounded">Pet Listing</Link></li>
            <li><Link to="/petCard" className="hover:bg-gray-100 p-2 rounded">Donation Campaigns</Link></li>
            <li><Link to="/register" className="hover:bg-gray-100 p-2 rounded">Register</Link></li>
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img className="h-16 w-auto" src="https://i.ibb.co/4j0NLBN/file.png" alt="Logo" />
          <span className="ml-2 text-xl font-bold">Pet Adoption</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
          <li><Link to="/pet" className="hover:text-orange-500 transition">Pet Listing</Link></li>
          <li><Link to="/petCard" className="hover:text-orange-500 transition">Donation Campaigns</Link></li>
          <li><Link to="/register" className="hover:text-orange-500 transition">Register</Link></li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <label className="flex items-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input onChange={handleToggle} type="checkbox" className="toggle ml-2" />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>

        <div>
          {user ? (
            <div className="flex items-center gap-2">
              <img src={user.photoURL} alt="User" title={user.displayName} className="rounded-full h-8 w-8 border border-gray-300" />
              <button onClick={handleLogOut} className="btn bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition">
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
