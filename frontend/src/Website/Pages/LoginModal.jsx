import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const LoginModal = ({ show, onClose }) => {
  const inputsRef = useRef([]);// isko use kiya gya hai otp next focus ke liye
  const [activePanel, setActivePanel] = useState("left");

  /* login with email and sending email */
  const [email, setEmail] = useState('');
  const [emailDisabled, setEmailDisabled] = useState(false);
  const [resposneMsg, setResponseMsg] = useState('');
  const [loader, setLoader] = useState(false);

  /* verify OTP */
  const [otp, SetOtp] = useState(["", "", "", ""]);
  const [emailverifyMsg, setEmailVerifyMsg] = useState('');
  const [emailVerifyError, setEmailVerifyError] = useState('');

  /* Registration Form*/

  const [regFormData, setRegFormData] = useState({
    FullName: "",
    email: "",
    mobile: ""
  });

  useEffect(() => {
    setRegFormData(prv => ({ ...prv, email: email })) // ye latest value dega jab state update ho jaye
  }, [email]);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setRegFormData((prv) => ({
      ...prv,
      [name]: value
    }))
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/web/api/mail/registration', regFormData);
      Swal.fire({
        title: 'success',
        text: res.data.message,
        icon: 'success',
        confirmButtonText: 'OK'
      });
      onClose();// yaha function modal ko close karne ke liye
      setActivePanel("left");
      setEmail("");
      setRegFormData({
        fullName: "",
        email: "",
        mobile: ""
      });
      

    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });

    }

  }





  /* Verify OTP */

  const handleVerifyOtp = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    SetOtp(newOtp);
    /* next step focus  */
    if (value && index < otp.length - 1) { // ye check kar raha hai autofocus value khali na ho aur 4 ke baad focus na ho
      inputsRef.current[index + 1].focus();
    }

  };

  const handleKeyDown = (e, index) => {
    // yaha pe check ho raha hai kya jo key dabi hai wo backspace hai aur current otp array khali hai
    //  aur index>0 zero inputfield ke baad na jaye cursor
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  }

  const handleOtpSubmit = async () => {

    try {
      const finalOtp = otp.join("");

      /* console.log(`fInalOTP: ${finalOtp}`) */
      const res = await axios.post('http://localhost:8000/web/api/mail/verify', { email, otp: finalOtp });
      setEmailVerifyMsg(res.data.message);
      setActivePanel("right");
      // submit hone ke baad reset karna
      setEmailDisabled(false);
      SetOtp(["","","",""]);
      setEmailVerifyMsg('');
      setEmailVerifyError("");
      setResponseMsg('');
    } catch (error) {
      console.error(error.response?.data || error.message);
      setEmailVerifyError(error.response?.data?.message || "Somethings Went Wrong");

    }

  };

  /* email ko handle kiya gya hia otp send karne ke liye */
  const handleChange = (e) => {
    setEmail(e.target.value);

  };

  const handleSendOTP = async () => {
    try {

      setLoader(true);
      const res = await axios.post('http://localhost:8000/web/api/mail/send', { email });
      setResponseMsg(res.data.message);
      setEmailDisabled(true);
    } catch (error) {
      console.error(error.response?.data || error.message);
    } finally {
      setLoader(false)
    }
  };







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
                  onChange={handleChange}
                  value={email}
                  disabled={emailDisabled}
                  required
                  placeholder="Enter Your Email"
                  className="relative w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none shadow-sm"
                />
                {emailDisabled && (
                  <span
                    onClick={() => {
                      setEmailDisabled(false);
                      setResponseMsg('');
                    }}

                    className="absolute right-8 top-30 text-xs text-green-500 cursor-pointer hover:underline"
                  >
                    Not your email?
                  </span>
                )}

                <div className="flex gap-1 mt-3">
                  <button
                    disabled={loader}
                    className="bg-green-100 border-2 border-green-300 text-green-500 font-semibold p-3 rounded-sm cursor-pointer"
                    onClick={
                      () => {

                        handleSendOTP()
                      }

                    }
                  >
                    {loader ?
                      <p className="text-sm text-green-400 font-semibold flex justify-center items-center gap-2">

                        <span className="w-3 h-3 border-1 border-green-400 border-t-transparent rounded-full animate-spin"></span>
                        Sending
                      </p>
                      :
                      <p className="text-sm text-green-400 font-semibold flex justify-center items-center gap-2">
                        Send OTP
                      </p>}


                  </button>
                  <p className="mt-3 text-xs ml-4 text-green-600 font-semibold">
                    {resposneMsg}
                  </p>

                </div>

                <h1 className="text-xl text-center font-bold mt-4 mb-2 text-blue-400">Enter Your OTP</h1>
                <div className="flex gap-4 justify-center mt-3">
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      value={otp[index]}
                      ref={(el) => (inputsRef.current[index] = el)}
                      type="text"
                      onChange={(e) => handleVerifyOtp(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      maxLength={1}
                      className="w-12 h-12 p-2 text-xl text-center border-3 border-blue-200 rounded shadow-sm focus:outline-none"
                    />
                  ))}
                </div>
                <div className="mt-2 text-center">
                  <a href="#" className="text-blue-400">Resend Code</a>
                  <p className={`${emailverifyMsg ? "text-green-500" : "text-red-500"}`}>{emailverifyMsg ? emailverifyMsg : emailVerifyError}</p>
                </div>
                <button
                  onClick={() => {
                    handleOtpSubmit()

                  }
                  }

                  className="w-full bg-blue-300 py-3 mt-4 text-white cursor-pointer rounded-lg font-semibold">
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
                  <form onSubmit={handleRegSubmit}>
                    <label className="text-blue-400">Name</label>
                    <input
                      onChange={handleChangeForm}
                      name="FullName"
                      value={regFormData.FullName}
                      required={true}
                      type="text"
                      placeholder="Enter full Name"
                      className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none"
                    />
                    <label className="text-blue-400">Email</label>
                    <input
                      onChange={handleChangeForm}
                      value={regFormData.email}
                      name="email"
                      disabled={true}
                      placeholder="Enter Your Register Email"
                      className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none"
                    />
                    <label className="text-blue-400">Mobile</label>
                    <input
                      onChange={handleChangeForm}
                      value={regFormData.mobile}
                      required={true}
                      name="mobile"
                      type="number"
                      placeholder="Enter mobile"
                      className="w-full p-2 border-3 border-blue-200 rounded mb-2 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-300 hover:bg-blue-400 text-white p-2 rounded-md mt-4"

                    >
                      Verify & Close
                    </button>
                  </form>
                </div>

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
                     Back to Login
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
