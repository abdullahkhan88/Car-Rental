import CarCard from "../Components/CarCard";

function Vehicles() {


    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Choose All Types of Vehicle</h2>
            <div className="flex flex-wrap justify-center gap-2 mt-5 p-3">
                <button className="px-6 py-2 bg-cyan-200 text-blue-800 rounded-full hover:bg-cyan-300 transition">SUV</button>
                <button className="px-6 py-2 bg-cyan-200 text-blue-800 rounded-full hover:bg-cyan-300 transition">Pick-up</button>
                <button className="px-6 py-2 bg-cyan-200 text-blue-800 rounded-full hover:bg-cyan-300 transition">Hatchback</button>
                <button className="px-6 py-2 bg-cyan-200 text-blue-800 rounded-full hover:bg-cyan-300 transition">Luxury</button>
                <button className="px-6 py-2 bg-cyan-200 text-blue-800 rounded-full hover:bg-cyan-300 transition">Bus</button>
                <button className="px-6 py-2 bg-cyan-200 text-blue-800 rounded-full hover:bg-cyan-300 transition">Off-Road</button>
                <button className="px-6 py-2 bg-cyan-200 text-blue-800 rounded-full hover:bg-cyan-300 transition">Mini Van</button>
                <button className="px-6 py-2 bg-cyan-200 text-blue-800 rounded-full hover:bg-cyan-300 transition">Electric</button>
                <button className="px-6 py-2 bg-cyan-200 text-blue-800 rounded-full hover:bg-cyan-300 transition">Convertible</button>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">

                    {/* card dekhan hai yaha  */}
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                </div>
            </div>
            <div className="container mx-auto px-4 py-6">
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Top Car Brands</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4 bg-green-50">
                    {["Mahindra", "Suzuki", "KIA", "Toyota", "Hyundai"].map((brand, index) => (
                        <div
                            key={index}
                            className="text-center  p-4 rounded-lg text-green-500 hover:text-green-500 transition"
                        >
                            <p className="text-lg font-semibold">{brand}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Vehicles;
