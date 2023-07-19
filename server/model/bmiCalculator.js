const {model, Schema} = require('mongoose');

const bmiSchema = new Schema({
    weight : {
        type: Number,
    },
    height : {
        type : Number
    },
    bmiCalculation : {
        type: Number
    }
})

const Bmi  = model("bmi", bmiSchema);
module.exports = Bmi;