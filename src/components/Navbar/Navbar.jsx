import React from 'react'
import Container from '../container/Container'
import logo from "../../assets/main-logo.png"
import Flex from '../flex/Flex'
const Navbar = () => {
  return (
    <div className='bg-[#F40404] pt-[30px] pb-[30px]'>
        <Container>
            <div className='justify-between'>
                <Flex>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='text-[white]'>
                    <Flex>
                        <div>
                            <ul className='flex space-x-[30px] text-[17px]'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Gallery</li>
                                    <li>Blog</li>
                            </ul>
                        </div>
                        <div className='ml-[72px]'>
                            <button className='border-3 border-[white] pt-[13px] pb-[13px] pl-[32px] pr-[32px]'>CONTACT</button>
                        </div>
                    </Flex>
                </div>
                </Flex>
            </div>

        </Container>

    </div>
  )
}

export default Navbar