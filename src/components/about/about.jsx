import React from 'react'

export const About = () => {
  return (
    <section className='px-7'>
         <div className='flex items-center p-5 px-7 bg-blue w-56 rounded-[50px] mt-40'>
            <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
                <span className="text-3xl font-extrabold text-white ml-1 ">Кто мы</span>
        </div>
        <div>
            <p className='text-blue text-xl font-semibold mt-8 '>Финансовая компания "Гарант-БГ" активно развивается, и наши специалисты регулярно повышают свою
            квалификацию. Мы более 10 лет работаем в финансовом секторе, сотрудничая с ведущими банками.</p>

            <p className='text-blue text-xl font-semibold mt-4'>Мы предлагаем широкий спектр услуг, которые помогут вам в бизнесе. Независимо от того, нужна ли вам
            гарантия для участия в закупках, исполнения контрактов или другие виды гарантий, мы поможем вам
            получить нужные документы в кратчайшие сроки.</p>

            <p className='text-blue text-xl font-semibold mt-4'>Даже если вам отказали в другом месте, наши специалисты найдут оптимальное решение для вашей
            ситуации.</p>
        </div>

        <div className='flex items-center float-right p-5 px-7 bg-blue rounded-[50px] mt-40'>
                <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
                    <span className="text-3xl font-extrabold text-white ml-1 ">Почему выбирают нас</span>
            </div>

            <ul className='flex space-x-6 mt-72'>
            <li className='bg-white h-80 w-1/3 rounded-[50px] shadow-w'>
                <p className='text-blue text-2xl ml-7 mt-6 leading-7  font-medium '>Только легальные банковские
                    гарантии от банков,
                    аккредитованных МинФином
                    РФ. Наши гарантии проходят
                    все проверки. </p>
            </li>
        
            <li className='bg-white h-80 w-1/3  rounded-[50px] shadow-w'>
                <p className='text-blue text-2xl ml-7 mt-6 leading-7 font-medium'>Мы работаем с компаниями
                    всех форм собственности:
                    ИП, ООО, АО, ЗАО.</p>
            </li>

            <li className='bg-white h-80 w-1/3  rounded-[50px] shadow-w'>
                <p className='text-blue text-2xl ml-7 mt-6 leading-7 font-medium'>Помогает получить гарантию
                    без необходимости залога
                    или поручительства.</p>
            </li>
            </ul>
        </section>
  )
}
