import React from 'react'

export const Icom = ({ text = '' }) => {
  return (
    <div className='py-[18px]'>
        <a href='#kons' className='text-2xl bg-light-blue p-5 px-5  rounded-[50px] text-white'>{ text }</a>
    </div>
  )
}

