import { FaHome, FaTicketAlt } from "react-icons/fa";
import {
  FaBuilding,
  FaBullhorn,
  FaList,
  FaMoneyBill,
  FaPaperPlane,
  FaRegUser,
  FaUsers,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  const isMember = true;
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin && (
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
          )}
          {isMember ? (
            <>
              <li>
                <NavLink to="/dashboard/memberProfile">
                  <FaHome></FaHome>
                  Member Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makePayment">
                  <FaMoneyBill></FaMoneyBill>
                  Make Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcements">
                  <FaBullhorn />
                  Announcements
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaHome></FaHome>
                  User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcements">
                  <FaBullhorn />
                  Announcements
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
            <NavLink to="/apartments">
              <FaBuilding />
              Apartment
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
