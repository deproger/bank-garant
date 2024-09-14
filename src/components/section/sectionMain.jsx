import React from 'react'

export const SectionMain = () => {
  return (
    <section className='flex ml-10 lg:mt-[-12rem] xl:mt-[40px] relative z-10 '>
        <ul className='flex space-x-5 lg:space-x-2 mt-[6rem] lg:mt-[16rem] xl:mt-[6rem] lg:ml-4 lg:mr-4'>
            <li className='bg-white shadow-lg lg:w-1/4 lg:h-[11rem] xl:h-[16.5rem] xl:w-[20rem] xl:ml-8  2xl:w-[27rem]  rounded-[50px]'>
                <h3 className='text-blue text-4xl font-semibold ml-7 mt-6 '>До 1млрд ₽</h3>
                <p className='text-light-blue text-xl ml-7 mt-3 leading-4'>Максимальный<br></br>
                лимит на гарантии</p>
            </li>
        
            <li className='bg-white shadow-lg lg:w-1/4 lg:h-auto xl:h-[16.5rem] xl:w-[20rem] rounded-[50px] 2xl:w-[27rem]'>
            <h3 className='text-blue text-4xl font-semibold ml-7 mt-6'>До 300млн ₽</h3>
                <p className='text-light-blue text-xl ml-7 mt-3 leading-4'>Максимальный<br></br>
                размер гарантии</p>
            </li>

            <li className='bg-white shadow-lg lg:w-1/4 lg:h-auto xl:h-[16.5rem]xl:w-[20rem] rounded-[50px] 2xl:w-[27rem]'>
            <h3 className='text-blue text-4xl font-semibold ml-7 mt-6'>До 120 месяцев</h3>
                <p className='text-light-blue text-xl ml-7 mt-3 leading-4'>Длительность<br></br>
                гарантии</p>
            </li>

            <li className='bg-white shadow-lg lg:w-1/4 lg:h-auto xl:h-[16.5rem] xl:w-[20rem] rounded-[50px] 2xl:w-[27rem] '>
            <h3 className='text-blue text-4xl font-semibold ml-7 mt-6'>От 1000₽</h3>
                <p className='text-light-blue text-xl ml-7 mt-3 leading-4'>Комиссия<br></br>
                за оформление</p>
            </li>
        </ul>
    </section>
  )
}
