import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import "./Apartments.css";
import Apartment from "../../Apartment/Apartment";

const Apartments = () => {
  const axiosPublic = useAxiosPublic();
  const [apartments, setApartments] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  const NumberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(NumberOfPages).keys()];

  useEffect(() => {
    axiosPublic
      .get(`/apartments?page=${currentPage}&size=${itemsPerPage}`, {
        withCredentials: true,
      })
      .then((res) => setApartments(res.data));
  }, [axiosPublic, currentPage, itemsPerPage]);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 mt-4">
        {apartments.map((apartment) => (
          <Apartment key={apartment._id} apartment={apartment} />
        ))}
      </div>
      {/* Pagination of the page  */}
      <div className="pagination">
        <button className="text-lg font-semibold" onClick={handlePrevPage}>
          Prev
        </button>
        {pages.map((number) => (
          <button
            className={currentPage === number ? "selected" : undefined}
            onClick={() => setCurrentPage(number)}
            key={number}
          >
            {number}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default Apartments;
