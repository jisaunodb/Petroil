import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/Biggest/Slider.css"
const Biggest = () => {
    var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     gap: '20px',
  };
  return (
    <div>
        <Container>
            <Flex className='justify-between items-center mt-[100px] pb-[100px]'>
                <div className='w-[289px] text-[48px] font-bold'>
                    <h4>The biggest supplier on the country</h4>
                </div>
                <div className='w-[650px] text-[17px] font-medium'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </Flex>
        </Container>
        {/* <Flex className='justify-between items-center mb-[28px] gap-[30px] '>
            <div className='bg-[url(./assets/biggest-img-1.png)] bg-cover bg-center w-[25%] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-2.png)] bg-cover bg-center w-[25%] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-3.png)] bg-cover bg-center w-[25%] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-4.png)] bg-cover bg-center w-[25%] h-[426px]'></div>
        </Flex> */}

        <Slider {...settings} className=' flex gap-carousel gap-[30px] mb-[20px]'>
            <div className='bg-[url(./assets/biggest-img-1.png)] bg-cover bg-center w-[25%] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-2.png)] bg-cover bg-center w-[25%] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-1.png)] bg-cover bg-center w-[25%] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-4.png)] bg-cover bg-center w-[25%] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-2.png)] bg-cover bg-center w-[25%] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-3.png)] bg-cover bg-center w-[25%] h-[426px]'></div>

        </Slider>

    </div>
  )
}

export default Biggest