import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedAdminRoutes() {
  const auth = localStorage.getItem("token-admin"); // determine if authorized, from context or however you're doing it

  return auth ? <Outlet /> : <Navigate to="/admin/login" />;
}
export default ProtectedAdminRoutes;
