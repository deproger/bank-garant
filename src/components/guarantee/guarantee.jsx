import React from 'react'

export const Quarantee = () => {
  return (
    <section className='px-7'>
        <div className='flex items-center p-5 px-7 bg-blue w-96 rounded-[50px] mt-40'>
            <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
                <span className="text-4xl font-extrabold text-white ml-1 ">Виды гарантий</span>
        </div>

        <main>
            <div className='flex rounded-[50px] h-44 mt-10 shadow-w'>
                <ul className='flex space-x-10 ml-16 mr-4'>
                    <li className='text-xl 2xl:text-2xl text-blue font-semibold mt-4'>Тендерная гарантия 
                    <p className='text-base 2xl:text-xl text-light-blue font-normal mt-8'>Нужна для участия в госзакупках по 44-ФЗ, 223-ФЗ, 615-ПП.</p>
                    </li>
                    <li className='text-xl 2xl:text-2xl text-blue font-semibold mt-4'>Гарантия для бизнеса 
                    <p className='text-base 2xl:text-xl text-light-blue font-normal mt-8'>Подходит для коммерческих контрактов</p>
                    </li>
                    <li className='text-xl 2xl:text-2xl text-blue font-semibold mt-4'>Гарантия на таможенные операции 
                    <p className='text-base 2xl:text-xl text-light-blue font-normal mt-8'>Необходима для участников внешнеэкономической деятельности</p>
                    </li>
                    <li className='text-xl 2xl:text-2xl text-blue font-semibold mt-4'>Гарантия на налоговые обязательства 
                    <p className='text-base 2xl:text-xl text-light-blue font-normal mt-1'>Предоставляется при отсрочке налоговых выплат</p>
                    </li>
                </ul>

            </div>

            <div className='flex items-center float-right p-5 px-7 bg-blue w-[650px] rounded-[50px] mt-40'>
                <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
                    <span className="text-4xl font-extrabold text-white ml-1 ">Процесс получения  гарантии</span>
            </div>

            <div className='flex rounded-[50px] h-44 mt-72 shadow-w'>
                <ul className='flex space-x-24 ml-14 '>
                    <li className='text-xl 2xl:text-3xl text-blue font-semibold mt-4'>1. Оформите заявку 
                    <p className='text-base 2xl:text-2xl text-light-blue font-normal mt-10'>На нашем сайте</p>
                    </li>
                    <li className='text-xl 2xl:text-3xl text-blue font-semibold mt-4'>2. Соберите документы 
                    <p className='text-base 2xl:text-2xl text-light-blue font-normal mt-10'>Предоставьте все необходимые бумаги</p>
                    </li>
                    <li className='text-xl 2xl:text-3xl text-blue font-semibold mt-4'>3. Оплатите комиссию 
                    <p className='text-base 2xl:text-2xl text-light-blue font-normal mt-10'>За получение банковской гарантии</p>
                    </li>
                    <li className='text-xl 2xl:text-3xl text-blue font-semibold mt-4'>4. Получите гарантию
                    <p className='text-base 2xl:text-2xl text-light-blue font-normal mt-10'>В электронном виде</p>
                    </li>
                </ul>

            </div>
        </main>
    </section>

  )
}
