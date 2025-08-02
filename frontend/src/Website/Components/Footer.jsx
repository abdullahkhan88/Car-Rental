import { FaCar, FaEnvelope, FaHome, FaPhoneAlt, FaRupeeSign, } from "react-icons/fa";
import { FaCarRear, FaLocationPin } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300 px-6 py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo + Description */}
                    <div>
                        <div className="flex items-center gap-4">
                            <FaCarRear className="text-4xl text-yellow-300" />
                            <h2 className="text-2xl font-bold text-blue-400">CarRental</h2>
                        </div>
                        <p className="text-sm mt-2">
                            Rent your dream car anytime, anywhere with just a few clicks.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white flex items-center gap-2"><FaHome className="text-blue-300"/>Home</a></li>
                            <li><a href="#" className="hover:text-white flex items-center gap-2"><FaCar className="text-blue-300"/> Cars</a></li>
                            <li><a href="#" className="hover:text-white flex items-center gap-2"><FaRupeeSign className="text-blue-300"/>Pricing</a></li>
                            <li><a href="#" className="hover:text-white flex items-center gap-2"><FaPhoneAlt className="text-blue-300"/>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">Contact</h3>
                        <p className="text-sm flex gap-2 items-center my-2"><FaLocationPin className="text-blue-300"/> Lucknow, India</p>
                        <p className="text-sm flex gap-2 items-center my-2"><FaPhoneAlt className="text-blue-300"/> +91-9876543210</p>
                        <p className="text-sm flex gap-2 items-center my-2"><FaEnvelope className="text-blue-300"/>support@carrental.com</p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">Follow Us</h3>
                        <div className="flex gap-4 mt-2 text-xl">
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} CarRental. All rights reserved.
                </div>
            </footer>

        </>
    );
};

export default Footer;
