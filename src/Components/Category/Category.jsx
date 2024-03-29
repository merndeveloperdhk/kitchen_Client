import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './Category.css'
import SectionTitle from '../SectionTitle/SectionTitle';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div>
          <SectionTitle 
          subHeading={"From 11PM to 8AM"}
          heading = {"Order Online"}
          ></SectionTitle>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h1 className='text-3xl absolute bottom-4'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h1 className='text-3xl absolute bottom-4'>Deserts</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h1 className='text-3xl absolute bottom-4'>Drinks</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h1 className='text-3xl absolute bottom-4'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h1 className='text-3xl absolute bottom-4'>Water</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} />
          <h1 className='text-3xl absolute bottom-4'>Soup</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;