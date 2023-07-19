const {model, Schema} = require('mongoose');

const bmiSchema = new Schema({
    weight : {
        type: Number,
        required : true
    },
    height : {
        type : Number,
        required : true
    },
    bmiCalculation : {
        type: Number
    }
})

const Bmi  = model("bmi", bmiSchema);
module.exports = Bmi;