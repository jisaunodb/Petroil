import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
import Flogo from "../../assets/footer-logo.png"
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaMapLocationDot  } from "react-icons/fa6";
import facebook from "../../assets/Facebook.png"
import Twitter from "../../assets/Twitter.png"
import Linkedin from "../../assets/Linkedin.png"
import Instagram from "../../assets/Instagram.png"
import Cart1 from "../../assets/Cert1.png"
import Cart2 from "../../assets/Cert2.png"

const Footer = () => {
  return (
    <div className='bg-[#1F1F1F] font-primary'>

        <Container className="md:pt-[150px] pt-[50px] pb-[50px] md:pb-[280px]">
            <Flex className="items-center text-white justify-between">
                <div className='mr-[145px]'>
                    <img src={Flogo} alt="" />
                    <Flex className= "flex text-white items-center gap-[5px]  mt-[34px]">
                        <IoMailUnreadOutline/>
                        <a href="#">mail@yourcompany.com</a>
                    </Flex>
                    <Flex className="flex text-white items-center gap-[5px] mt-[15px]">
                        <LuPhoneCall/>
                        <a href="#">+896 120 5889 (Toll free)</a>
                    </Flex>
                    <Flex className="flex text-white  gap-[5px] mt-[15px]">
                        <FaMapLocationDot/>
                        <a href="#">101 Baker Street, New York, USA, 12345</a>
                    </Flex>
                    <Flex className="flex items-center gap-[12px] mt-[34px]">
                        <img src={facebook} alt="" />
                        <img src={Linkedin} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Instagram} alt="" />
                    </Flex>
                </div>

                <Flex className="mt-[10px] md:mt-0 flex gap-[20px] md:gap-[48px]">
                    <div className='w-[173px]'>
                        <h6 className='font-bold'>Company</h6>
                        <ul className='mt-[21px]'>
                            <li className='list-none font-normal mt-[15px]'>Home</li>
                            <li className='list-none font-normal mt-[15px]'>About</li>
                            <li className='list-none font-normal mt-[15px]'>Services</li>
                            <li className='list-none font-normal mt-[15px]'>Gallery</li>
                        </ul>
                    </div>
                    <div className='w-[173px]'>
                        <h6 className='font-bold'>Others</h6>
                        <ul className='mt-[21px]'>
                            <li className='list-none font-normal mt-[15px]'>Blog</li>
                            <li className='list-none font-normal mt-[15px]'>Contact</li>
                            <li className='list-none font-normal mt-[15px]'>Terms & Conditions</li>
                            <li className='list-none font-normal mt-[15px]'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold'>Certificate</h6>
                        <Flex className="gap-[5px] mt-[21px]">
                           <img src={Cart1} alt="" />
                           <img src={Cart2} alt="" />
                        </Flex>
                    </div>
                </Flex>
            </Flex>
        </Container>
        <div className='bg-[#282828]'>
            <Container>
                <p className='text-[12px] md:text-[16px] py-[20px] md:py-[42px] text-[#6C6C6C]'>© Copyright 2024 by AltDesain Studio – All right reserved.</p>
            </Container>
        </div>
    </div>
  )
}

export default Footer