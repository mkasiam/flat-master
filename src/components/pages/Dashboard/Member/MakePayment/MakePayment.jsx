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

  const [selectedAgreement, setSelectedAgreement] = useState(null);

  const handlePayment = (agreement) => {
    setSelectedAgreement(agreement);
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
              onClick={() => handlePayment(agreement)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Make Payment
            </button>
          </div>
        ))}
      </div>
      {selectedAgreement && (
        <div className="mt-8 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            {selectedAgreement.userEmail} - Payment Details
          </h2>
          {/* Display selected agreement details */}
          <p className="text-gray-600">Floor: {selectedAgreement.floor_no}</p>
          <p className="text-gray-600">Block: {selectedAgreement.block_name}</p>
          <p className="text-gray-600">Room No: {selectedAgreement.room_no}</p>
          <p className="text-gray-600">Rent: {selectedAgreement.rent}</p>
          <label className="block text-gray-600 mt-4">
            Select Month:
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </label>
          {/* Display the CheckoutForm for the selected agreement */}
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
