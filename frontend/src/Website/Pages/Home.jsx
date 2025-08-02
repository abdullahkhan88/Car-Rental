import { FaMapMarkerAlt,FaCar, FaUsers, FaRegClock, FaRoad } from "react-icons/fa";



const Home = () => {
    return (
        <>
            <div className="container mx-auto mt-4 px-4 py-8 bg-blue-400 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pl-4 mx-3">
                    {/* Left Div */}
                    <div className="space-y-4 animate__animated animate__fadeInLeft">
                        <h2 className="text-5xl font-bold text-white">
                            Experience the Road <br /> Like Never Before
                        </h2>
                        <p className="text-white text-xl ">
                            Book your favorite car in seconds. Fast, easy, and affordable. <br />
                            Fill the form to get started!
                        </p>
                        <ul className="list-disc list-inside text-white">
                            <li className="text-xl">Wide range of vehicles</li>
                            <li className="text-xl">Easy booking process</li>
                            <li className="text-xl">24/7 customer support</li>
                        </ul>
                        <div className="relative  bottom-0 left-1/3 md:left-1/2 transform -translate-x-1/2 animate__animated animate__fadeInUp animate__delay-1s">
                            <img src="public/ford.png" alt="Ford Car" className="absolute -top-30 -right-20 w-100 hidden lg:block" />
                        </div>
                        <button className="py-2 px-9 cursor-pointer font-semibold mt-3
                        bg-blue-500 border border-2 border-blue-600 text-white rounded-md hover:bg-blue-600 transition">
                            Book Car
                        </button>
                    </div>

                    {/* Right Form Div */}
                    <div className="bg-white/80 p-7 rounded-2xl shadow-lg w-full max-w-md mx-auto animate__animated animate__fadeInRight">
                        <h3 className="text-2xl font-bold mb-6 text-blue-600 text-center">
                            Book Your Car
                        </h3>

                        <form className="space-y-4 ">
                            {/* Car Type */}
                            <div >
                                <label className="block text-blue-600 font-medium mb-1">Car Type</label>
                                <select className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Car</option>
                                    <option value="honda">Honda City</option>
                                    <option value="hyundai">Hyundai Creta</option>
                                    <option value="ertiga">Maruti Ertiga</option>
                                </select>
                            </div>

                            {/* Place of Rental */}
                            <div>
                                <label className="block text-blue-600 font-medium mb-1">Place of Rental</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter pickup location"
                                        className="w-full pl-10 pr-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
                                </div>
                            </div>

                            {/* Place of Return */}
                            <div>
                                <label className="block text-blue-600 font-medium mb-1">Place of Return</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter drop location"
                                        className="w-full pl-10 pr-3 py-2 border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
                                </div>
                            </div>

                            {/* Rental Date */}
                            <div>
                                <label className="block text-blue-600 font-medium mb-1">Rental Date</label>
                                <input
                                    type="date"
                                    className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Return Date */}
                            <div>
                                <label className="block text-blue-600 font-medium mb-1">Return Date</label>
                                <input

                                    type="date"
                                    className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full border border-blue-300 bg-blue-400 cursor-pointer text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Submit Booking
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* second sections */}

            <div className="container mx-auto rounded-lg p-4">
                <div className="w-full lg:flex justify-evenly p-4">

                    <div className="p-4 text-center mt-3">
                        <img src="public/pin.png" className="mx-auto" alt="pin" width={60} />
                        <div>
                            <h5 className="font-semibold text-lg mt-8">Availability</h5>
                            <p className="text-gray-600 text-sm">24/7 service wherever you need it.</p>
                        </div>
                    </div>

                    <div className="p-4 text-center">
                        <img src="public/car.png" className="mx-auto" alt="car" width={110} />
                        <div>
                            <h5 className="font-semibold text-lg ">Comfort</h5>
                            <p className="text-gray-600 text-sm">Premium vehicles for smooth rides.</p>
                        </div>
                    </div>

                    <div className="p-4 text-center">
                        <img src="public/savings.png" className="mx-auto" alt="savings" width={90} />
                        <div>
                            <h5 className="font-semibold text-lg mt-4">Savings</h5>
                            <p className="text-gray-600 text-sm">Affordable pricing for every journey.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Third Container */}

            <div className="container mx-auto p-4">
                <div>
                    <div className="flex justify-between p-4 items-center">
                        <h1 className="lg:text-4xl md:text-3xl font-bold">Choose Car that<br /> suits you</h1>
                        <p className="text-blue-400">View All</p>
                    </div>
                    {/* card */}
                    <div className="border p-4">
                        {/* yaha pe card rahega  */}
                    </div>
                </div>
            </div>

            {/* Forth container */}

            <div className="container mx-auto px-4 py-8">
                {/* Heading Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Fact In Numbers</h1>
                    <p className="text-gray-600 mt-2">Some quick stats about our journey</p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-blue-100 p-6 rounded-lg shadow flex flex-col items-center">
                        <FaCar className="text-4xl text-blue-700 mb-2" />
                        <h2 className="text-3xl font-bold text-blue-700">540+</h2>
                        <p className="text-gray-700 mt-2">Cars</p>
                    </div>

                    <div className="bg-green-100 p-6 rounded-lg shadow flex flex-col items-center">
                        <FaUsers className="text-4xl text-green-700 mb-2" />
                        <h2 className="text-3xl font-bold text-green-700">20K+</h2>
                        <p className="text-gray-700 mt-2">Customers</p>
                    </div>

                    <div className="bg-yellow-100 p-6 rounded-lg shadow flex flex-col items-center">
                        <FaRegClock className="text-4xl text-yellow-700 mb-2"/>
                        <h2 className="text-3xl font-bold text-yellow-700">24</h2>
                        <p className="text-gray-700 mt-2">Years Experience</p>
                    </div>

                    <div className="bg-red-100 p-6 rounded-lg shadow flex flex-col items-center">
                        <FaRoad className="text-4xl text-red-700 mb-2"/>
                        <h2 className="text-3xl font-bold text-red-700">20M+</h2>
                        <p className="text-gray-700 mt-2">Miles Driven</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;
