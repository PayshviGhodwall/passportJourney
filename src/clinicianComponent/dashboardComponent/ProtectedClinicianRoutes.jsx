import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedClinicianRoutes() {
  const auth = localStorage.getItem("token-clinician"); // determine if authorized, from context or however you're doing it

  return auth ? <Outlet /> : <Navigate to="/clinician/login" />;
}
export default ProtectedClinicianRoutes;
