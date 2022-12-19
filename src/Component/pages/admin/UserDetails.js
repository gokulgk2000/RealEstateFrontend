import React, { useEffect, useState } from "react";
import { addUser, getUserById, removeUser } from "../../helper/backend_helpers";
import { useModal } from "../../helper/hook/useModal";
import { useQuery } from "../../helper/hook/useQuery";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import RemoveModel from "../../models/RemoveModel";
import { Breadcrumbs } from "@material-tailwind/react";
import AddModel from "../../models/AddModel";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const query = useQuery();
  const [modalOpen, setModalOpen, toggleModal] = useModal(false);
  const [modalOpen1, setModalOpen1, toggleModal1] = useModal(false);
  const [getUser, setGetUser] = useState(null);
  const [rerender, setRerender] = useState(true);
  const statusColor = {
    approved: "green",
    pending: "#e8bf09",
    rejected: "red",
  };

  console.log("getuser", getUser);
  const getUserId = async () => {
    const res = await getUserById({
      userID: query.get("id"),
    });
    if (res.success) {
      setGetUser(res.User);
      console.log("res", res);
    }
  };

  useEffect(() => {
    if (rerender) {
      getUserId();
      setRerender(false);
    }
  }, [rerender]);

  const handleRemovingUser = async () => {
    const payload = {
      userID: query.get("id"),
    };
    const res = await removeUser(payload);

    if (res.success) {
      console.log("res", res);
      toastr.success(`User has been Deactivated successfully`, "Success");
      setRerender(true);
    } else {
      console.log("Error : ", res?.msg || "error");
    }
    setModalOpen(false);
  };
  const handleAddUser = async () => {
    const payload = {
      userID: query.get("id"),
    };
    const res = await addUser(payload);

    if (res.success) {
      console.log("res", res);
      toastr.success(`User has been activated successfully`, "Success");
      setRerender(true);
    } else {
      console.log("Error : ", res?.msg || "error");
    }
    setModalOpen1(false);
  };

  return (
    <React.Fragment>
      {modalOpen && (
        <RemoveModel
          show={modalOpen}
          onDeleteClick={handleRemovingUser}
          confirmText="Yes,DeActive"
          cancelText="Cancel"
          onCloseClick={() => setModalOpen(false)}
        />
      )}
      {modalOpen1 && (
        <AddModel
          show={modalOpen}
          onAddClick={handleAddUser}
          confirmText="Yes,Active"
          cancelText="Cancel"
          onCloseClick={() => setModalOpen1(false)}
        />
      )}

      <Breadcrumbs>
      <Link to="/admin/Dashboard">
        <button  className="opacity-60 font">
          Dashboard
        </button></Link>
        <Link to="/admin/userlist">
        <button className="opacity-60 font">
          Sellers
        </button></Link>
        <Link to="/admin/userdetails">
        <button href="" className="text-amber-700 font">
          SellersDetails
        </button></Link>
      </Breadcrumbs>
      <div className="min-w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-5 px-5">
        <div className="flex flex-col items-left pb-10 leading-loose">
          <h5 className="mx-1 text-xlfont-light text-gray-900 dark:text-white leading-loose">
            Firstname : {getUser?.firstname}
          </h5>
          <h5 className="mx-1 text-xlfont-light text-gray-900 dark:text-white leading-loose">
            Lastname : {getUser?.lastname}
          </h5>
          <h5 className="mx-1 text-xlfont-light text-gray-900 dark:text-white leading-loose">
            {" "}
            Email :{getUser?.email}
          </h5>
          <h5 className="mx-1 text-xlfont-light text-gray-900 dark:text-white leading-loose">
            {" "}
            Date :{getUser?.date}
          </h5>
          <h5 className="mx-1 text-xlfont-light text-gray-900 dark:text-white leading-loose">
            {" "}
            Status :{" "}
            <span style={{ color: statusColor[getUser?.status] }}>
              {getUser?.status}
            </span>
          </h5>
        </div>
        <div className="flex mt-4 space-x-3 md:mt-6">
          {getUser?.status !== "approved" ? (
            <button
              href="#"
              class="inline-flex items-center px-4 py-2 text-smfont-light text-center  text-white  bg-amber-700 rounded-lg hover:bg-amber-900  focus:ring-4 focus:outline-none  dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              onClick={() => toggleModal1()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Approved
            </button>
          ) : (
            <button
              href="#"
              class="inline-flex items-center px-4 py-2 text-smfont-light text-center  text-white  bg-amber-700 rounded-lg hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              onClick={() => toggleModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Rejected
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
