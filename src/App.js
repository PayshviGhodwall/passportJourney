import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@popperjs/core";
// import "bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Outlet } from "react-router-dom";
import AdminLogin from "./adminComponent/loginComponent/adminLogin";
import Dashboard from "./adminComponent/dashboardComponent/dashboard";
import AdminForgotPassword from "./adminComponent/loginComponent/adminForgotPassword";
import AdminOtpVerify from "./adminComponent/loginComponent/adminOtpVerify";
import AdminResetPassword from "./adminComponent/loginComponent/adminResetPassword";
import UserManagement from "./adminComponent/userComponent/userManagement";
import UserDetails from "./adminComponent/userComponent/userDetails";
import ClinicianManagement from "./adminComponent/clinicianComponent/clinicianManagement";
import AddClinician from "./adminComponent/clinicianComponent/addClinician";
import ViewClinician from "./adminComponent/clinicianComponent/viewClinician";
import EditClinician from "./adminComponent/clinicianComponent/editClinician";
import VideoSessionManagement from "./adminComponent/videoSessionComponent/videoSessionManagement";
import ViewCancel from "./adminComponent/videoSessionComponent/viewCancel";
import ViewPending from "./adminComponent/videoSessionComponent/viewPending";
import ViewUpcoming from "./adminComponent/videoSessionComponent/viewUpcoming";
import Subscription from "./adminComponent/subscriptionComponent/subscription";
import SubAdmin from "./adminComponent/subAdminComponent/subAdmin";
import SupportManagement from "./adminComponent/supportComponent/supportManagement";
import ContentManagement from "./adminComponent/contentComponent/contentManagement";
import TransactionManagement from "./adminComponent/transactionComponent/transactionManagement";
import Notifications from "./adminComponent/commonComponent/notifications";
import ChangePassword from "./adminComponent/commonComponent/changePassword";
import EditProfile from "./adminComponent/commonComponent/editProfile";
import ClinicianLogin from "./clinicianComponent/loginComponent/clinicianLogin";
import ClinicianForgotPassword from "./clinicianComponent/loginComponent/clinicianForgotPassword";
import ClinicianOtpVerify from "./clinicianComponent/loginComponent/clinicianOtpVerify";
import ClinicianResetPassword from "./clinicianComponent/loginComponent/clinicianResetPassword";
import ClinicianDashboard from "./clinicianComponent/dashboardComponent/clinicianDashboard";
import ClinicianVideoSessionManagement from "./clinicianComponent/videoSessionComponent/clinicianVideoSessionManagement";
import ClinicianViewUpcoming from "./clinicianComponent/videoSessionComponent/clinicianViewUpcoming";
import ClinicianViewComplete from "./clinicianComponent/videoSessionComponent/clinicianViewComplete";
import ClinicianSupport from "./clinicianComponent/supportComponent/clinicianSupport";
import ClinicianPrivacyPolicy from "./clinicianComponent/contentComponent/clinicianPrivacyPolicy";
import ClinicianAboutUs from "./clinicianComponent/contentComponent/clinicianAboutUs";
import ClinicianTermConditions from "./clinicianComponent/contentComponent/clinicianTerm&Conditions";
import ClinicianRecentAssignment from "./clinicianComponent/dashboardComponent/clinicianRecentAssignment";
import ClinicianNotifications from "./clinicianComponent/commonComponent/clinicianNotifications";
import ClinicianEditProfile from "./clinicianComponent/commonComponent/clinicianEditProfile";
import ClinicianChangePassword from "./clinicianComponent/commonComponent/clinicianChangePassword";
import ClinicianViewCancel from "./clinicianComponent/videoSessionComponent/clinicianViewCancel";
import EditContent from "./adminComponent/contentComponent/editContent";
import AdminLogout from "./adminComponent/commonComponent/adminLogout";
import ClinicianLogout from "./clinicianComponent/commonComponent/clinicianLogout";
import Index from "./websiteComponent";
import Team from "./websiteComponent/team";
import Donate from "./websiteComponent/donate";
import ContactUs from "./websiteComponent/contactUs";
import Query from "./adminComponent/queryComponent/query";
import ScrollToTop from "./websiteComponent/commonComponent/scrollToTop";
import { getAdminData } from "./apiServices/adminHttpService/adminLoginHttpService";
import UnAuth from "./websiteComponent/commonComponent/unAuth";
import QuerySubscribe from "./adminComponent/queryComponent/querySubscribe";
import Payment from "./websiteComponent/payment";
import PaymentSuccess from "./websiteComponent/commonComponent/paymentSuccess";
import PaymentError from "./websiteComponent/commonComponent/paymentError";

