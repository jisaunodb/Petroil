import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
import Bgoverlay from '../BgOverlay/Bgoverlay'
import Bgimg from '../BgImg/Bgimg'
import Button from '../Button/Button'
const Services = () => {
  return (
    <div className='font-primary mt-[20px] md:mt-0'>

    <div className='px-[10px] md:px-0'>
      <Flex className="justify-between items-center">
        <div className=' md:w-[50%]'>
          <div className=' flex justify-end md:mr-[129px]'>
            <div className='w-auto md:w-[440px] text-center md:text-right'>
              <h3 className='font-primary text-[30px] md:text-[64px] font-bold text-black'>Our Services</h3>
              <p className=' text-center md:text-right text-[12px] md:text-[20px] font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>
        <div className='md:w-[50%]  text-white'>


          <Bgimg className="bg-[url(./assets/Services-img-1.png)]">

          <Bgoverlay/>
            <div className="pr-[110px]">
              <h4 className="text-[16px] md:text-[36px] font-bold">Modern natural oil and gas refineries.</h4>
              <Button/>
            </div>


          </Bgimg>


        </div>
      </Flex>
      <Flex className="justify-between ">
       <div className="md:w-[50%] text-white">
          <Bgimg className="bg-[url(./assets/Services-img-2.png)]">
            <Bgoverlay/>
            <div className="relative z-20 pr-[110px]">
              <h4 className="text-[16px] md:text-[36px] font-bold">Supply of national industries.</h4>
              <Button/>
            </div>
          </Bgimg>
        </div>
       <div className="md:w-[50%] text-white">
          <Bgimg className="bg-[url(./assets/Services-img-2.png)]">
            <Bgoverlay/>
            <div className="relative z-20 pr-[110px]">
              <h4 className="text-[16px] md:text-[36px] font-bold">National fuel distribution and supply.</h4>
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