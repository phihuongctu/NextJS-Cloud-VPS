import { useEffect } from "react";

export default function ModalNotify({ modalNotify, setModalNotify, data }) {
  useEffect(() => {
    if (modalNotify) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = " unset";
    }
  }, [modalNotify]);
  return (
    <div
      className={` ${
        modalNotify ? "" : "hidden"
      } min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover `}
      id="modal-id"
    >
      <div
        className="absolute bg-black opacity-80 inset-0 z-0"
        onClick={() => setModalNotify(!modalNotify)}
      />
      <div className="w-100-32 max-w-md p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        {/*content*/}
        <div className>
          {/*body*/}
          <div className="text-center flex-auto justify-center">
            <div
              onClick={() => setModalNotify(!modalNotify)}
              className="close mb-8 cursor-pointer w-10 h-10 flex items-center justify-center ml-auto mr-0"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.270363 0.270363C0.630847 -0.090121 1.21531 -0.090121 1.57579 0.270363L8 6.69457L14.4242 0.270363C14.7847 -0.090121 15.3692 -0.090121 15.7296 0.270363C16.0901 0.630847 16.0901 1.21531 15.7296 1.57579L9.30543 8L15.7296 14.4242C16.0901 14.7847 16.0901 15.3692 15.7296 15.7296C15.3692 16.0901 14.7847 16.0901 14.4242 15.7296L8 9.30543L1.57579 15.7296C1.21531 16.0901 0.630847 16.0901 0.270363 15.7296C-0.090121 15.3692 -0.090121 14.7847 0.270363 14.4242L6.69457 8L0.270363 1.57579C-0.090121 1.21531 -0.090121 0.630847 0.270363 0.270363Z"
                  fill="black"
                  fillOpacity="0.38"
                />
              </svg>
            </div>
            <div className="thumbnail inline-block">
              <svg
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="45.5"
                  cy="45.5"
                  r="45"
                  fill="black"
                  fillOpacity="0.04"
                />
                <path
                  d="M59.5802 38.2475C60.3613 37.4665 60.3613 36.2001 59.5802 35.4191C58.7992 34.638 57.5328 34.638 56.7518 35.4191L40.8327 51.3382L34.2469 44.7524C33.4658 43.9714 32.1995 43.9714 31.4185 44.7524C30.6374 45.5335 30.6374 46.7998 31.4185 47.5808L39.4185 55.5808C40.1995 56.3619 41.4658 56.3619 42.2469 55.5808L59.5802 38.2475Z"
                  fill="#1D53DA"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M45.4993 16.1666C29.299 16.1666 16.166 29.2996 16.166 45.5C16.166 61.7003 29.299 74.8333 45.4993 74.8333C61.6997 74.8333 74.8327 61.7003 74.8327 45.5C74.8327 29.2996 61.6997 16.1666 45.4993 16.1666ZM20.166 45.5C20.166 31.5087 31.5081 20.1666 45.4993 20.1666C59.4906 20.1666 70.8327 31.5087 70.8327 45.5C70.8327 59.4912 59.4906 70.8333 45.4993 70.8333C31.5081 70.8333 20.166 59.4912 20.166 45.5Z"
                  fill="#1D53DA"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold py-4 text-gray-500 ">
              Start success
            </h2>
            <p className="text-sm text-gray-500 px-8">Service is running</p>
          </div>
          {/*footer*/}
          <div className="p-3  mt-10 text-center space-x-4 md:block">
            <button
              onClick={() => setModalNotify(!modalNotify)}
              className=" w-full mb-2 md:mb-0 bg-blue-600  px-5 py-4 text-sm shadow-sm font-medium tracking-wider text-white rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
