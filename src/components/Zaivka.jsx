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
          <h1
            id="kons"
            className="md:text-6xl lg:text-8xl flex leading-none text-center justify-center lg:mx-auto max-w-[1200px] mt-24 text-5xl text-blue font-fam leading-[6rem]"
          >
            Отправить заявку <br /> на банковскую гарантию
          </h1>
          <span className="flex justify-center text-[30px] text-blue font-semibold mb-5">
            Оставьте свои контакты, и с вами свяжется менеджер
          </span>
          <div className="flex flex-col gap-5 p-5 max-w-lg border-2 w-1/3 mx-auto h-auto w-auto border-light-blue  rounded-3xl">
            <input
              className="border-2 w-full max-w-96 h-15 border-light-blue rounded-2xl mx-auto text-2xl p-4"
              type="text"
              name="fio"
              placeholder="ФИО"
              value={fio}
              onChange={(e) => setFio(e.target.value)}
              required
            />
            <input
              className="border-2 w-full max-w-96 h-15 border-light-blue rounded-2xl mx-auto text-2xl p-4"
              type="text"
              name="phone"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="border-2 w-full max-w-96 h-15 border-light-blue rounded-2xl mx-auto  p-4 text-2xl"
              type="text"
              name="inn"
              placeholder="ИНН или название компании"
              value={inn}
              onChange={(e) => setInn(e.target.value)}
              required
            />
            <button
              type="submit"
              className="button flex text-2xl border-2 w-fit p-3 lg:p-5 mx-auto justify-center max-w-[400px] w-full border-blue bg-blue text-white rounded-2xl"
            >
              <span className="w-fit">Отправить заявку</span>
            </button>
          </div>
        </form>
      </section>
    </footer>
  );
};
