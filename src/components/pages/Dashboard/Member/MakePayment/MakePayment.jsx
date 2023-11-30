import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm.jsx";
import useLoadAgreements from "../../../../../hooks/useLoadAgreements.jsx";
import useAuth from "../../../../../hooks/useAuth.jsx";
import { useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const MakePayment = () => {
  const { user } = useAuth();
  const [agreements] = useLoadAgreements();
  const filteredAgreements = agreements.filter(
    (agreement) => agreement.userEmail === user?.email
  );

  const [selectedAgreements, setSelectedAgreements] = useState([]);

  const handlePayment = () => {
    // Calculate total rent for all selected agreements
    const totalRent = selectedAgreements.reduce((sum, agreement) => sum + agreement.rent, 0);
    // Display other user information as needed

    // Now you can use totalRent and other user information for payment
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Make Payment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgreements.map((agreement) => (
          <div key={agreement.id} className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">
              {agreement.userEmail}
            </h2>
            <p className="text-gray-600">Floor: {agreement.floor_no}</p>
            <p className="text-gray-600">Block: {agreement.block_name}</p>
            <p className="text-gray-600">Room No: {agreement.room_no}</p>
            <p className="text-gray-600">Rent: {agreement.rent}</p>
            <button
              onClick={() => setSelectedAgreements((prev) => [...prev, agreement])}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Add to Payment
            </button>
          </div>
        ))}
      </div>

      {/* Single "Make Payment" button */}
      <button
        onClick={handlePayment}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        disabled={selectedAgreements.length === 0}
      >
        Make Payment
      </button>

      {selectedAgreements.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Payment Details for {user?.email}
          </h2>
          <p className="text-gray-600">Total Rent: {selectedAgreements.reduce((sum, agreement) => sum + agreement.rent, 0)}</p>
          {/* Display other user information as needed */}
          {/* Display the CheckoutForm for the selected agreements */}
          <div className="mt-4">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakePayment;