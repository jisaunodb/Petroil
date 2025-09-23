import React from 'react'

function Button({children,className}) {
  return (

    <div>
        <button className={`${className} mt-[15px] md:mt-[31px] bg-[#F40404] py-[10px] md:py-[13px] px-[20px] md:px-[40px] cursor-pointer font-semibold text-[10px] md:text-[16px]`}>LEARN MORE</button>
        {children}
    </div>
  )
}

export default Button