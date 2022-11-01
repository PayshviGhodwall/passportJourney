import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";
import {
  getModule,
  updateSubAdmin,
} from "../../apiServices/subAdminHttpService/subAdminHttpService";
const options = [
  { label: "Dashboard", value: 1 },
  { label: "Users Management", value: 2 },
  { label: "Clinician Management", value: 3 },
  { label: "Video Session Management", value: 4 },
  { label: "Subscription Management", value: 5 },
  { label: "Sub-admin Management", value: 6 },
  { label: "Transaction Management", value: 7 },
  { label: "Help & Support Management", value: 8 },
  { label: "Content Management", value: 9 },
];

function EditSubAdmin({ listing, adminData }) {
  const [selected, setSelected] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAdminValue();
  }, []);

  const getAdminValue = async () => {
    let defaultValue = {};
    defaultValue.email = adminData.email;
    defaultValue.full_name = adminData.full_name;

    reset({ ...defaultValue });
    let defaultValues = [];
    for (const module of adminData.module) {
      const label = options.filter((item) => item.value == module);
      defaultValues.push({ label: label[0].label, value: module });
    }
    setSelected(defaultValues);
  };

  const onSubmit = async (data) => {
    console.log(data);
    data.subAdminId = adminData._id;
    data.module = selected.map((option, index) => option.value);
    const response = await updateSubAdmin(data);
    if (!response.data.error) {
      const button = document.getElementById("close");
      button.click();
      await listing();
    }
  };

  return (
    <>
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            Edit Sub-Admin Management
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body py-4 px-4">
          <form
            class="row form-design align-items-end px-2 py-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div class="form-group mb-3 col-6">
              <label for="">Sub-Admin Name</label>
              <input
                type="text"
                class="form-control"
                id="full_name"
                name="full_name"
                {...register("full_name", {
                  required: true,
                })}
              />
              {errors?.full_name && (
                <p className="form-error mt-1">This field is required</p>
              )}
            </div>
            <div class="form-group mb-3 col-6">
              <label for="">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors?.email && (
                <p className="form-error mt-1">{errors.email.message}</p>
              )}
            </div>
            <div class="form-group mb-3 col-6">
              <label for="">Password</label>
              <input
                class="form-control"
                type="password"
                id="password"
                name="password"
                {...register("password", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters",
                  },
                })}
              />
              {errors?.password && (
                <p className="form-error mt-1">{errors?.password?.message}</p>
              )}
            </div>
            <div class="form-group mb-3 col-6 multiple_select_design">
              <label for="">Select Module</label>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}
                isCreatable={true}
              />
            </div>
            <div class="form-group mb-0 mt-3 col-12 text-center">
              <button class="comman_btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditSubAdmin;
