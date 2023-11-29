import { useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManageCoupons = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  //   useEffect(() => {
  //     axiosSecure
  //       .get("coupons")
  //       .then((res) => setCoupons(res.data))
  //       .catch((error) => console.log(error));
  //   }, [axiosSecure]);
  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/coupons");
      return res.data;
    },
  });

  const handleAddCoupon = (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form?.code.value;
    const discount = form?.discount.value;
    const description = form?.description.value;
    const coupon = { code, discount, description };
    axiosSecure.post("/coupons", coupon).then((res) => {
      const data = res.data;
      if (data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Coupon successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });

    // Close the modal
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 p-8">
      <h1 className="text-4xl font-bold mb-6">Manage Coupons</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-3">Code</th>
            <th className="border border-gray-300 p-3">Discount Percentage</th>
            <th className="border border-gray-300 p-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon.id}>
              <td className="border border-gray-300 p-3">{coupon.code}</td>
              <td className="border border-gray-300 p-3">
                {coupon.discount}%
              </td>
              <td className="border border-gray-300 p-3">
                {coupon.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={() => setModalOpen(true)}
      >
        Add Coupon
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add Coupon</h2>
            <form onSubmit={handleAddCoupon}>
              <div className="mb-4">
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-gray-600"
                >
                  Coupon Code
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="percentage"
                  className="block text-sm font-medium text-gray-600"
                >
                  Discount Percentage
                </label>
                <input
                  type="number"
                  name="discount"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  min="0"
                  max="100"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-600"
                >
                  Coupon Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-gray-600"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCoupons;
