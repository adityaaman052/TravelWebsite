const FlightDealCard = ({ title, image, source, destination, flightDays, price }) => {
    return (
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <p className="mb-2"><strong>Source:</strong> {source} 🇮🇳</p>
        <p className="mb-2"><strong>Destination:</strong> {destination} 🌍</p>
        <p className="mb-4"><strong>Direct Flights:</strong> {flightDays.join(" & ")} ✈️</p>
        <p className="text-lg font-bold">{price} 💵</p>
      </div>
    );
  };
  
  export default FlightDealCard;
  