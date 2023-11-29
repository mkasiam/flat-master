import useAuth from "../../../../../hooks/useAuth";
import useLoadAgreements from "../../../../../hooks/useLoadAgreements";

const MemberProfile = () => {
  const { user } = useAuth();
  const [agreements] = useLoadAgreements();
  const filteredAgreements = agreements.filter(
    (agreement) => agreement.userEmail === user?.email
  );

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <div className="flex items-center flex-col">
        <img
          src={user?.photoURL}
          alt="User Avatar"
          className="rounded-full w-20 h-20 mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{user?.displayName}</h2>
        <p className="text-gray-600 mb-2">{user?.email}</p>
        {filteredAgreements.length > 0 && (
          <p className="text-gray-600">
            Agreement Accept Date: {filteredAgreements[0].accept_date}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredAgreements.map((agreement, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <p className="text-gray-700 font-semibold">Agreement Details</p>
            <hr className="my-2" />
            <p className="text-gray-600">Floor: {agreement.floor_no}</p>
            <p className="text-gray-600">Block: {agreement.block_name}</p>
            <p className="text-gray-600">Room No: {agreement.room_no}</p>
            <p className="text-gray-600">Rent: {agreement.rent}</p>
            <p className="text-gray-600">
              Agreement Accept Date: {agreement.accept_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberProfile;
