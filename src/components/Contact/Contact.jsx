import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
const Contact = () => {
  return (
    <div>
        <div className='bg-[url(./assets/Maps.png)] bg-cover bg-center bg-no-repeat w-full h-[450px]'></div>
        <div className='bg-[#F40404]'>
            <Container>
                <Flex className="items-center justify-between text-white py-[45px]">
                    <h3 className='text-[36px] font-bold'>Want to join as member branch in your area?</h3>
                    <button className=' border-2 border-white py-[13px] px-[30px] cursor-pointer'>CONTACT</button>
                </Flex>
            </Container>
        </div>

    </div>
  )
}

export default Contact