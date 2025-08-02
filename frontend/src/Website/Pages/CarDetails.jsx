import { FaRegSnowflake } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import CarCard from "../Components/CarCard";

function CarDetails() {
  return (
    <>
      <div className="container mx-auto p-6 mt-6 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-5">

          {/* Car Image */}
          <div className="md:w-1/2 w-full flex">
            {/* main image */}
            <div className="w-full md:2/3">
              <img
                src="/public/view-3d-car.jpg"
                alt="Car"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            {/* Side */}
            <div className="w-1/2 flex flex-col  gap-2 p-4">
              <div className="w-2/3 cursor-pointer hover:shadow-lg hover:border border-gray-200 rounded-lg transition-all duration-300">
                <img
                  src="/public/view-3d-car.jpg"
                  alt="Car"
                  className="h-auto rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="w-2/3 cursor-pointer hover:shadow-lg hover:border border-gray-200 rounded-lg transition-all duration-300">
                <img
                  src="/public/view-3d-car.jpg"
                  alt="Car"
                  className="h-auto rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="w-2/3 cursor-pointer hover:shadow-lg hover:border border-gray-200 rounded-lg transition-all duration-300">
                <img
                  src="/public/view-3d-car.jpg"
                  alt="Car"
                  className="h-auto rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Car Details */}

          <div className="md:w-1/2 w-full space-y-3 px-2">
            {/* Car Specifications */}
            <div>
              <h1 className="lg:text-2xl text-red-300 font-bold">Technical Specifications</h1>
            </div>
            {/* specification Icons */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 ">
              <div className="border-2 rounded-lg p-4 flex flex-col justify-center items-center bg-teal-50 shadow-lg">
                <i className="text-blue-300">
                  <img src="../../src/assets/gear.svg" alt="" />
                </i>
                <strong>Gear Box</strong>
                <p className="text-gray-500">Automated</p>
              </div>

              <div className="border-2 rounded-lg p-4 flex flex-col justify-center items-center bg-teal-50 shadow-lg">
                <i className="text-blue-300">
                  <img src="../../src/assets/fuel.svg" alt="" />
                </i>
                <strong>Fuel</strong>
                <p className="text-gray-500">Petrol</p>
              </div>

              <div className="border-2 rounded-lg p-4 flex flex-col justify-center items-center bg-teal-50 shadow-lg">
                <i className="text-blue-300">
                  <img src="../../src/assets/doors.svg" alt="" />
                </i>
                <strong>Doors</strong>
                <p className="text-gray-500">5</p>
              </div>
              <div className="border-2 rounded-lg p-4 flex flex-col justify-center items-center bg-teal-50 shadow-lg">
                <i className="text-gray-600"><FaRegSnowflake /></i>
                <strong>Air Conditioner</strong>
                <p className="text-gray-500">Yes</p>
              </div>
              <div className="border-2 rounded-lg p-4 flex flex-col justify-center items-center bg-teal-50 shadow-lg">
                <i className="text-blue-300">
                  <img src="../../src/assets/seats.svg" alt="" />
                </i>
                <strong>Seats</strong>
                <p className="text-gray-500">6</p>
              </div>
              <div className="border-2 rounded-lg p-4 flex flex-col justify-center items-center bg-teal-50 shadow-lg">
                <i className="text-blue-300">
                  <img src="../../src/assets/distance.svg" alt="" />
                </i>
                <strong>Distance</strong>
                <p className="text-gray-500">500</p>
              </div>
            </div>
            {/* End Car specifications */}

            <div className="flex items-center justify-between gap-6 py-4">
              <span className="text-2xl font-semibold text-red-300">Car Name</span>
              <h2 className="text-2xl font-semibold text-gray-800">Tesla Model S</h2>
            </div>
            <div>
              <div className="my-4">
                <h1 className="text-red-300 font-bold">Car Equipment</h1>
              </div>
              <div className="bg-gray-50 rounded-xl p-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-1 list-none">
                  <li className="flex items-center gap-2"><FcOk /> ABS</li>
                  <li className="flex items-center gap-2"><FcOk /> Cruise Control</li>
                  <li className="flex items-center gap-2"><FcOk /> Power Steering</li>
                  <li className="flex items-center gap-2"><FcOk /> Power Windows (Front/Rear)</li>
                  <li className="flex items-center gap-2"><FcOk /> Rear Parking Sensors</li>
                  <li className="flex items-center gap-2"><FcOk /> Push Button Start/Stop</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              A high-performance electric sedan with sleek design and cutting-edge technology. Experience the thrill of silent speed and unmatched luxury.
            </p>
            <button className="mt-4 bg-red-300 text-white px-6 py-2 rounded-lg hover:bg-red-400 cursor-pointer transition">
              Book Now
            </button>
          </div>
        </div>

        {/* second section Other Car */}

        <div className="bg-gray-50 p-4 mt-4 rounded">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <h1 className="text-xl font-semibold">Other Car</h1>
            <p>
              <a href="#" className="text-blue-600 hover:underline">View All</a>
            </p>
          </div>
        </div>

        {/* other car Show  */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2  place-items-center">
          <CarCard/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
        </div>

      </div >

    </>
  )
}

export default CarDetails