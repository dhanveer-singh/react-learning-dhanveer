import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = ({ children }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='w-full h-64'
    >
      {children}
    </Swiper>
  );
};

export default Slider;
