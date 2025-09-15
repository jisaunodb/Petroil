import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
import Bgoverlay from '../BgOverlay/Bgoverlay'
import Bgimg from '../BgImg/Bgimg'
import Button from '../Button/Button'
const Services = () => {
  return (
    <div>

    <div>
      <Flex className="justify-between items-center">
        <div className='w-[50%]'>
          <div className=' flex justify-end mr-[129px]'>
            <div className='w-[440px]'>
              <h3 className='font-primary text-[64px] font-bold text-black'>Our Services</h3>
              <p className=' text-[20px] font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>
        <div className='w-[50%] text-white'>


          <Bgimg className="bg-[url(./assets/Services-img-1.png)]">

          <Bgoverlay/>
            <div className="pr-[115px]">
              <h4 className="text-[41px] font-bold">Modern natural oil and gas refineries.</h4>
              <Button/>
            </div>


          </Bgimg>


        </div>
      </Flex>
      <Flex className="justify-between ">
       <div className="w-[50%] text-white">
          <Bgimg className="bg-[url(./assets/Services-img-2.png)]">
            <Bgoverlay/>
            <div className="relative z-20 pr-[115px]">
              <h4 className="text-[41px] font-bold">Supply of national industries.</h4>
              <Button/>
            </div>
          </Bgimg>
        </div>
       <div className="w-[50%] text-white">
          <Bgimg className="bg-[url(./assets/Services-img-3.png)]">
            <Bgoverlay/>
            <div className="relative z-20 pr-[115px]">
              <h4 className="text-[41px] font-bold">National fuel distribution and supply.</h4>
              {/* <button className="mt-[19px] bg-[#f40404] py-[13px] px-[40px] cursor-pointer">
                Learn More
              </button> */}
              <Button/>
            </div>
          </Bgimg>
        </div>
      </Flex>
    </div>

    </div>
  )
}

export default Services