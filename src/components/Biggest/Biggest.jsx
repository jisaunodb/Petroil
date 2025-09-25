import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/Biggest/Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

// const Biggest = () => {
//     var settings = {
//     autoplay: true,
//     autoplaySpeed: 2000,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//      gap: '20px',
//   };
export default function App() {
  return (
    <div className='font-primary'>
        <Container>
            <Flex className='justify-between items-center mt-[50px] md:mt-[100px] pb-[50px] md:pb-[100px]'>
                <div className=' w-auto md:w-[289px] text-[48px] font-bold'>
                    <h4 className='md:text-[48px] font-bold text-[30px]'>The biggest supplier on the country</h4>
                </div>
                <div className='mt-[10px] md:mt-0  md:w-[650px] text-[17px] font-medium'>
                    <p className='md:text-[20px] text-[12px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </Flex>
        </Container>
        {/* <Flex className='justify-between items-center mb-[28px] gap-[30px] '>




        </Flex> */}



    <Swiper
    //   spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}


    >
      <SwiperSlide><div className='bg-[url(./assets/biggest-img-1.png)] bg-cover bg-center md:w-full w-[80px] h-[100px] md:h-[426px]'></div>
      </SwiperSlide>
      <SwiperSlide><div className='bg-[url(./assets/biggest-img-2.png)] bg-cover bg-center md:w-full w-[80px] h-[100px] md:h-[426px]'></div>
      </SwiperSlide>
      <SwiperSlide><div className='bg-[url(./assets/biggest-img-3.png)] bg-cover bg-center md:w-full w-[80px] h-[100px] md:h-[426px]'></div>
      </SwiperSlide>
      <SwiperSlide><div className='bg-[url(./assets/biggest-img-4.png)] bg-cover bg-center md:w-full w-[80px] h-[100px] md:h-[426px]'></div>
      </SwiperSlide>
      <SwiperSlide><div className='bg-[url(./assets/biggest-img-4.png)] bg-cover bg-center md:w-full w-[80px] h-[100px] md:h-[426px]'></div>
      </SwiperSlide>
      <SwiperSlide><div className='bg-[url(./assets/biggest-img-4.png)] bg-cover bg-center md:w-full w-[80px] h-[100px] md:h-[426px]'></div>
      </SwiperSlide>

    </Swiper>



    </div>
  );
};



// export default Biggest