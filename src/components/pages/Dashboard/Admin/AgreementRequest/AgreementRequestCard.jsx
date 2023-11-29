import PropTypes from "prop-types";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const AgreementRequestCard = ({ agreement, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formattedDateTime = currentDateTime.toLocaleString();
  const { _id, userEmail, userName, floor_no, block_name, room_no, date } =
    agreement;
  const handleAccept = (id,userEmail) => {
    const acceptRequest = {
      accept_date: formattedDateTime,
      status: "checked",
    };
    // First request
    const request1 = axiosSecure.put(`/agreements/${id}`, acceptRequest);

    // Second request
    const request2 = axiosSecure.patch(`/users/${userEmail}`);

    // Combine requests and wait for both to complete
    Promise.all([request1, request2])
      .then((responses) => {
        const [response1, response2] = responses;

        if (response1.data.modifiedCount > 0 && response2.status === 200) {
          // Both requests were successful
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Requests Completed Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        } else {
          // Handle the case where one or both requests failed
          console.error("One or more requests failed");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleReject = (id) => {
    const rejectRequest = {
      accept_date: formattedDateTime,
      status: "checked",
    };
    axiosSecure
      .put(`/agreements/${id}`, rejectRequest)
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Request Rejected",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mx-auto bg-white rounded-md overflow-hidden shadow-lg my-4">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">User Email: {userEmail}</p>
        <p className="text-gray-700 text-base">User Name: {userName}</p>
        <p className="text-gray-700 text-base">Floor No: {floor_no}</p>
        <p className="text-gray-700 text-base">Block No: {block_name}</p>
        <p className="text-gray-700 text-base">Room No: {room_no}</p>
        <p className="text-gray-700 text-base">Request Date: {date}</p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <button
          onClick={() => handleAccept(_id,userEmail)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Accept
        </button>
        <button
          onClick={() => handleReject(_id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Reject
        </button>
      </div>
    </div>
  );
};
AgreementRequestCard.propTypes = {
  agreement: PropTypes.object,
  refetch: PropTypes.func,
};
export default AgreementRequestCard;
