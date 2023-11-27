import ApartmentDetails from "../ApartmentDetails/ApartmentDetails";
import ApartmentLocation from "../ApartmentLocation/ApartmentLocation.jsx";
import Banner from "../Banner/Banner";
import CouponInfo from "../CouponInfo/CouponInfo.jsx";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ApartmentDetails></ApartmentDetails>
      <CouponInfo></CouponInfo>
      <ApartmentLocation></ApartmentLocation>
    </div>
  );
};

export default Home;
