import clinicianhttpService from "../../clinicianhttpService";
import { toast } from "react-toastify";

export async function createSupport(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/clinician/createSupport`,
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
export async function getContents(formData) {
  try {
    const { data } = await clinicianhttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/admin/getContents`,
      formData
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
