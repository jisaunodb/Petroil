import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import Container from '../container/Container'
import Flex from '../flex/Flex'
import Button from '../Button/Button';
const Blog = () => {
  return (
    <div className='bg-[#F0F0F0]'>
        <Container className="pt-[110px] pb-[170px]">
            <Flex className=" justify-between">
                <div className=' z-[1] relative bg-[url(./assets/Blog-img-1.png)] bg-cover bg-center bg-no-repeat px-[45px] pt-[75px] pb-[55px]'>
                    <div className='w-[249px] text-white'>
                        <p className='text-[24px] font-bold'>lorem ipsum dolor <br/>sit amet <br/>consectetur <br/>adipiscing elit sed<br/> do eiusmod.</p>
                        <button className='mt-[52px] bg-white/50 py-[13px] px-[40px] cursor-pointer'>Read more</button>
                    </div>
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'></div>
                </div>
                <div className=' z-[1] relative bg-[url(./assets/Blog-img-2.png)] bg-cover bg-center bg-no-repeat px-[45px] pt-[75px] pb-[55px]'>
                    <div className='w-[249px] text-white group'>
                        <p className='text-[24px] font-bold'>lorem ipsum dolor <br/>sit amet <br/>consectetur <br/>adipiscing elit sed<br/> do eiusmod.</p>
                        <button className='group-hover: hover:duration-300 hover:ease-in hover:bg-transparent border hover:border-1 hover:border-white/50 border-white/50 mt-[52px] bg-white/50 py-[13px] px-[40px] cursor-pointer'>Read more</button>
                    </div>
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'></div>
                </div>
                <div className=' z-[1] relative bg-[url(./assets/Blog-img-3.png)] bg-cover bg-center bg-no-repeat px-[45px] pt-[75px] pb-[55px]'>
                    <div className='w-[249px] text-white'>
                        <p className='text-[24px] font-bold'>lorem ipsum dolor <br/>sit amet <br/>consectetur <br/>adipiscing elit sed<br/> do eiusmod.</p>
                        <button className='mt-[52px] bg-white/50 py-[13px] px-[40px] cursor-pointer'>Read more</button>
                    </div>
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'></div>
                </div>
            </Flex>
            <Flex className="items-center gap-[5px] justify-end mt-[28px]">
                <h6>MORE FROM THE BLLOG</h6>
                <FaChevronRight/>
            </Flex>
        </Container>
    </div>
  )
}

export default Blog