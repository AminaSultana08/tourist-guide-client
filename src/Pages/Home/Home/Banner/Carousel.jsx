import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import './Carousel.css'
import Title from '../../../../Component/Title/Title';
const Carousel = () => {
    return (
        <div>
        <Title  heading=' Paladium Awatis' subHeading='Welcome To' ></Title>
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
        className="mySwiper carousel"
      >
        <SwiperSlide>
          <img className='w-1/2   h-96 ' src="https://i.ibb.co/CVkWX2s/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-1/2 h-96 ' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-1/2 h-96 ' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full cover h-96 ' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-1/2 h-96 ' src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-1/2 h-96 ' src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-1/2 h-96 ' src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-1/2 h-96 ' src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-1/2 h-96' src="https://i.ibb.co/CVkWX2s/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg" />
        </SwiperSlide>
      </Swiper>   
        </div>
    );
};

export default Carousel;