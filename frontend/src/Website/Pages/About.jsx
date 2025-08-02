import { FaQuoteLeft, FaUserFriends, FaCar } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function About() {
    return (
        <>
            <div className="container p-6 mt-5 shadow-md mx-auto space-y-10">
                <div className="flex flex-col gap-4 items-center md:items-start my-3">

                    {/* Heading */}
                    <div className="w-full text-center">
                        <h1 className="font-bold text-2xl">About Us</h1>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col sm:flex-col md:flex-row gap-2 p-4 w-full rounded-lg bg-gray-50">
                        <div className="font-bold">
                            <h1 className="text-xl md:text-3xl lg:text-3xl">Where every<br /> drive feels extraordinary</h1>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold">Variety Brands</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Unde, facilis </p>
                            <h4 className="text-xl font-semibold">Maximum Freedom</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Unde, facilis </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold">Awesome Support</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Unde, facilis ?</p>
                            <h4 className="text-xl font-semibold">Flexibility On The Go</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Unde, facilis ?</p>
                        </div>
                    </div>

                </div>

                {/* second section */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                    <div className="bg-green-50 p-4 border-green-300 shadow-lg border-2 rounded-lg flex flex-col items-center justify-center">
                        <FaUserFriends className="text-4xl my-5" />
                        <h1 className="font-bold text-2xl text-green-400 text-shadow-sm">25K+</h1>
                        <p className="text-gray-500">Happy Customers</p>
                    </div>
                    <div className="bg-green-50 p-4 border-green-300 shadow-lg border-2 rounded-lg flex flex-col items-center justify-center">
                        <FaCar className="text-4xl my-5" />
                        <h1 className="font-bold text-2xl text-green-400 text-shadow-sm">300+</h1>
                        <p className="text-gray-500">Count of Cars</p>
                    </div>
                    <div className="bg-green-50 p-4 border-green-300 shadow-lg border-2 rounded-lg flex flex-col items-center justify-center">
                        <VscWorkspaceTrusted className="text-4xl my-5" />
                        <h1 className="font-bold text-2xl text-green-400 text-shadow-sm">10+</h1>
                        <p className="text-gray-500">Years of Experience</p>
                    </div>
                    <div className="bg-green-50 p-4 border-green-300 shadow-lg border-2 rounded-lg flex flex-col items-center justify-center">
                        <BiSupport className="text-4xl my-5" />
                        <h1 className="font-bold text-2xl text-green-400 text-shadow-sm">24/7</h1>
                        <p className="text-gray-500">Roadside Assistance</p>
                    </div>
                </div>
                {/* Review Sections */}

                <div className="max-w-full bg-white">
                    {/* Heading */}
                    <div className="p-4">
                        <h4 className="text-center text-2xl font-semibold">Reviews From Our Customers</h4>
                    </div>

                    {/* Reviews Container */}
                    <div className="p-6 flex flex-wrap justify-center gap-3">

                        {/* Card 1 */}
                        <div className="border border-2 border-green-300 rounded-xl p-6 max-w-sm bg-green-50 shadow-md">
                            <i className="text-blue-500 text-xl"><FaQuoteLeft /></i>
                            <p className="my-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <div className="relative mt-8">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                    <img src="../../src/assets/abdullah_pic-.jpg" alt="profile" className="w-14 h-14 rounded-full border-4 border-white shadow-md" />
                                </div>
                                <div className="bg-green-200 text-center rounded-lg pt-10 pb-4">
                                    <h5 className="text-green-700 font-bold">Abdullah Khan</h5>
                                    <p className="text-green-600 text-sm">Happy Customer</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-2 border-green-300 rounded-xl p-6 max-w-sm bg-green-50 shadow-md">
                            <i className="text-blue-500 text-xl"><FaQuoteLeft /></i>
                            <p className="my-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <div className="relative mt-8">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                    <img src="../../src/assets/abdullah_pic-.jpg" alt="profile" className="w-14 h-14 rounded-full border-4 border-white shadow-md" />
                                </div>
                                <div className="bg-green-200 text-center rounded-lg pt-10 pb-4">
                                    <h5 className="text-green-700 font-bold">Abdullah Khan</h5>
                                    <p className="text-green-600 text-sm">Happy Customer</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-2 border-green-300 rounded-xl p-6 max-w-sm bg-green-50 shadow-md">
                            <i className="text-blue-500 text-xl"><FaQuoteLeft /></i>
                            <p className="my-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <div className="relative mt-8">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                    <img src="../../src/assets/abdullah_pic-.jpg" alt="profile" className="w-14 h-14 rounded-full border-4 border-white shadow-md" />
                                </div>
                                <div className="bg-green-200 text-center rounded-lg pt-10 pb-4">
                                    <h5 className="text-green-700 font-bold">Abdullah Khan</h5>
                                    <p className="text-green-600 text-sm">Happy Customer</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Question Sections */}
                <div className="w-full px-4 py-8">
                    <h1 className="text-2xl font-bold text-center mb-6">Top Car Rental Questions ?</h1>
                    <div className="space-y-4">

                        {/* Q1 */}
                        <details className="border rounded-md shadow-sm w-full">
                            <summary className="cursor-pointer rounded-md px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200">
                                What documents are required to rent a car?
                            </summary>
                            <div className="px-4 py-3 text-gray-700">
                                You need a valid driving license, ID proof, and a credit/debit card.
                            </div>
                        </details>

                        {/* Q2 */}
                        <details className="border rounded-md shadow-sm w-full">
                            <summary className="cursor-pointer rounded-md px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200">
                                Is fuel included in the rental price?
                            </summary>
                            <div className="px-4 py-3 text-gray-700">
                                No, fuel charges are usually not included. You need to return the car with the same fuel level.
                            </div>
                        </details>

                        {/* Q3 */}
                        <details className="border rounded-md shadow-sm w-full">
                            <summary className="cursor-pointer rounded-md px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200">
                                Can I rent a car without a driver?
                            </summary>
                            <div className="px-4 py-3 text-gray-700">
                                Yes, self-drive options are available for most cars.
                            </div>
                        </details>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-6 rounded-xl shadow-md w-full">

  {/* Left Content */}
  <div className="flex flex-col items-start gap-4 mb-6 md:mb-0 md:w-1/2">
    <h2 className="text-2xl font-bold text-gray-800">Are you looking for a car?</h2>
    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
      Book Now
    </button>
  </div>

  {/* Right Image */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
      alt="Car"
      className="w-80 h-auto rounded-lg shadow-lg"
    />
  </div>

</div>



            </div>

        </>
    )
}

export default About