import React from 'react'
import Img from '../images/Frame 1.png'
import Img_2 from '../images/Frame 2.png'
import Img_3 from '../images/Frame 3.png'


export const Footer = () => {
  return (
    <footer className='bg-light-blue h-auto w-full rounded-3xl'>
        <div className='mt-28'>
        <div className="">
        <a href="mailto:info@garant-bg.ru ">
          <p className=' text-white font-bold ml-24 mb-1 py-10'>info@garant-bg.ru</p>
        </a>
        <div></div>
        <a href="tel:8(800)6004592">
         <p className='text-white font-bold text-4xl ml-24 py-[-3rem]'> 8 (800) 600 45 92</p>
        </a>
      </div>
            <p className='text-blue ml-24 mt-[-5px]'>Звонок по России бесплатный</p>
            <p className='text-blue ml-24 mt-4'>ежедневно 10:00-19:00</p>
            <p className='text-white ml-24 mt-[-5px]'>123242,г.Москва, ул.Садовая-Кудринская, д. 11, стр. 1, офис 101</p>
        </div>
        
        <div className='ml-[42rem] mt-[-11rem] 2xl:ml-[55rem]'>
            <p className='text-white text-2xl  leading-10 font-medium items-center'>Главная</p>
            <p className='text-blue text-2xl leading-10 font-medium'>Кто мы</p>
            <p className='text-white text-2xl leading-10 font-medium'>Калькулятор БГ</p>
        </div>

        <div className="links flex space-x-3 ml-12 mt-4 2xl:ml-3 justify-center">
        <a href="tel:8(800)6004592">
          <img src={ Img } alt="Номер телефона" />
        </a>
        <a href="mailto:info@garant-bg.ru ">
          <img src={ Img_2 } alt="Mail" />
        </a>
        <a href="wa.me/+79035129685 ">
          <img src={ Img_3 } alt="Whatsapp" />
        </a>
      </div>

      <div className='border-[0.5px] ml-24 mr-24 mt-16 border-blue' >
      </div>

      <div className='flex text-xs justify-between ml-24  mr-24 py-10'>
        <p className='text-blue'>2024 garant-bg </p>
        <p className='text-blue mb-4 '>Разработка сайта</p>
      </div>



    </footer>
  )
}
