import { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth.jsx";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure.jsx";

const UserProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isUser, SetIsUser] = useState(false);
  useEffect(() => {
    axiosSecure.get(`/users/${user?.email}`).then((res) => {
      if (res.data.role == "user") {
        SetIsUser(true);
      }
    });
  }, [user?.email, axiosSecure]);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-center mb-4">
        Profile
      </h1>
      <hr />
      <div
        className="flex justify-center items-center my-6 py-6 rounded shadow-md"
        
      >
        <div className="bg-[#FFF] rounded-md shadow-md p-10 space-y-3">
          <div className="flex justify-center">
            <img
              className="rounded-full w-28"
              src={user?.photoURL}
              alt="No Image Found"
            />
          </div>
          <p className="text-lg">Name : {user?.displayName}</p>
          <p className="text-lg">Email : {user?.email}</p>
          <p className="text-gray-600 mb-4">Agreement Accept Date: None</p>

          {isUser && (
            <div>
              <p className="text-gray-600">Role: User </p>
              {/* Conditionally render fields as "none" for the user */}
              <p className="text-gray-600">Floor: none</p>
              <p className="text-gray-600">Block: none </p>
              <p className="text-gray-600">Room No: none</p>
              <p className="text-gray-600">Rent: none</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
