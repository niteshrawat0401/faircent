const Bmi = require('../model/bmiCalculator');
const {Router} = require('express');

const bmiRouter = Router();

bmiRouter.post('/bmical', async(req, res)=>{
    const {weight, height} = req.body;

    let bmiCalculate = weight / height ^ 2;
    console.log(bmiCalculate);
    const calculate = await Bmi.create({
        weight,
        height,
        bmiCalculation : bmiCalculate
    })
    try {
        if(calculate){
            return res.status(201).json({msg : "Bmi calculated", calculate});
        }
    } catch (error) {
        return res.status(500).json({msg : "server error", error});
    }
})

module.exports = bmiRouter