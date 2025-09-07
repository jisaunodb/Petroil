import React from 'react'
import Container from '../container/Container'
import logo from "../../assets/main-logo.png"
import Flex from '../flex/Flex'
const Navbar = () => {
  return (
    <div className='bg-[#F40404] pt-[30px] pb-[30px]'>
        <Container>
            <Flex className='justify-between items-center'>
                <div>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <Flex className='items-center text-[white]'>
                    <Flex className='space-x-[30px] text-[17px] list-none'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Gallery</a></li>
                        <li><a href='#'>Blog</a></li>
                    </Flex>
                    <div className='ml-[72px]'>
                        <button className='cursor-pointer border-3 border-[white] pt-[13px] pb-[13px] pl-[32px] pr-[32px]'>CONTACT</button>
                    </div>
                </Flex>
            </Flex>

        </Container>

    </div>
  )
}

export default Navbar