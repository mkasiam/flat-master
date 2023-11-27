import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  const slideContent = [
    'https://i.ibb.co/nCzzKdQ/banner1fm.jpg',
    'https://i.ibb.co/vzchcGh/banner2fm.jpg',
    'https://i.ibb.co/7XYSDf0/banner3fm.jpg',
    'https://i.ibb.co/mF8gWyS/banner4fm.jpg',
    'https://i.ibb.co/tzzjw11/banner5fm.jpg',
    'https://i.ibb.co/tQ0xx9k/banner6fm.jpg',
    'https://i.ibb.co/jbBjs9D/banner7fm.jpg',
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-full md:h-screen lg:h-screen"
    >
      {slideContent.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img src={imageUrl} alt={`Banner ${index + 1}`} className="w-full h-full object-cover mx-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
