import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function ClinicianLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    logout();
  }, []);

  const logout = async () => {
    if (await localStorage.getItem("token-clinician")) {
      await localStorage.removeItem("token-clinician");
    }

    return navigate("/clinician/login");
  };

  return null;
}

export default ClinicianLogout;
