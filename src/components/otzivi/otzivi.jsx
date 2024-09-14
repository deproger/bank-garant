import React from 'react'
import MainImage from '../images/1отзыв.png'
import MainImage_2 from '../images/2 отзыв.png'
import MainImage_3 from '../images/3отзыв.png'
import MainImage_4 from '../images/4отзыв.png'




export const Otzivi = () => {
  return (
    
   
    <section className='px-7'>
        <h3 className=' flex text-8xl font-fam text-blue justify-center mt-40 '>отзывы клиентов</h3>
        <div className='flex max-w-full w-full '>
        <div className=''>
            <img className='w-full' src={ MainImage }></img>
            <p className='text-2xl flex justify-center text-blue font-semibold'>НоксБанк</p>
          </div>
          <div>
            <img className='w-full' src={ MainImage_2 }></img>  
            <p className='text-2xl flex justify-center text-blue font-semibold'>ВТБ</p>
           </div>
          <div>
          <img className='w-full' src={ MainImage_3 }></img>
          <p className='text-2xl flex justify-center text-blue font-semibold'>Альфа Банк</p>
          </div>
          <div>
          <img className='w-full' src={ MainImage_4 }></img>
          <p className='text-2xl flex justify-center text-blue font-semibold'>Трансстройбанк</p> 
          </div>
        </div> 
        
        <section id='stat'>
        <div className='flex items-center p-5 px-7 bg-blue w-96 rounded-[50px] mt-40'>
            <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
                <span className="text-3xl font-extrabold text-white ml-1 ">Полезные статьи</span>
        </div>

        <ul className='articals flex space-x-6 mt-10 justify-center'>
            <li className='bg-white h-full w-1/3 rounded-[50px] shadow-w'>
            <h1 className='ml-7 mt-7 text-3xl text-blue font-medium'>Без обеспечения контракта -
            стоит ли оно того?</h1>
                <p className='text-blue text-lg ml-7 mt-4 leading-7  font-medium '>Без обеспечения контракта любой
заказчик несет определенные 
риски. Каждый участник конкурса,
аукциона должен, прежде всего,
хорошо несколько раз подумать,
перед тем как подавать заявку на
заключение г...</p>
           
              
           
            <a href='#' className='flex justify-center'><p className='flex justify-center mt-4 mb-4 p-3 px-7 bg-blue w-44 rounded-[15px] text-3xl font-semibold text-white '>Подробнее</p></a>
            


            </li>
        
            <li className='bg-white h-full w-1/3  rounded-[50px] shadow-w'>
            <h1 className='ml-7 mt-7 text-3xl text-blue font-medium'>Удобство и скорость
            оформления</h1>
            <p className='text-blue text-lg ml-7 mt-4 leading-7  font-medium '>Онлайн-банковские гарантии
значительно упрощают получения
финансовых обязательств. Без 
необходимости посещения
банковского отделени, все
операции можно провести через
интернет, что экономит в...</p>

            <a href='#' className='flex justify-center'><p className='flex justify-center items-center mt-4 mb-4  p-3 px-7 bg-blue w-44 rounded-[15px] text-3xl font-semibold text-white '>Подробнее</p></a>

            </li>
            
            </ul>
        </section>
    </section>
  );
}