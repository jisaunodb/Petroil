import React from 'react'

const Bging = ({children,className}) => {
  return (
    <div className={` ${className} z-[10] relative pt-[30px]  md:pt-[147px] pb-[30px] md:pb-[139px] pl-[30px] md:pl-[100px] bg-no-repeat bg-center bg-cover`}>
      {children}
    </div>
  )
}

export default Bging