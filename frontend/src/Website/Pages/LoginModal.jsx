import { useState,useContext,createContext } from "react";

const LoginModal = ({show,onClose}) => {
  
  const [activePanel, setActivePanel] = useState("left"); // "left" or "right"

  return (
    <>
     
      {/* Modal*/}
      {show && (
        <div className="fixed inset-0 bg-blue-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl bg-white bg-opacity-80 rounded-xl shadow-2xl flex overflow-hidden transition-all duration-500">
            {/* Left Panel */}
            <div
              className={`w-1/2 p-6 transition-transform duration-500 ${
                activePanel === "left" ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <h2 className="text-xl font-bold mb-4">Login via Mobile</h2>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-2 border rounded mb-2"
              />
              <button
                className="w-full bg-blue-600 text-white p-2 rounded"
                onClick={() => setActivePanel("right")}
              >
                Send OTP
              </button>
            </div>
              {/* second */}
            {/* Right Panel */}
            <div
              className={`w-1/2 p-6 transition-transform duration-500 ${
                activePanel === "right" ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full p-2 border rounded mb-2"
              />
              <button
                className="w-full bg-green-600 text-white p-2 rounded"
                onClick={onClose}
              >
                Verify & Close
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
