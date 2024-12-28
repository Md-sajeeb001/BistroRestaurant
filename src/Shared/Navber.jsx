import { Link } from "react-router-dom";

const Navber = () => {
  const navLinks = (
    <>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
    </>
  );

  return (
    <>
      <div className="navbar fixed top-0 z-50 container mx-auto bg-opacity-40 text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl">
            BISTRO BOSS <br />
            <span className="text-sm font-normal">R e s t a u r a n t</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navber;
