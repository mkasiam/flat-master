import PropTypes from "prop-types";

const AgreementRequestCard = ({ agreement }) => {
  console.log(agreement);
  const {
    _id,
    userEmail,
    userName,
    floor_no,
    block_name,
    room_no,
    date,
  } = agreement;
  const handleAccept = (id) => {
    console.log(id);
  };
  const handleReject = (id) => {
    console.log(id);
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
          onClick={() => handleAccept(_id)}
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
};
export default AgreementRequestCard;
