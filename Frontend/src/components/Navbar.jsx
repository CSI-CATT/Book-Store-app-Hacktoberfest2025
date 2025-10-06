import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from './login';
import Logout from './logout';
import { useAuth } from '../context/Authprovider';

function Navbar() {
  const { authUser } = useAuth();
  const location = useLocation();

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For hamburger menu toggle

  // Toggle dark/light mode and add/remove class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Sticky navbar logic: add shadow and change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // NavLink component with active underline & hover effects
  const NavLink = ({ to, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative px-4 py-2 rounded-md font-semibold transition-colors duration-300
          ${
            isActive
              ? 'text-black dark:text-white'
              : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
          }
          group
        `}
        onClick={() => setMenuOpen(false)} // close menu when clicking a link
      >
        {label}
        <span
          className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-blue-500 rounded-t-md transition-all duration-300
            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
          `}
          aria-hidden="true"
        />
      </Link>
    );
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" label="Home" />
      </li>
      <li>
        <NavLink to="/Main" label="Course" />
      </li>
      <li>
        <NavLink to="/About" label="About" />
      </li>
      <li>
        <NavLink to="/Contact" label="Contact us" />
      </li>
    </>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 max-w-screen-2xl mx-auto px-4 md:px-20
          transition-colors duration-300
          ${
            sticky
              ? 'shadow-lg bg-white dark:bg-slate-900'
              : 'bg-transparent dark:bg-transparent'
          }
          text-black dark:text-white
        `}
      >
        <div className="flex justify-between items-center py-3">
          {/* Left: Logo + Hamburger */}
          <div className="flex items-center space-x-2">
            {/* Hamburger button for mobile */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition transform hover:scale-105"
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <Link
              to="/"
              className="text-2xl font-bold cursor-pointer select-none"
            >
              Bookstore
            </Link>
          </div>

          {/* Center: Desktop navigation */}
          <ul className="hidden lg:flex space-x-6">{navItems}</ul>

          {/* Right: Search + Theme + Auth */}
          <div className="flex items-center space-x-4">
            {/* Search input */}
            <div className="hidden md:block">
              <label className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 bg-gray-100 dark:bg-slate-800 transition duration-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:shadow-md">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-full transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg
                  className="w-6 h-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m8.66-10.34l-.707.707M4.05 19.95l-.707.707M21 12h-1M4 12H3m15.364 6.364l-.707-.707M7.05 4.636l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              )}
            </button>

            {/* Auth Buttons */}
            {authUser ? (
              <Logout />
            ) : (
              <>
                <button
                  onClick={() => document.getElementById('my_modal_3').showModal()}
                  className="px-4 py-2 rounded-md bg-black text-white transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 dark:bg-white dark:text-black dark:hover:bg-gray-300 dark:hover:scale-105"
                >
                  Login
                </button>
                <Login />
              </>
            )}
          </div>
        </div>

        {/* Mobile menu - visible if menuOpen */}
        {menuOpen && (
          <ul className="lg:hidden bg-white dark:bg-slate-900 shadow-md rounded-b-md p-4 space-y-2">
            {navItems}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
