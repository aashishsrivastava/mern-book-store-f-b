import React, { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("loged out successfully!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleCancel = () => {
    // Cancel the logout action
    // alert("Logout cancelled!");
    navigate("/admin/dashboard", { replace: true });
  };

  return (
    <>
      {/* <div className="h-screen bg-teal-100  flex items-center justify-center  ">
        <div className=" flex-col border-2 border-gray-400 rounded-xl px-24  py-14">
          <p className="text-3xl text-black font-bold capitalize mb-8">
            are you sure?{" "}
          </p>
          <button
            onClick={handleLogout}
            className=" bg-red-600 font-semibold text-4xl px-10 py-3 text-black shadow-xl hover:mt-2  rounded   "
          >
            Signout
          </button>
        </div>
      </div> */}

      {/* tacken from the below site */}
      {/* https://bbbootstrap.com/snippets/signout-alert-modal-27120166 */}
      <div className="h-screen bg-teal-950 flex items-center justify-center">
        <div className="p-4 sm:p-10 bg-gray-50 rounded-md  w-[300px] md:w-[500px] text-center overflow-y-auto">
          <span className="mb-4 inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg>
          </span>

          <h3 className="mb-2 text-2xl font-bold text-gray-800">Log out</h3>
          <p className="text-gray-500">
            Are you sure you would like to Log out of your account?
          </p>

          <div className="mt-6 flex justify-center gap-x-4">
            <button
              onClick={handleLogout}
              className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border hover:border-red-500 font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
            >
              Log out
            </button>

            <button
              onClick={handleCancel}
              type="button"
              className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
