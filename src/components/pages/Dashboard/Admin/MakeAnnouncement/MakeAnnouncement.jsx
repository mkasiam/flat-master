import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form?.title.value;
    const description = form?.description.value;
    const announcement = { title, description };
    axiosSecure
      .post("/announcements", announcement)
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Announcement Published",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto mt-8 p-8 max-w-xl border shadow-md">
      <h1 className="text-4xl font-bold mb-6">Make Announcement</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Announce
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
