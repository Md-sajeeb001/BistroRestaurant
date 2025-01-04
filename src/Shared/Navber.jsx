import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { FaCartShopping } from "react-icons/fa6";
import UseCart from "../Hooks/UseCart";

const Navber = () => {
  const { user, signOutUser } = UseAuth();
  const [cart] = UseCart();
  // sign out user!
  const handelSignOutUser = () => {
    signOutUser().then((res) => {
      console.log(res);
    });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT US</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">ORDERS FOOD</NavLink>
      </li>
      <li>
        <NavLink to="/secret">SECRET</NavLink>
      </li>
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
        <div className="navbar-end gap-3">
          <div>
            <NavLink to="/dashboard/cart">
              <button className="btn">
                <FaCartShopping></FaCartShopping>
                <div className="badge badge-secondary">+{cart?.length}</div>
              </button>
            </NavLink>
          </div>
          {user ? (
            <Link className="btn" onClick={handelSignOutUser}>
              LOG OUT
            </Link>
          ) : (
            <NavLink className="btn" to="/login">
              LOGIN
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navber;
