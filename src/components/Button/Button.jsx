import React from 'react'

function Button({children,className}) {
  return (

    <div>
        <button className={`${className} mt-[31px] bg-[#F40404] py-[13px] px-[40px] cursor-pointer`}>LEARN MORE</button>
        {children}
    </div>
  )
}

export default Button