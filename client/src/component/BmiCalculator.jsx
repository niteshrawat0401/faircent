import React, { useEffect, useState } from 'react'
import "./style.css";
import axios from 'axios';
import Getbmi from './Getbmi';

const init = {
  weight : "",
  height : ""
}

const BmiCalculator = () => {
  const [calValue, setValue] = useState(init);
  const [data, setData] = useState([]);
  // console.log(calValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...calValue, [name]: value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    let getId = JSON.parse(localStorage.getItem("pvtroute"))
    axios
      .post(`https://scarlet-firefly-veil.cyclic.app/bmi/bmical/${getId.userId}`, calValue)
      .then((res) => {
        alert("Add Data Successfully");
        getBmiData();
        setValue({...init})
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log("error", err);
      });
  }
  const getBmiData = ()=>{
    let getId = JSON.parse(localStorage.getItem("pvtroute"))
    axios
      .get(`https://scarlet-firefly-veil.cyclic.app/bmi/getBmiValue/${getId.userId}`)
      .then((res) => {
        setData(res.data.getBmiValue)
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  useEffect(()=>{
    getBmiData()
  },[])

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
          value={calValue.weight}
          required
        />
        </span>
        <span>Height &nbsp;<input
          type="text"
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
      <div><Getbmi data={data}/></div>
    </div>
  )
}
export default BmiCalculator