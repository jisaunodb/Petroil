import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
import logo1 from "../../assets/Logo1.png"
import logo2 from "../../assets/Logo2.png"
import logo3 from "../../assets/Logo3.png"
import logo4 from "../../assets/Logo4.png"
const Logos = () => {
  return (
    <div>
        <Container>
            <Flex className="py-[116px] justify-between items-center">
                <div><img src={logo1} alt="" /></div>
                <div><img src={logo2} alt="" /></div>
                <div><img src={logo3} alt="" /></div>
                <div><img src={logo4} alt="" /></div>
            </Flex>
        </Container>
    </div>
  )
}

export default Logos