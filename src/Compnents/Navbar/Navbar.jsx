import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    if (isActive === false) {
      setIsActive(true);
    }
  };

  return (
    <div className="w-full py-3 bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              ☰
            </div>

            <ul className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/books">Books</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>

          <NavLink to="/" className="btn btn-ghost text-2xl font-bold">
            Book Vibe
          </NavLink>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-14">
            <li>
              <NavLink
                onClick={() => handleActive()}
                className={`text-[20px] ${
                  isActive === true ? "border border-green-400" : ""
                }`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleActive()}
                className={`text-[20px] 
                ${isActive === true ? "border border-green-400" : ""}`}
                to="/books"
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleActive()}
                className={`text-[20px] ${
                  isActive === true ? "border border-green-400" : ""
                }`}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex gap-4">
          <button className="btn btn-outline btn-primary">Login</button>
          <button className="btn btn-outline btn-accent">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
