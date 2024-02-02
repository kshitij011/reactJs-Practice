import { useState } from "react";

const initialState ={
    name: '',
    city: ''
  }

export const UseStateHook = ()=>{
    const [formData, setFormData] =useState(initialState)

    function handleNameChange(event){
        setFormData({
          ...formData,
          name: event.target.value
        })
    }

      function handleCityChange(event){
        setFormData({
          ...formData,
          city: event.target.value
        })
    }

    console.log(formData);
    return(
    <div className = "App">
      <h1>UseState Hook</h1>
      <input type="text" placeholder='Enter text' onChange={handleNameChange} />
      <select onChange={handleCityChange}>
        <option>
          Select City
        </option>
        <option value="Bengaluru" id="bengaluru">
          Bengaluru
        </option>
        <option value="Mumbai" id="mumbai">
          Mumbai
        </option>
        <option value="Delhi" id="delhi">
          Delhi
        </option>
      </select>
      <div>
        <p>Name is {formData.name}</p>
        City is {formData.city}
      </div>
     </div>
    )
}