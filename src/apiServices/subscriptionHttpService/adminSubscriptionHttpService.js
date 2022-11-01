import adminhttpService from "../adminhttpService";
import { toast } from "react-toastify";

export async function getSubscriptionList() {
  try {
    const { data } = await adminhttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/admin/getSubscriptionList`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function updateSubscription(formData) {
  try {
    const { data } = await adminhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/admin/updateSubscription`,
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
