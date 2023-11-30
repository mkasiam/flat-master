import { useEffect, useState } from "react";
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
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Dashboard = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [isMember, setIsMember] = useState(false);
  const [isUser, SetIsUser] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    axiosSecure.get(`/users/${userEmail}`).then((res) => {
      if (res.data.role == "user") {
        SetIsUser(true);
      }
      if (res.data.role == "member") {
        setIsMember(true);
      }
    });
  }, [userEmail, axiosSecure]);

  const links = (
    <>
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
              Manage Coupons
            </NavLink>
          </li>
        </>
      )}
      {isMember && (
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
      )}

      {isUser && (
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
    </>
  );

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        {/* Show dropdown on smaller screens */}
        <div className="dropdown lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
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
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          )}
        </div>
        {/* Show sidebar on larger screens */}
        <ul className="menu p-4 hidden lg:block">{links}</ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
