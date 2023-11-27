import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Apartments from "../pages/Apartments/Apartments/Apartments";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/LogIn/LogIn";
import NotFound from "../pages/NotFound/NotFound";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute.jsx";
import Dashboard from "../layout/Dashboard";
import UserProfile from "../pages/Dashboard/User/UserProfile/UserProfile.jsx";
import MemberProfile from "../pages/Dashboard/Member/MemberProfile/MemberProfile.jsx";
import MakePayment from "../pages/Dashboard/Member/MakePayment/MakePayment.jsx";
import PaymentHistory from "../pages/Dashboard/Member/PaymentHistory/PaymentHistory.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile.jsx";
import ManageMembers from "../pages/Dashboard/Admin/ManageMembers/ManageMembers.jsx";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement/MakeAnnouncement.jsx";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons/ManageCoupons.jsx";
import AgreementRequest from "../pages/Dashboard/Admin/AgreementRequest/AgreementRequest.jsx";
import Announcements from "../pages/Dashboard/shared/Announcements/Announcements.jsx";

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
        loader: () => fetch("http://localhost:5000/apartmentCount"),
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
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "manageMembers",
        element: <ManageMembers></ManageMembers>,
      },
      {
        path: "makeAnnouncement",
        element: <MakeAnnouncement></MakeAnnouncement>,
      },
      {
        path: "agreementRequest",
        element: <AgreementRequest></AgreementRequest>,
      },
      {
        path: "manageCoupons",
        element: <ManageCoupons></ManageCoupons>,
      },
    ],
  },
]);
