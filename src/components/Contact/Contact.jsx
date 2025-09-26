import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
const Contact = () => {
  return (
    <div>
        <div className=' font-primary bg-[url(./assets/Maps.png)] bg-cover bg-center bg-no-repeat w-full h-[300px] md:h-[450px]'></div>
        <div className='bg-[#F40404]'>
            <Container>
                <Flex className="text-center md:text-left items-center justify-between text-white py-[20px] md:py-[45px]">
                    <h3 className='md:text-[36px] text-[17px] font-bold'>Want to join as member branch in your area?</h3>
                    <button className=' text-[12px] md:text-[16px] border-2 border-white md:py-[13px] py-[10px] px-[20px] md:px-[30px] cursor-pointer mt-[10px] md:mt-[0] '>CONTACT</button>
                </Flex>
            </Container>
        </div>

    </div>
  )
}

export default Contact