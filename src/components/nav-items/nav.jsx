import React from 'react'

export const NavItem = ({ text = '' }) => {
  return (
    <div className='py-[18px]'>
        <a href='#' className='text-2xl'>{ text }</a>
    </div>
  )
}
