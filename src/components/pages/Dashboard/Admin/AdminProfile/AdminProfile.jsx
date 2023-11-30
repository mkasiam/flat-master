import useAuth from "../../../../../hooks/useAuth";

const AdminProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-center">
        Profile
      </h1>
      <hr />
      <div
        className="flex justify-center items-center my-6"
        data-aos="fade-down"
      >
        <div className="bg-[#FFF] rounded-md shadow-md p-7 space-y-3">
          <div className="flex justify-center">
            <img
              className="rounded-full w-28"
              src={user?.photoURL}
              alt="No Image Found"
            />
          </div>
          <p className="text-lg">Name : {user?.displayName}</p>
          <p className="text-lg">Email : {user?.email}</p>
          <p className="text-lg">
            Email Verified : {user?.emailVerified ? "Verified" : "Not Verified"}
          </p>
          <p className="text-lg">Date Of Birth : Not Provided</p>
          <p className="text-lg">
            Last Sign In : {user?.metadata?.lastSignInTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
