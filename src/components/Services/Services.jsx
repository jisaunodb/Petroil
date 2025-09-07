import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
const Services = () => {
  return (
    <div>

    <div>
      <Flex className="justify-between items-center">
        <div className='w-[509px] p-[10px] ml-[30px]'>
          <h3 className='text-[80px] font-bold text-black'>Our Services</h3>
          <p className='text-[20px] font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>

        <div className=' relative bg-[url(./assets/Services-img-1.png)] pt-[147px] pb-[139px] pl-[100px] bg-no-repeat bg-center bg-cover text-white'>
          <div className='z-[22] relative pr-[115px]'>
            <h4 className='text-[41px] font-bold'>Modern natural oil and gas refineries.</h4>
            <button className='mt-[19px] bg-[#F40404] py-[13px] px-[40px] cursor-pointer'>Learn More</button>
          </div>
        <div className=' z-[1] absolute top-0 left-0 w-full h-full bg-black/60'></div>
        </div>
      </Flex>
      <Flex className="justify-between mt-">
        <div className=' relative bg-[url(./assets/Services-img-2.png)] pt-[147px] pb-[139px] pl-[100px] bg-no-repeat bg-center bg-cover text-white'>
          <div className='z-[22] relative pr-[270px]'>
            <h4 className='text-[41px] font-bold'>Supply of national industries.</h4>
            <button className='mt-[19px] bg-[#F40404] py-[13px] px-[40px] cursor-pointer'>Learn More</button>
          </div>
        <div className=' z-[1] absolute top-0 left-0 w-full h-full bg-black/60'></div>
        </div>
        <div className=' relative bg-[url(./assets/Services-img-3.png)] pt-[147px] pb-[139px] pl-[100px] bg-no-repeat bg-center bg-cover text-white'>
          <div className='z-[22] relative pr-[120px]'>
            <h4 className='text-[41px] font-bold'>National fuel distribution and supply.</h4>
            <button className='mt-[19px] bg-[#F40404] py-[13px] px-[40px] cursor-pointer'>Learn More</button>
          </div>
        <div className=' z-[1] absolute top-0 left-0 w-full h-full bg-black/60'></div>
        </div>
      </Flex>
    </div>

    </div>
  )
}

export default Services