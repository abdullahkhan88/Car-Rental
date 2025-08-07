
import { useState,useContext} from "react";
import { FaCarRear, FaWhatsapp, FaBarsStaggered, } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginModal from "../Pages/LoginModal";
import { ModalContext } from "../Context/ModalContext";

function Navbar() {

   const { openLoginModal, showLoginModal, closeLoginModal } = useContext(ModalContext);

  /* mobile Screen ke liye Toggle  */
  const [isopen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isopen);

  /* login Model ke liye Login */
  

  return (
    /* desktop Menu  */

    <>
      <nav className='bg-white shadow-md flex items-center justify-between'>
        <div className='text-lg font-bold text-gray-600 py-4 px-6 flex items-center gap-4'><FaCarRear className="text-cyan-800 text-2xl" />Car-Rental</div>
        <ul className='hidden md:flex gap-5 text-gray-700 font-medium'>
          <li className='hover:text-blue-600 cursor-pointer'><Link to='/'>Home</Link></li>
          <li className='hover:text-blue-600 cursor-pointer'><Link to='/Vehicles'>Vehicles</Link></li>
          <li className='hover:text-blue-600 cursor-pointer'><Link to='/Car-Details'>Details</Link></li>
          <li className='hover:text-blue-600 cursor-pointer'><Link to='/Profile'>Profile</Link></li>
          <li className='hover:text-blue-600 cursor-pointer'><Link to='/About-us'>About Us</Link></li>
          <li className='hover:text-blue-600 cursor-pointer'><Link to='/Contact'>Contact Us</Link></li>
          <li onClick={openLoginModal} className='hover:text-blue-600 cursor-pointer'>Login</li>
        </ul>
        <div className='hidden gap-2 mr-8 md:flex items-center'>
          <FaWhatsapp className="text-3xl text-green-500" />
          <div className="border rounded-md text-center px-2 my-2 bg-blue-500">
            <span className="text-sm text-white">Need Help ?</span><br></br>
            <a className='text-white rounded-md hover:bg-blue-50 transition' href="tel:9807561520">+91-9807561520</a>
          </div>
        </div>



        {/* Hamburger Menu */}

        <div className="md:hidden text-2xl cursor-pointer mr-3 text-blue-300" onClick={toggleMenu}>
          {
            isopen ? <FaTimes /> : <FaBarsStaggered />
          }
        </div>

        {/* Mobile ke liye Responsive Menu */}

        {
          <div className={`absolute top-16 left-0 w-full bg-green-50
           shadow-md z-10 p-6 md:hidden transition-all duration-300 ease-in-out ${isopen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
            <ul className="flex flex-col gap-3">
              <li className="text-green-600 font-semibold hover:text-blue-900 cursor-pointer">Home</li>
              <li className="text-green-600 font-semibold hover:text-blue-900 cursor-pointer">Vehicles</li>
              <li className="text-green-600 font-semibold hover:text-blue-900 cursor-pointer">Details</li>
              <li className="text-green-600 font-semibold hover:text-blue-900 cursor-pointer">About Us</li>
              <li className="text-green-600 font-semibold hover:text-blue-900 cursor-pointer">Contact Us</li>
            </ul>
          </div>

        }

      </nav>
      <LoginModal show={showLoginModal} onClose={closeLoginModal} />
    </>

  )
}

export default Navbar