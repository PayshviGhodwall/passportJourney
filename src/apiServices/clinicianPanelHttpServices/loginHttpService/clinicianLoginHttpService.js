import clinicianhttpService from "../../clinicianhttpService";
import { toast } from "react-toastify";

export async function clinicianLogin(formData) {
  try {
    const { data, headers } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/login`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-clinician");
      await localStorage.setItem(
        "token-clinician",
        headers["x-auth-token-clinician"]
      );

      toast.success(data.message);
    } else toast.error(data.message);

    console.log(data.message);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function forgotPassword(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/forgotPassword`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-clinician");
      toast.success(data.results.otp);
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function verifyOTP(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/verifyOTP`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function updatePassword(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/updatePassword`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function getDashboardCount() {
  try {
    const { data } = await clinicianhttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/getDashboardCount`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function getNotificationList() {
  try {
    const { data } = await clinicianhttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/getNotificationList`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function changePassword(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/changePassword`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function getClinicianData() {
  try {
    const { data } = await clinicianhttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/getClinicianData`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function editClinician(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/updateProfile`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function getSessionList(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/getSessionList`,
      formData
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function getSessionData(id) {
  try {
    const { data } = await clinicianhttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/getSessionData/${id}`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function getSessionHistory(id) {
  try {
    const { data } = await clinicianhttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/getSessionHistory/${id}`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function assignActivity(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/assignActivity`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function assignJournal(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/assignJournal`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function assignWorksheet(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/assignWorksheet`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function saveSessionDocumentation(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/saveSessionDocumentation`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function cancelSession(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/cancelSession`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function getSessionCount() {
  try {
    const { data } = await clinicianhttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/getSessionCount`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function downloadFiles(formData) {
  try {
    const { data } = await clinicianhttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/download/${formData}`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
