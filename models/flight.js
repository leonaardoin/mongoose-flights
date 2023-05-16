// destructing Schema & model from mongoose & setting them to their own vars
const { Schema, model } = require("mongoose");
const Destination = require('./destination')


const date = ()=>{
  let date = new Date();
  date.setFullYear(date.getFullYear()+1)
  return date;
}

const flightSchema = new Schema(
  {
    airline: {
        type: String, 
        enum:['American','Southwest','United'],
        require: true,
        default:true
    },
    flightNo: {
        type: Number, 
        require: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date, 
        default: date()
    },
    destination:{
      type: [{ type: Schema.Types.ObjectId, ref: 'Destination' }],
      required: true
    }
  },
  {
    timestamps: true,
  }
);


module.exports = model("Flight", flightSchema);