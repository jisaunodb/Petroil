import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`md:w-[1144px] w-auto mx-auto px-[10px] md:px-0 ${className}`}>{children}</div>
  )
}

export default Container