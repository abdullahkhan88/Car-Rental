function Contact() {
    return (
        <>
            {/* Contact Form Section */}
            <div className="bg-gray-50 py-16 px-4 md:px-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
                    Contact <span className="text-blue-600">Us</span>
                </h2>

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Form */}
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Book Your Car</h3>
                        <form className="space-y-5">
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Pickup Location</label>
                                <input
                                    type="text"
                                    placeholder="City or location"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Book Now
                            </button>
                        </form>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
                            alt="Luxury Car"
                            className="w-full max-w-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="bg-white py-10 px-4 md:px-10">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {/* Location */}
                    <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                        </svg>
                        <h4 className="font-bold text-gray-700">Location</h4>
                        <p className="text-gray-500 text-sm">Lucknow, Uttar Pradesh</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4" />
                        </svg>
                        <h4 className="font-bold text-gray-700">Email</h4>
                        <p className="text-gray-500 text-sm">support@carrental.com</p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3 7-1.5 2.5a11 11 0 005.5 5.5L15 16l7 3v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                        </svg>
                        <h4 className="font-bold text-gray-700">Phone</h4>
                        <p className="text-gray-500 text-sm">+91 9876543210</p>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2m6-2A10 10 0 1112 2a10 10 0 0110 10z" />
                        </svg>
                        <h4 className="font-bold text-gray-700">Opening Hours</h4>
                        <p className="text-gray-500 text-sm">Mon - Sat: 9am - 9pm</p>
                    </div>
                </div>
            </div>

            {/* Car Brand Logos */}
            <div className="bg-gray-100 py-10 px-4 md:px-10">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Our Trusted Car Brands</h2>
                    <p className="text-gray-500 text-sm">We offer rentals from top automobile brands</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center max-w-6xl mx-auto">
                    <img src="https://cdn.worldvectorlogo.com/logos/toyota-6.svg" alt="Toyota" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
                    <img src="https://cdn.worldvectorlogo.com/logos/honda-4.svg" alt="Honda" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
                    <img src="https://cdn.worldvectorlogo.com/logos/ford-8.svg" alt="Ford" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
                    <img src="https://cdn.worldvectorlogo.com/logos/hyundai-4.svg" alt="Hyundai" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
                    <img src="https://cdn.worldvectorlogo.com/logos/audi-5.svg" alt="Audi" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
                </div>
            </div>
        </>
    );
}

export default Contact;
