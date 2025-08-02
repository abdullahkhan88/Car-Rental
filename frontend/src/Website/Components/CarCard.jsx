
const CarCard = () => {
  return (
    <div className="container mx-auto p-4 place-items-center">
      <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border">
        {/* Car Image */}
        <img
          src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
          alt="Car"
          className="w-full h-45 object-cover"
        />

        {/* Content */}
        <div className="p-3">
          {/* Car Name & Type */}
          <h3 className="text-xl font-semibold text-gray-800">Toyota Camry</h3>
          <p className="text-gray-500 text-sm mb-4">Sedan | Automatic</p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-2">
            <span>5 Seats</span>
            <span>Petrol</span>
            <span>AC</span>
            <span>Auto</span>
          </div>

          {/* Price + Button */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600">₹2000/day</span>
            <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
