import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navabar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  const navBar = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/pizza">Order</NavLink>
      </li>
      {user ? (
        <div className="md:flex items-center gap-2">
          <button onClick={handleLogOut}>Logout</button>
          <div className="md:flex items-center gap-2">
            <img className="w-8" src={user.photoURL} alt="" />
            <span>{user.displayName}</span>
          </div>
        </div>
      ) : (
        <>
          <li>
            <NavLink to="/login">LogIn</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/formicRegister">Formic Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-25 bg-base-100 max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Misam's Kitchen</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navBar}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
