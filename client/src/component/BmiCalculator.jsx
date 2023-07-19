import React, { useState } from 'react'
import "./style.css";
import axios from 'axios';

const init = {
  weight : 0,
  height : 0
}

const BmiCalculator = () => {
  const [calValue, setValue] = useState(init);
  // console.log(calValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...calValue, [name]: value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios
      .post("http://localhost:8080/bmi/bmical", calValue)
      .then((res) => {
        // console.log(res.data);
        setValue({...init})
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log("error", err);
      });
  }

  return (
    <div>
      <div className='bmi_box'>
        <h1 style={{ fontWeight: "bold",fontSize:"21px",paddingTop:"2rem" }}>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <span>Weight &nbsp;
        {/* <input
          type="number"
          name="weight"
          className="weightinp"
          placeholder="Weight"
          onChange={handleChange}
          value={calValue.weight}
          required
        /> */}
        <input
          type="number"
          name="weight"
          className="weightinp"
          placeholder="Weight"
          onChange={handleChange}
          value={calValue.weight}
          required
        />
        </span>
        <span>Height &nbsp;<input
          type="number"
          name="height"
          className="heightinp"
          placeholder="Height"
          onChange={handleChange}
          value={calValue.height}
          required
        /></span>
        <input className="calbtn" type="submit" value="Get BMI" />
      </form>
      </div>
    </div>
  )
}
// http://localhost:8080/bmi/getBmiValue
export default BmiCalculator