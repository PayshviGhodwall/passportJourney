import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function AdminLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    logout();
  }, []);

  const logout = async () => {
    if (await localStorage.getItem("token-admin")) {
      await localStorage.removeItem("token-admin");
    }

    return navigate("/admin/login");
  };

  return null;
}

export default AdminLogout;
