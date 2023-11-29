

const MemberProfile = () => {
    return (
        <div className="bg-white p-8 rounded shadow-md">
          <img src={img} alt="User Avatar" className="rounded-full w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-4">{name}</h2>
          <p className="text-gray-600 mb-2">{email}</p>
          <p className="text-gray-600 mb-4">Agreement Accept Date: {agreementAcceptDate}</p>
    
          {role === 'member' && (
            <div>
              <p className="text-gray-600">Role: {role}</p>
              {/* Conditionally render fields as "none" for the member */}
              <p className="text-gray-600">Floor: {floorNo ? floorNo : 'none'}</p>
              <p className="text-gray-600">Block: {block ? block : 'none'}</p>
              <p className="text-gray-600">Room No: {roomNo ? roomNo : 'none'}</p>
              <p className="text-gray-600">Rent: {rent ? rent : 'none'}</p>
            </div>
          )}
        </div>
      );
};

export default MemberProfile;