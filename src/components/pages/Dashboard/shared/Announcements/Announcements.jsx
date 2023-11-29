import { useEffect } from "react";
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";
import { useState } from "react";

const Announcements = () => {
  const axiosPublic = useAxiosPublic();
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/announcements")
      .then((res) => setAnnouncements(res.data))
      .catch((error) => console.log(error));
  }, [axiosPublic]);
  return (
    <div className="container mx-auto mt-8 p-8">
      <h1 className="text-4xl font-bold mb-6">Announcements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h2 className="text-xl font-bold mb-2">{announcement.title}</h2>
            <p className="text-gray-600">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
