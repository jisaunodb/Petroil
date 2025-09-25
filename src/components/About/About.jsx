import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
const About = () => {
  return (
    <div className='bg-[#F0F0F0] py-[30px] md:py-[136px] font-primary'>
        <Container>
            <Flex className="justify-between">
                <div className='mb-[5px] md:mb-0 w-auto md:w-[413px] px-[20px] md:px-[100px] py-[20px] md:py-[75px] bg-[#F40404] text-white'>
                    <h4 className=' text-[20px] md:text-[36px] font-bold'>Learn more about our company</h4>
                </div>
                <div className='bg-[url(./assets/about-img.png)] bg-no-repeat bg-cover bg-center w-auto md:w-[726px]'>
                    <button className='mx-[50px] md:mx-[282px] my-[50px] md:my-[155px] bg-white md:py-[13px] py-[9px] px-[15px] md:px-[35px] cursor-pointer text-[12px] md:text-[16px]'>Learn More</button>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default About