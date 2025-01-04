import { FaBookBible, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaAd, FaCalendarAlt, FaList } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex gap-10">
      <div className="">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-4">
              {/* Sidebar content here */}

              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/home">
                      <FaHome></FaHome> Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/addItems">
                      <FaUtensils></FaUtensils> Add Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageItems">
                      <FaListUl></FaListUl> Manage Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageBookings">
                      <FaBook></FaBook> Manage bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myBooking">
                      <FaBookBible></FaBookBible> My Booking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allUsers">
                      <FaUsers></FaUsers> All Users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/home">
                      <MdHome></MdHome> User Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/reservation">
                      <FaCalendarAlt></FaCalendarAlt> Reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/review">
                      <FaAd></FaAd> Add Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/cart">
                      <FaCartShopping></FaCartShopping> My Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/booking">
                      <FaBookBible></FaBookBible> My Booking
                    </NavLink>
                  </li>
                </>
              )}

              {/* shared nav links */}
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <MdHome></MdHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/order/salad">
                  <LuMenu></LuMenu> Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/order/contact">
                  <MdEmail></MdEmail> contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
