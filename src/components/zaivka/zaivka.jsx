import React, { useState } from "react";


const token = "7107296270:AAHaoOr_WkEYCK6_kq9v3QZeyyEBlZz5hM8";
const chat_id = "-4504065332"; // Replace with your Telegram chat ID

export const Zaivka = () => {
  // State hooks for managing form inputs
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [inn, setInn] = useState("");
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct the message to be sent to Telegram
    const message = `Новая заявка:\nФИО: ${fio}\nНомер телефона: ${phone}\nИНН: ${inn}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodedMessage}`;

    try {
      // Send the message to the Telegram bot
      const response = await fetch(url);

      if (response.ok) {
        alert("Заявка успешно отправлена!");
      } else {
        alert("Ошибка при отправке заявки. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      alert("Ошибка при отправке заявки. Попробуйте снова.");
    }
  };

  return (
    <footer id="pred">
      <section className="px-7">
        <form onSubmit={handleSubmit}>
          <h1 id="kons" className=" flex justify-center ml-32 mt-24 text-[115px] text-blue font-fam leading-[6rem]">
            Отправить заявку <br /> на банковскую гарантию
          </h1>
          <span className="flex justify-center text-[30px] text-blue font-bold mb-5">Оставьте свои контакты, и с вами свяжется менеджер</span>
          <div className="max-w-lg border-2 w-1/3 mx-auto h-auto w-auto border-light-blue  rounded-3xl">
          <input className=" border-2 w-96 h-15 border-light-blue rounded-2xl text-2xl p-4 mt-8 ml-14 "
            type="text"
            name="fio"
            placeholder="ФИО" 
            value={fio}
            onChange={(e) => setFio(e.target.value)}
            required
          />
          <input className="border-2 w-96 h-15 border-light-blue rounded-2xl text-2xl p-4 mt-9  ml-14"
            type="text"
            name="phone"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input className="border-2 w-96 h-15 border-light-blue rounded-2xl  p-4 text-2xl mt-9 ml-14"
            type="text"
            name="inn"
            placeholder="ИНН или название компании"
            value={inn}
            onChange={(e) => setInn(e.target.value)}
            required
          />
          <button type="submit" className="button">
            <span className="flex mb-5 mt-8 text-2xl ml-14 border-2 p-5 px-24 w-[400px] border-blue bg-blue text-white rounded-2xl">Отправить заявку</span>
          </button>
          </div>
        </form>
      </section>
    </footer>
  );
};
