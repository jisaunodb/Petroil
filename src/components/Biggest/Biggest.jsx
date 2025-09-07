import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
const Biggest = () => {
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
        <Flex className='justify-between items-center mb-[28px]'>
            <div className='bg-[url(./assets/biggest-img-1.png)] w-[458px] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-2.png)] w-[458px] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-3.png)] w-[458px] h-[426px]'></div>
            <div className='bg-[url(./assets/biggest-img-4.png)] w-[458px] h-[426px]'></div>
        </Flex>
    </div>
  )
}

export default Biggest