function App() {
  const [subAdmin, setSubAdmin] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token-admin")) getAdminValue();
  }, []);

  const getAdminValue = async () => {
    const { data } = await getAdminData();
    if (!data.error) {
      setSubAdmin(data.results.admin.module);
    }
  };

  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* <Route
            path="/"
            element={() => () => {
              return <Navigate to="/home" />;
            }}
          /> */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route
            path="/admin/forgot-password"
            element={<AdminForgotPassword />}
          />
          <Route path="/admin/otp-verification" element={<AdminOtpVerify />} />
          <Route
            path="/admin/reset-password"
            element={<AdminResetPassword />}
          />

          {!subAdmin.length || subAdmin.includes(2) ? (
            <>
              <Route
                path="/admin/user-management"
                element={<UserManagement />}
              />
              <Route path="/admin/user-details/:id" element={<UserDetails />} />{" "}
            </>
          ) : (
            <Route path="/admin/user-management" element={<UnAuth />} />
          )}

          {!subAdmin.length || subAdmin.includes(3) ? (
            <>
              <Route
                path="/admin/clinician-management"
                element={<ClinicianManagement />}
              />
              <Route
                path="/admin/add-new-clinician"
                element={<AddClinician />}
              />
              <Route
                path="/admin/view-clinician/:id"
                element={<ViewClinician />}
              />
              <Route path="/admin/edit-clinician" element={<EditClinician />} />{" "}
            </>
          ) : (
            <Route path="/admin/clinician-management" element={<UnAuth />} />
          )}

          {!subAdmin.length || subAdmin.includes(4) ? (
            <>
              <Route
                path="/admin/video-session-management"
                element={<VideoSessionManagement />}
              />
              <Route path="/admin/view-upcoming" element={<ViewUpcoming />} />
              <Route path="/admin/view-pending" element={<ViewPending />} />
              <Route path="/admin/view-cancel" element={<ViewCancel />} />
            </>
          ) : (
            <Route
              path="/admin/video-session-management"
              element={<UnAuth />}
            />
          )}

          {!subAdmin.length || subAdmin.includes(5) ? (
            <Route
              path="/admin/subscription-management"
              element={<Subscription />}
            />
          ) : (
            <Route path="/admin/subscription-management" element={<UnAuth />} />
          )}

          {!subAdmin.length || subAdmin.includes(6) ? (
            <Route path="/admin/sub-admin-management" element={<SubAdmin />} />
          ) : (
            <Route path="/admin/sub-admin-management" element={<UnAuth />} />
          )}

          {!subAdmin.length || subAdmin.includes(7) ? (
            <Route
              path="/admin/transaction-management"
              element={<TransactionManagement />}
            />
          ) : (
            <Route path="/admin/transaction-management" element={<UnAuth />} />
          )}

          {!subAdmin.length || subAdmin.includes(8) ? (
            <Route
              path="/admin/support-management"
              element={<SupportManagement />}
            />
          ) : (
            <Route path="/admin/support-management" element={<UnAuth />} />
          )}

          {!subAdmin.length || subAdmin.includes(9) ? (
            <>
              <Route
                path="/admin/content-management"
                element={<ContentManagement />}
              />
              <Route
                path="/admin/edit-content-management"
                element={<EditContent />}
              />
            </>
          ) : (
            <Route path="/admin/content-management" element={<UnAuth />} />
          )}

          {!subAdmin.length || subAdmin.includes(10) ? (
            <Route
              path="/admin/query-management"
              element={<QuerySubscribe />}
            />
          ) : (
            <Route path="/admin/query-management" element={<UnAuth />} />
          )}

          <Route path="/admin/notifications" element={<Notifications />} />
          <Route path="/admin/edit-profile" element={<EditProfile />} />
          <Route path="/admin/change-password" element={<ChangePassword />} />
          <Route path="/admin/logout" element={<AdminLogout />} />

          {/*Clinician routes*/}
          <Route path="/clinician/login" element={<ClinicianLogin />} />
          <Route path="/clinician/dashboard" element={<ClinicianDashboard />} />
          <Route
            path="/clinician/view-recent-assignment"
            element={<ClinicianRecentAssignment />}
          />

          <Route
            path="/clinician/forgot-password"
            element={<ClinicianForgotPassword />}
          />
          <Route
            path="/clinician/otp-verification"
            element={<ClinicianOtpVerify />}
          />
          <Route
            path="/clinician/reset-password"
            element={<ClinicianResetPassword />}
          />
          <Route
            path="/clinician/video-session-management"
            element={<ClinicianVideoSessionManagement />}
          />
          <Route
            path="/clinician/view-upcoming"
            element={<ClinicianViewUpcoming />}
          />
          <Route
            path="/clinician/view-complete"
            element={<ClinicianViewComplete />}
          />
          <Route
            path="/clinician/view-cancel"
            element={<ClinicianViewCancel />}
          />
          <Route path="/clinician/about-us" element={<ClinicianAboutUs />} />
          <Route
            path="/clinician/terms-conditions"
            element={<ClinicianTermConditions />}
          />
          <Route
            path="/clinician/privacy-policy"
            element={<ClinicianPrivacyPolicy />}
          />

          <Route
            path="/clinician/support-management"
            element={<ClinicianSupport />}
          />
          <Route
            path="/clinician/notifications"
            element={<ClinicianNotifications />}
          />
          <Route
            path="/clinician/my-profile"
            element={<ClinicianEditProfile />}
          />
          <Route
            path="/clinician/change-password"
            element={<ClinicianChangePassword />}
          />
          <Route path="/clinician/logout" element={<ClinicianLogout />} />

          {/* Web routes */}
          <Route path="/home" element={<Index />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/cancel" element={<PaymentError />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
