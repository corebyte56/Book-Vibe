import { NavLink } from "react-router";

export default function Navbar() {
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
                <NavLink to="/books">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="/Pages to Read">Pages to Read</NavLink>
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
                className={({ isActive }) =>
  `relative text-[18px] px-3 py-2 rounded-md transition-all duration-300
   text-base-content hover:text-green-500
   after:content-[''] after:absolute after:left-0 after:-bottom-1
   after:h-0.5 after:bg-green-500 after:transition-all after:duration-300

   ${isActive 
     ? "after:w-full text-green-500 font-semibold" 
     : "after:w-0 hover:after:w-full"
   }`
}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
  `relative text-[18px] px-3 py-2 rounded-md transition-all duration-300
   text-base-content hover:text-green-500
   after:content-[''] after:absolute after:left-0 after:-bottom-1
   after:h-0.5 after:bg-green-500 after:transition-all after:duration-300

   ${isActive 
     ? "after:w-full text-green-500 font-semibold" 
     : "after:w-0 hover:after:w-full"
   }`
}
                to="/books"
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
  `relative text-[18px] px-3 py-2 rounded-md transition-all duration-300
   text-base-content hover:text-green-500
   after:content-[''] after:absolute after:left-0 after:-bottom-1
   after:h-0.5 after:bg-green-500 after:transition-all after:duration-300

   ${isActive 
     ? "after:w-full text-green-500 font-semibold" 
     : "after:w-0 hover:after:w-full"
   }`
}   
                to="/Pages to Read"
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex gap-4">
          <button className="btn btn-outline btn-primary text-xl">Login</button>
          <button className="btn btn-outline btn-accent text-xl">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
