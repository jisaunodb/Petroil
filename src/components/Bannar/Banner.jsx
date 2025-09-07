import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'

const Banner = () => {
  return (
    <div className="z-[1] relative bg-[url(./assets/bannar-img.png)] w-full bg-cover bg-center bg-no-repeat">
        <div className="z-[-1] absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <Container>
            <div className='pt-[298px] pb-[280px] w-[842px] text-white'>
                <h2 className="text-[64px] font-bold">We exist since 1975 on the oil and gas industry.</h2>
                <button className='mt-[31px] bg-[#F40404] py-[13px] px-[40px] cursor-pointer'>LEARN MORE</button>
            </div>
        </Container>
    </div>
  )
}

export default Banner