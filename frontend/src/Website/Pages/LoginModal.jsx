import { useState } from "react";

const LoginModal = ({ show, onClose }) => {
  const [activePanel, setActivePanel] = useState("left");

  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 px-2">
          <div className="relative w-full max-w-4xl bg-white bg-opacity-80 rounded-xl shadow-2xl transition-all duration-500">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-2xl font-bold z-20"
            >
              &times;
            </button>

            {/* -------- Desktop Layout -------- */}
            <div className="hidden md:flex overflow-hidden h-full">
              {/* Background layer */}
              <div
                className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 transition-all duration-700 ease-in-out z-0 ${activePanel === "left" ? "left-1/2" : "left-0"
                  }`}
              ></div>

              {/* Left Panel */}
              <div
                className={`relative z-10 w-1/2 p-6 transition-transform duration-700 ${activePanel === "left" ? "translate-x-0" : "-translate-x-full"
                  }`}
              >
                <h2 className="text-xl text-center font-bold mb-4 text-blue-400">Login via Email</h2>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none shadow-sm"
                />

                <div className="flex gap-1 mt-3">
                  <button
                    className="bg-blue-300 text-white font-semibold p-2 rounded-sm cursor-pointer"
                    onClick={() => setActivePanel("right")}
                  >
                    Send OTP
                  </button>
                  <p className="mt-3 text-xs ml-4 text-green-600 font-semibold">
                    We Have Sent OTP In Your Registered Email
                  </p>
                </div>

                <h1 className="text-xl text-center font-bold mt-4 mb-2 text-blue-400">Enter Your OTP</h1>
                <div className="flex gap-4 justify-center mt-3">
                  {[...Array(4)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 p-2 text-xl text-center border-3 border-blue-200 rounded shadow-sm focus:outline-none"
                    />
                  ))}
                </div>
                <div className="mt-2 text-center">
                  <a href="#" className="text-blue-400">Resend Code</a>
                  <p className="text-green-400 mt-1">Verification Successful</p>
                </div>
                <button className="w-full bg-blue-300 py-3 mt-4 text-white cursor-pointer rounded-lg font-semibold">
                  Verify OTP
                </button>
              </div>

              {/* Right Panel */}
              <div
                className={`relative z-10 w-1/2 p-6 transition-transform duration-700 ${activePanel === "right" ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                <h2 className="text-xl font-bold mb-4">Register</h2>
                <div>
                  <label className="text-blue-400">Name</label>
                  <input
                    type="text"
                    placeholder="Enter full Name"
                    className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none"
                  />
                  <label className="text-blue-400">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Register Email"
                    className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none"
                  />
                  <label className="text-blue-400">Mobile</label>
                  <input
                    type="number"
                    placeholder="Enter mobile"
                    className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none"
                  />
                </div>
                <button
                  className="w-full bg-blue-300 hover:bg-blue-400 text-white p-2 rounded-md mt-4"
                  onClick={onClose}
                >
                  Verify & Close
                </button>
              </div>
            </div>

            {/* -------- Mobile Layout -------- */}
            <div className="block md:hidden p-5">
              {activePanel === "left" ? (
                <>
                  <h2 className="text-xl text-center font-bold mb-4 text-blue-400">Login via Email</h2>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full p-2 border-2 border-blue-300 rounded mb-2"
                  />
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded my-2"
                    onClick={() => setActivePanel("right")}
                  >
                    Send OTP
                  </button>
                  <p className="text-green-600 text-sm text-center">OTP sent to your email</p>

                  <h3 className="text-center font-semibold mt-6 text-blue-400">Enter OTP</h3>
                  <div className="flex justify-center gap-2 mt-2">
                    {[...Array(4)].map((_, i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        className="w-10 h-10 text-center border-2 border-blue-300 rounded"
                      />
                    ))}
                  </div>
                  <div className="text-center mt-2">
                    <a href="#" className="text-blue-400 text-sm">Resend Code</a>
                  </div>
                  <button className="w-full bg-green-500 text-white mt-4 py-2 rounded">Verify OTP</button>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-4 text-center text-blue-400">Register</h2>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="w-full p-2 border-2 border-blue-300 rounded mb-2"
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full p-2 border-2 border-blue-300 rounded mb-2"
                  />
                  <input
                    type="number"
                    placeholder="Enter Mobile Number"
                    className="w-full p-2 border-2 border-blue-300 rounded mb-4"
                  />
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded mb-2"
                    onClick={onClose}
                  >
                    Verify & Close
                  </button>
                  <button
                    className="w-full bg-gray-300 text-blue-700 py-2 rounded"
                    onClick={() => setActivePanel("left")}
                  >
                    ← Back to Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
