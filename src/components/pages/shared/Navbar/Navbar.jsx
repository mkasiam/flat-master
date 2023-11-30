import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apartments">Apartment</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
      <div className="navbar-start gap-2 md:gap-5 lg:gap-7">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <div>
            <img
              className="w-full rounded-sm"
              src="https://i.ibb.co/VxTkw7C/aparment.png"
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {links}
        </ul>
      </div>
      {/* Right side: User picture and login button */}
      <div className="navbar-end flex items-center">
        <div>
          {user ? (
            <div className="dropdown dropdown-end text-black">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user && user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <h1>
                    {user && (
                      <p className="text-lg font-medium">{user?.displayName}</p>
                    )}
                  </h1>
                </li>
                <li>
                  <Link to="/dashboard/announcements">Dashboard</Link>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn text-[#87DD94] btn-outline rounded-md"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
