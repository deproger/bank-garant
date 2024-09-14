import React from 'react'
import { NavItem } from '../nav-items/nav'
import { Icon } from '../icon'
import { Icom } from '../icom'

export const Header = () => {
  return (
    <header className='flex justify-between relative z-10 bg-blue ml-10 mr-10 mt-3 pl-7    text-white rounded-[50px]'>
        <Icon /> 
        <nav className='flex  space-x-6 ml-40 items-center '>
            <a href='#pred'><NavItem text='Предложения'/></a>
            <a href='#calcu'><NavItem text='Калькулятор'/></a>
            <a href='#stat'><NavItem text='Статьи'/></a>
            <a href='#kons'><Icom text='Консультация'/></a>
        </nav> 
    </header>
    
  )
}
