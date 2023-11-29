import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import AgreementRequestCard from "./AgreementRequestCard";

const AgreementRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: agreements = [], refetch } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreements?status=pending");
      return res.data;
    },
  });

  return (
    <>
      <h1 className="text-3xl font-bold my-4">Agreement Requests</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {agreements.map((agreement, index) => (
          <AgreementRequestCard key={index} agreement={agreement} refetch={refetch}/>
        ))}
      </div>
    </>
  );
};

export default AgreementRequest;
