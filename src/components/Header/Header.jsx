import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import Container from '../container/Container';


const Header = () => {
  return (
    <div className='bg-[#282828] border-b-2 border-[#FFB800]'>
        <Container>
            <div className='flex justify-between items-center font-primary pt-[15px] pb-[15px] pl-[5px] pr-[5px] text-[white]'>
        <div className="flex space-x-[49px]">
            <div className="flex items-center space-x-[5px]">
                <IoMailUnreadOutline size={30}/>
                <a href="mailto:mail@yourcompany.com">mail@yourcompany.com</a>
            </div>
            <div className="relative after:content-[''] after:absolute after:top-1 after:left-[-22px] after:w-[2px] after:h-[25px] after:bg-[#5C6A92] flex items-center space-x-[5px]">
                <LuPhoneCall className='text-[25px]'/>
                <a href="tel:+896 120 5889">+896 120 5889 (Toll free)</a>
            </div>

        </div>
        <div className="flex items-center space-x-[19px] text-white text-[25px]">
            <FaFacebookF/>
            <FaTwitter/>
            <FaLinkedinIn/>
            <FaInstagram/>
        </div>
    </div>
        </Container>

    </div>


// {/* <div className='bg-[#282828] border-b-2 border-[#FFB800]'>
//         <Container>
//             <Flex className='justify-between items-center font-primary pt-[15px] pb-[15px] pl-[5px] pr-[5px] text-[white]'>
//         <Flex className=" space-x-[49px]">
//             <Flex className="flex items-center space-x-[5px]">
//                 <IoMailUnreadOutline size={30}/>
//                 <a href="mailto:mail@yourcompany.com">mail@yourcompany.com</a>
//             </Flex>
//             <Flex className="relative after:content-[''] after:absolute after:top-1 after:left-[-22px] after:w-[2px] after:h-[25px] after:bg-[#5C6A92]  items-center space-x-[5px]">
//                 <LuPhoneCall className='text-[25px]'/>
//                 <a href="tel:+896 120 5889">+896 120 5889 (Toll free)</a>
//             </Flex>

//         </Flex>
//         <Flex className=" items-center space-x-[19px] text-white text-[25px]">
//             <FaFacebookF/>
//             <FaTwitter/>
//             <FaLinkedinIn/>
//             <FaInstagram/>
//         </Flex>
//     </Flex>
//         </Container>

//     </div> */}


  )
}

export default Header