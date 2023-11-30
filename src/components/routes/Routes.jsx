import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Apartments from "../pages/Apartments/Apartments/Apartments";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile.jsx";
import AgreementRequest from "../pages/Dashboard/Admin/AgreementRequest/AgreementRequest.jsx";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement/MakeAnnouncement.jsx";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons/ManageCoupons.jsx";
import ManageMembers from "../pages/Dashboard/Admin/ManageMembers/ManageMembers.jsx";
import MakePayment from "../pages/Dashboard/Member/MakePayment/MakePayment.jsx";
import MemberProfile from "../pages/Dashboard/Member/MemberProfile/MemberProfile.jsx";
import PaymentHistory from "../pages/Dashboard/Member/PaymentHistory/PaymentHistory.jsx";
import UserProfile from "../pages/Dashboard/User/UserProfile/UserProfile.jsx";
import Announcements from "../pages/Dashboard/shared/Announcements/Announcements.jsx";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/LogIn/LogIn";
import NotFound from "../pages/NotFound/NotFound";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartments",
        element: <Apartments></Apartments>,
        loader: () => fetch("https://flat-master-server.vercel.app/apartmentCount"),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "announcements",
        element: <Announcements></Announcements>,
      },
      // Member routes
      {
        path: "memberProfile",
        element: <MemberProfile></MemberProfile>,
      },
      {
        path: "makePayment",
        element: <MakePayment></MakePayment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin only routes
      {
        path: "adminProfile",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "manageMembers",
        element: (
          <AdminRoute>
            <ManageMembers></ManageMembers>
          </AdminRoute>
        ),
      },
      {
        path: "makeAnnouncement",
        element: (
          <AdminRoute>
            <MakeAnnouncement></MakeAnnouncement>
          </AdminRoute>
        ),
      },
      {
        path: "agreementRequest",
        element: (
          <AdminRoute>
            <AgreementRequest></AgreementRequest>
          </AdminRoute>
        ),
      },
      {
        path: "manageCoupons",
        element: (
          <AdminRoute>
            <ManageCoupons></ManageCoupons>
          </AdminRoute>
        ),
      },
    ],
  },
]);
