import React from 'react'

const Bging = ({children,className}) => {
  return (
    <div className={` ${className} z-[10] relative pt-[147px] pb-[139px] pl-[100px] bg-no-repeat bg-center bg-cover`}>
      {children}
    </div>
  )
}

export default Bging