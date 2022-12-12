import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import clinicianhttpService from "../../apiServices/clinicianhttpService";

function ClinicianLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    logout();
  }, []);

  const logout = async () => {
    try {
      const { data } = await clinicianhttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/clinician/logout`
      );
      console.log(data);

      if (await localStorage.getItem("token-clinician")) {
        await localStorage.removeItem("token-clinician");
      }

      return navigate("/clinician/login");

      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  };

  return null;
}

export default ClinicianLogout;
