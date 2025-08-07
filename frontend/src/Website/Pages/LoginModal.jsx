import { useState } from "react";

const LoginModal = ({ show, onClose }) => {
  const [activePanel, setActivePanel] = useState("left");

  return (
    <>
      {show && (
        <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl bg-white bg-opacity-80 rounded-xl shadow-2xl flex overflow-hidden transition-all duration-500">

            {/* Background shade transition layer */}
            <div
              className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 transition-all duration-700 ease-in-out z-0 ${activePanel === "left" ? "left-1/2" : "left-0"
                }`}
            ></div>

            {/* Left Panel */}
            <div
              className={`relative z-10 w-1/2 p-6  transition-transform duration-700 ${activePanel === "left" ? "translate-x-0" : "-translate-x-full"
                }`}
            >
              <h2 className="text-xl text-center font-bold mb-4 text-blue-400">Login via Email</h2>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-2  border-3 border-blue-200 rounded mb-2 focus:outline-none shadow-sm"
              />

              <div className="flex gap-1 mt-3">
                <button
                  className="bg-blue-300 text-white font-semibold  p-2 rounded-sm cursor-pointer"
                  onClick={() => setActivePanel("right")}
                >
                  Send OTP
                </button>

                {/* Show Message */}
                <p className="mt-3 text-xs ml-4 text-green-600 font-semibold">We Have Sent OTP In Your Registered Email</p>
              </div>
              <div className="mt-3">
                <h1 className="text-xl text-center font-bold mb-4 text-blue-400">Enter Your OTP</h1>
              </div>
              <div className="flex gap-4 justify-center mt-3">
                <input
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 p-2 text-xl text-center text-green-500 border-3 border-blue-200 rounded mb-2 focus:outline-none shadow-sm"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 p-2 text-xl text-center text-red-500 border-3 border-blue-200 rounded mb-2 focus:outline-none shadow-sm"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 p-2 text-xl text-center text-blue-500 border-3 border-blue-200 rounded mb-2 focus:outline-none shadow-sm"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 p-2 text-xl text-center text-yellow-400 border-3 border-blue-200  rounded mb-2 focus:outline-none shadow-sm"
                />

              </div>
              <div className="mt-1 text-center">
                <a href="#" className="text-blue-400">Resend Code </a>
              </div>
              <div className="mt-1 text-center">
                <p className="text-green-400">Verifications Successfullay</p>
              </div>
              <div className="mt-6">
                <button className="w-full bg-blue-300 py-3 text-white cursor-pointer rounded-lg font-semibold">Verify OTP</button>
              </div>

            </div>

            {/* Right Panel */}
            <div
              className={`relative z-10 w-1/2 p-6 transition-transform duration-700 ${activePanel === "right" ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <h2 className="text-xl font-bold mb-4">Register </h2>
              <div>
                <span className="text-blue-400">Name</span>
                <div>
                  <input
                    type="text"
                    placeholder="Enter full Name"
                    className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none"
                  />
                </div>
                <span className="text-blue-400">Email</span>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Register Email"
                    className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none"
                  />
                </div>
                <span className="text-blue-400">Mobile</span>
                <div>
                  <input
                    type="number"
                    placeholder="Enter mobile"
                    className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none"
                  />
                </div>
              </div>

              <button
                className="w-full bg-blue-300 hover:bg-blue-400 cursor-pointer  text-white p-2 rounded-md"
                onClick={onClose}
              >
                Verify & Close
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-2xl font-bold z-20"
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
