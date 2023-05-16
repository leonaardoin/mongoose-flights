require("dotenv").config();
// require('./config/database');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require('./models/flight');
const Destination = require('./models/destination');
const flightsController = require('./controllers/flightsController');


const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);

app.set('view engine', 'jsx');
app.set('views', './views');

//MIDDLEWARE
app.use(express.urlencoded({ extended: false })); 
app.use(express.static('public'))

app.use((req, res, next) => {
  next();
});

// ROUTES
// **I.N.D.U.C.E.S**
app.use('/flights',flightsController)

const addDestination = async(req,res) =>{
  try {
    const updateDesintation = await Destination.findOneAndUpdate(
      {airport},
      {$push:{destination:[req.body]}},
      {new: true}
    )
    console.log(updateDesintation)
  } catch(err) {
    console.log(err)
} finally {
    db.close()
}
}

app.listen(PORT, ()=>{
  console.log(`listening in port: ${PORT}`)
})