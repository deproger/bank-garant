import React, { useState } from "react";

export const Calculator = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [formData, setFormData] = useState({
    num1: "",
    num2: "",
    benef: "",
    fin: "",
    obesp: "",
    rs: false,
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRangeChange = (e) => {
    setRangeValue(e.target.valueAsNumber);
  };

  //   setResult("Тут будет результат вычислений");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would calculate the result based on formData
    console.log(formData);
    let coef;
    if (formData.benef === "commercial") {
      // coef = 0.045;
      if (formData.obesp === "yes") {
        coef = 0.0035;
      } else {
        if (formData.fin === "unsatisfactory") {
          coef = 0.0045;
        } else {
          coef = 0.004;
        }
      }
    } else {
      if (formData.obesp === "yes") {
        coef = 0.0025;
      } else {
        if (formData.fin === "unsatisfactory") {
          coef = 0.0035;
        } else {
          coef = 0.003;
        }
      }
    }

    const result = Math.round(formData.num1 * (formData.num2 * coef));

    setResult(result);
  };
  if (!result) {
    setResult("Тут будет результат вычислений");
  }
  return (
    <>
      <section id="calcu" className="calculator px-7 ">
        <div>
          <p className="flex justify-center mt-40 font-fam text-blue text-2xl md:text-6xl lg:text-8xl ">
            калькулятор бг
          </p>
        </div>
        <form
          name="myform"
          onSubmit={handleFormSubmit}
          className="max-w-lg border-2 w-1/3 mx-auto mt-3 h-auto w-auto border-light-blue rounded-3xl px-5"
        >
          <div className="list max-w-[400px] w-fit mx-auto">
            <div className="form1">
              <h4 className="text-xl mt-10 text-blue font-semibold ">
                Размер банковской гарантии, руб.
              </h4>
              <input
                className="border-2 w-full lg:w-96 px-3 h-12 border-light-blue rounded-2xl text-xl mt-3"
                name="num1"
                id="num1"
                value={formData.num1}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form2">
              <h4 className="text-xl mt-3 text-blue font-semibold">
                Срок банковской гарантии, мес.
              </h4>
              <input
                className="border-2 w-full lg:w-96 px-3 h-12 border-light-blue rounded-2xl text-xl mt-3"
                name="num2"
                id="num2"
                value={formData.num2}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="top_block h-auto w-auto">
              <h4 className="text-xl mt-3 text-blue font-semibold ">
                Бенефициар по банковской гарантии
              </h4>
              <select
                className=" border-2 w-full h-12 border-light-blue rounded-2xl text-xl mt-3 "
                name="benef"
                id="benef"
                value={formData.benef}
                onChange={handleInputChange}
                required
              >
                <option value=""></option>
                <option value="state">Государственный заказчик</option>
                <option value="commercial">Коммерческая</option>
              </select>
            </div>
            <div className="top_block">
              <h4 className="text-xl mt-3 text-blue font-semibold">
                Финансовая устойчивость
              </h4>
              <select
                className="border-2 w-full lg:w-96 px-3 h-12 border-light-blue rounded-2xl text-xl mt-3 "
                name="fin"
                id="fin"
                value={formData.fin}
                onChange={handleInputChange}
              >
                <option value=""></option>
                <option value="unsatisfactory">Неудовлетворительное</option>
                <option value="satisfactory">Удовлетворительное</option>
              </select>
            </div>
            <div className="top_block">
              <h4 className="text-xl mt-3 text-blue font-semibold">
                Обеспечение
              </h4>
              <select
                className="border-2 w-full lg:w-96 px-3 h-12 border-light-blue rounded-2xl text-xl mt-3 "
                name="obesp"
                id="obesp"
                value={formData.obesp}
                onChange={handleInputChange}
              >
                <option value=""></option>
                <option value="no">Нет</option>
                <option value="yes">Да</option>
              </select>
            </div>

            <div className="but-res mt-10">
              <button
                id="return_result"
                className="button text-2xl bg-blue py-5 w-full rounded-2xl text-white font-semibold"
                type="submit"
              >
                <span>Рассчитать</span>
              </button>
              <div className="res border-2 text-xl  border-light-blue mt-10 mb-8 px-8 p-5 w-full lg:w-96 rounded-2xl  text-blue font-semibold ">
                <p id="result">{result}</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
