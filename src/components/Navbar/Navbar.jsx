import React, { useState } from 'react'
import Container from '../container/Container'
import logo from "../../assets/main-logo.png"
import Flex from '../flex/Flex'
import { FiMenu } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";


const Navbar = () => {
    const [show, setshow] = useState(false)

    const clickMe =()=>{
        setshow(!show)

    }
  return (
    <div className='bg-[#F40404] pt-[10px] md:pt-[30px] pb-[10px] md:pb-[30px] font-primary'>
        <Container>
            <Flex className='flex justify-between items-center'>
                <div className=' items-center justify-between'>
                    <div className='w-[150px]'>
                        <a href="#" >
                            <img src={logo} alt="" />
                        </a>
                    </div>
                </div>
                    <div className='md:hidden'>
                        {
                            show ? <FiMenu onClick={clickMe} className='transition
                             text-[#fff]'/> : <div className=' absolute right-[10px]  top-18 z-99 bg-amber-600/50 p-[10px] w-[200px] h-[300px]'>
                                <div className='flex justify-end'>
                                    <RiCloseLargeLine onClick={clickMe} className='text-[#fff] text-right'/>
                                </div>
                                <Flex className='items-center text-[white]  md:block'>
                                    <Flex className=' space-x-[30px] text-[17px] list-none'>
                                        <li><a href='#'>Home</a></li>
                                        <li><a href='#'>About</a></li>
                                        <li><a href='#'>Services</a></li>
                                        <li><a href='#'>Gallery</a></li>
                                        <li><a href='#'>Blog</a></li>
                                    </Flex>
                                    <div className='ml-[0px] md:ml-[72px] mt-[20px] md:mt-auto'>
                                        <button className='cursor-pointer border-3 ml-[] border-[white] md:pt-[13px] pt-[5px] md:pb-[13px] pb-[5px] md:pl-[32px] pl-[15px] md:pr-[32px] pr-[15px] text-[10px] md:text-[16px] font-semibold'>CONTACT</button>
                                    </div>
                                </Flex>
                            </div>

                        }
                        {/* {
                            show ? (
                                <Flex className='items-center text-[white]  md:block'>
                                    <Flex className=' space-x-[30px] text-[17px] list-none'>
                                        <li><a href='#'>Home</a></li>
                                        <li><a href='#'>About</a></li>
                                        <li><a href='#'>Services</a></li>
                                        <li><a href='#'>Gallery</a></li>
                                        <li><a href='#'>Blog</a></li>
                                    </Flex>
                                    <div className='ml-[0px] md:ml-[72px] mt-[20px] md:mt-auto'>
                                        <button className='cursor-pointer border-3 ml-[] border-[white] md:pt-[13px] pt-[5px] md:pb-[13px] pb-[5px] md:pl-[32px] pl-[15px] md:pr-[32px] pr-[15px] text-[10px] md:text-[16px] font-semibold'>CONTACT</button>
                                    </div>
                                </Flex>
                            )
                            :
                            ("")
                        } */}
                            </div>
                                {/* {
                                    show ? <FiMenu onClick={()=> setshow(!show)} />: <RiCloseLargeLine onClick={()=> setshow(!show)}/>
                                } */}
                             {/* <FiMenu onClick={clickMe} className='transition
                             text-[#fff]'/> */}


                <Flex className='items-center text-[white] hidden  md:block'>
                    <Flex className=' space-x-[30px] text-[17px] list-none font-semibold'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Gallery</a></li>
                        <li><a href='#'>Blog</a></li>
                    </Flex>
                    <div className='ml-[0px] md:ml-[72px]'>
                        <button className='cursor-pointer border-3 ml-[] border-[white] pt-[13px] pb-[13px] pl-[32px] pr-[32px] font-semibold'>CONTACT</button>
                    </div>
                </Flex>
            </Flex>

        </Container>

    </div>
  )
}

export default Navbar