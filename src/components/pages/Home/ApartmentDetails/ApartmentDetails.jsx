

const ApartmentDetails = () => {
  return (
    <section className="bg-gray-100 py-16 font-montserrat">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Apartment Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Apartment Detail Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Location</h3>
            <p className="text-gray-600">Gulshan, Dhaka</p>
          </div>

          {/* Apartment Detail Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Owner</h3>
            <p className="text-gray-600">Gulsan khan</p>
          </div>

          {/* Apartment Detail Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Management</h3>
            <p className="text-gray-600">Effortlessly manage the building with our website.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDetails;
