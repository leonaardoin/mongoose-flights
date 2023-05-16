const { Schema, model } = require("mongoose");

const destinationSchema = new Schema(

  {
    airport: {
        type: String, 
        enum:['AUS','DAL','LAX','SAN','SEA'],
        require: true,
        default: 'SAN'
    },
    arrival: {
        type: Date, 
        require: true,
        default: false
    }
  }
);

module.exports = model('Destination',destinationSchema)