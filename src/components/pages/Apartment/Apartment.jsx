import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Apartment = ({ apartment }) => {
  const { img, floor_no, block_name, apartment_no, rent, room_no } = apartment;
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formattedDateTime = currentDateTime.toLocaleString();

  const handleAgreement = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Please Go go Sign In!",
        text: "Sign in to do agreement request",
      });
      return;
    }

    const userEmail = user?.email;
    const userName = user?.displayName;
    const agreementRequest = {
      userEmail,
      userName,
      floor_no,
      block_name,
      room_no,
      rent,
      date: formattedDateTime,
      status: "pending",
    };
    axiosPublic
      .post("/agreements", agreementRequest)
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Request sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full h-72 object-cover" src={img} alt="Apartment" />
      <div className="px-6 py-4 flex flex-col">
        <div className="font-bold text-xl mb-2">{block_name}</div>
        <p className="text-gray-700 text-base">
          Floor: {floor_no} | Room No: {room_no} | Apartment No: {apartment_no}
        </p>
        <p className="text-gray-700 text-base">Rent: ${rent}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={handleAgreement}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agreement
        </button>
      </div>
    </div>
  );
};
Apartment.propTypes = {
  apartment: PropTypes.object,
};
export default Apartment;
