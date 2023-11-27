import { FaBullhorn, FaPaperPlane, FaRegUser, FaUsers } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminProfile">
                  <FaRegUser />
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageMembers">
                  <FaUsers />
                  Manage Members
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAnnouncement">
                <FaBullhorn />
                  Make Announcement
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/agreementRequest">
                <FaPaperPlane />
                  Agreement Request
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCoupons">
                <FaTicketAlt />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaCalendar></FaCalendar>
                  Not History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList>
                  Real Payment History
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;