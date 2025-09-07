import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
const About = () => {
  return (
    <div className='bg-[#F0F0F0] py-[136px]'>
        <Container>
            <Flex className="justify-between">
                <div className='w-[413px] px-[100px] py-[75px] bg-[#F40404] text-white'>
                    <h4 className='text-[36px] font-bold'>Learn more about our company</h4>
                </div>
                <div className='bg-[url(./assets/about-img.png)] bg-no-repeat bg-cover bg-center w-[726px]'>
                    <button className='mx-[282px] my-[155px] bg-white py-[13px] px-[40px] cursor-pointer'>Learn More</button>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default About