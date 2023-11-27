// Install the required packages
// npm install react-leaflet leaflet

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ApartmentLocation = () => {
  const defaultCenter = [37.7749, -122.4194];

  const apartmentDetails = {
    name: 'Your Apartment Name',
    address: '123 Main Street, City',
    amenities: ['Spacious Rooms', 'Beautiful View', 'Free Parking'],
  };

  return (
    <section className="my-8 p-6 bg-gray-100 rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Apartment Details */}
        <div className="md:w-1/2 pr-4">
          <h2 className="text-3xl font-semibold mb-4">Location</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{apartmentDetails.name}</h3>
            <p>{apartmentDetails.address}</p>
          </div>
          <ul>
            {apartmentDetails.amenities.map((amenity, index) => (
              <li key={index} className="mb-1">
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Fixed Size Map */}
        <div className="md:w-1/2">
          <MapContainer center={defaultCenter} zoom={15} style={{ height: '300px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={defaultCenter}>
              <Popup>Your Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default ApartmentLocation;
