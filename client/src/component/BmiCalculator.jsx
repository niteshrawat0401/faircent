import React, { useState } from 'react'
import "./style.css"

const init = {
  weight : "",
  height : ""
}

const BmiCalculator = () => {
  const [value, setValue] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value });
  };

  const handleSubmit = ()=>{
    
  }

  return (
    <div>
      <div className='bmi_box'>
        <h1 style={{ fontWeight: "bold",fontSize:"21px",paddingTop:"2rem" }}>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <span>Weight &nbsp;
        <input
          type="text"
          name="weight"
          className="weightinp"
          placeholder="Weight"
          onChange={handleChange}
          value={value.name}
          required
        />
        </span>
        <span>Height &nbsp;<input
          type="text"
          name="height"
          className="heightinp"
          placeholder="Height"
          onChange={handleChange}
          value={value.email}
          required
        /></span>
        <input className="calbtn" type="submit" value="Get BMI" />
      </form>
      </div>
    </div>
  )
}

export default BmiCalculator