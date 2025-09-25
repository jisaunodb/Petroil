import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import Container from '../container/Container'
import Flex from '../flex/Flex'
import Button from '../Button/Button';
const Blog = () => {
  return (
    <div className='bg-[#F0F0F0] font-primary'>
        <Container className="pt-[30px] md:pt-[110px] pb-[40px] md:pb-[170px]">
            <Flex className=" justify-between">
                <div className=' z-[1] relative bg-[url(./assets/Blog-img-1.png)] bg-cover bg-center bg-no-repeat px-[15px] md:px-[45px] pt-[20px] md:pt-[75px] pb-[15px] md:pb-[55px]'>
                    <div className=' w-auto md:w-[249px] text-center md:text-left text-white'>
                        <p className='text-[16px] md:text-[24px] font-bold'>lorem ipsum dolor <br/>sit amet <br/>consectetur <br/>adipiscing elit sed<br/> do eiusmod.</p>
                        <button className='group-hover: hover:duration-300 hover:ease-in hover:bg-transparent border hover:border-1 hover:border-white/50 border-white/50 mt-[15px] md:mt-[52px] bg-white/50 py-[10px] md:py-[13px] md:px-[40px] px-[20px] text-[12px] md:text-[16px] cursor-pointer'>Read more</button>
                    </div>
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'></div>
                </div>
                <div className=' mt-[10px] md:mt-0 z-[1] relative bg-[url(./assets/Blog-img-1.png)] bg-cover bg-center bg-no-repeat px-[15px] md:px-[45px] pt-[20px] md:pt-[75px] pb-[15px] md:pb-[55px'>
                    <div className='w-auto md:w-[249px] text-center md:text-left text-white group'>
                        <p className='text-[16px] md:text-[24px] font-bold'>lorem ipsum dolor <br/>sit amet <br/>consectetur <br/>adipiscing elit sed<br/> do eiusmod.</p>
                        <button className='group-hover: hover:duration-300 hover:ease-in hover:bg-transparent border hover:border-1 hover:border-white/50 border-white/50 mt-[15px] md:mt-[52px] bg-white/50 py-[10px] md:py-[13px] md:px-[40px] px-[20px] text-[12px] md:text-[16px] cursor-pointer'>Read more</button>
                    </div>
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'></div>
                </div>
                <div className='mt-[10px] md:mt-0 z-[1] relative bg-[url(./assets/Blog-img-1.png)] bg-cover bg-center bg-no-repeat px-[15px] md:px-[45px] pt-[20px] md:pt-[75px] pb-[15px] md:pb-[55px'>
                    <div className='w-auto md:w-[249px] text-center md:text-left text-white'>
                        <p className='text-[16px] md:text-[24px] font-bold'>lorem ipsum dolor <br/>sit amet <br/>consectetur <br/>adipiscing elit sed<br/> do eiusmod.</p>
                        <button className='group-hover: hover:duration-300 hover:ease-in hover:bg-transparent border hover:border-1 hover:border-white/50 border-white/50 mt-[15px] md:mt-[52px] bg-white/50 py-[10px] md:py-[13px] md:px-[40px] px-[20px] text-[12px] md:text-[16px] cursor-pointer'>Read more</button>
                    </div>
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'></div>
                </div>
            </Flex>
            <Flex className=" flex items-center gap-[5px] justify-end mt-[28px]">
                <h6 className='text-[12px] md:text-[16px]'>MORE FROM THE BLLOG</h6>
                <FaChevronRight className='text-[10px] md:text-[15px]'/>
            </Flex>
        </Container>
    </div>
  )
}

export default Blog