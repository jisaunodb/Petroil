import React from 'react'

const Flex = ({children}) => {
  return (
    <div className='flex justify-between space-x-0 items-center'>{children}</div>
  )
}

export default Flex