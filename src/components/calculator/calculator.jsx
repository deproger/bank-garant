
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
      if (formData.benef == "commercial") {
        coef = 0.045;
      } else {
        coef = 0.03;
      }
  
      const result = formData.num1 * (formData.num2 * coef);
  
      setResult(result);
    };
    if (!result) {
      setResult("Тут будет результат вычислений");
    }
    return (


      <>
        <section id="calcu" className="calculator px-7 ">
        <div>
            <p className='flex justify-center mt-40 font-fam text-blue text-8xl '>калькулятор бг</p>
          </div>
          <form name="myform" onSubmit={handleFormSubmit} className="max-w-lg border-2 w-1/3 mx-auto mt-3 h-auto w-auto border-light-blue rounded-3xl">
            <div className="calc flex justify-center">
  
              <div className="forms ">
                <div className="form1">
                  <h4 className="text-xl mt-10 text-blue font-semibold ">Размер банковской гарантии, руб.</h4>
                  <input className="border-2 w-96 h-12 border-light-blue  rounded-2xl text-xl mt-3"
                    name="num1"
                    id="num1"
                    value={formData.num1}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form2">
                  <h4 className="text-xl mt-3 text-blue font-semibold">Срок банковской гарантии, мес.</h4>
                  <input className="border-2 w-96 h-12 border-light-blue  rounded-2xl text-xl mt-3"
                    name="num2"
                    id="num2"
                    value={formData.num2}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="list">
              <div className="top_block h-auto w-auto">
                <h4 className="text-xl mt-3 text-blue font-semibold ml-16 ">Бенефициар по банковской гарантии</h4>
                <select className=" border-2 w-96 h-12 border-light-blue ml-16 rounded-2xl text-xl mt-3 "
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
                <h4 className="text-xl mt-3 text-blue font-semibold ml-16">Финансовая устойчивость</h4>
                <select className="border-2 w-96 h-12 border-light-blue ml-16 rounded-2xl text-xl mt-3 "
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
                <h4 className="text-xl mt-3 text-blue font-semibold ml-16">Обеспечение</h4>
                <select className="border-2 w-96 h-12 border-light-blue ml-16 rounded-2xl text-xl mt-3 "
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
            </div>
  
            <div className="but-res mt-14">
              <button  
                id="return_result"
                className="button ml-7"
                type="submit"
              >
                <span className=" text-2xl bg-blue p-8 px-32 ml-9 rounded-2xl text-white font-semibold">Рассчитать</span>
              </button>
              <div className="res border-2 text-xl  border-light-blue mt-12 mb-8 px-8 p-5 ml-9 mr-9 rounded-2xl  text-blue font-semibold ">
                <p id="result">{result}</p>
              </div>
            </div>
          </form>
        </section>
      </>
      
    );
  };
  
   