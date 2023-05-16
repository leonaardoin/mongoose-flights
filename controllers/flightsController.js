const express = require('express')
const router = express.Router()
const Flight = require('../models/flight')


router.get('/', async (req,res) =>{
  
    try {
      const foundFlight = await Flight.find({})
        res.status(200).render('flights/Index',{ flights:foundFlight })
  
    } catch (error) {
        res.status(400).send(error)
    }
  })
  
  router.get('/new',(req,res) => {
    res.render('flights/New')
  })
  
    router.delete('/:id',async (req,res) =>{
    try {
      await Flight.findByIdAndDelete(req.params.id);
      res.status(200).redirect('/flights')
    } catch (error) {
      res.status(400).send(err);
    }
  })
  
    router.put('/:id', async (req,res) =>{
    try {
      const updateFlight = await Flight.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true})
        console.log(updateFlight)
        res.redirect('/flights')
    } catch (error) {
      res.status(400).send(err);
    }
  })
  
    router.post('/',async (req,res) =>{
    try {
      const newFlight = await Flight.create(req.body)
      console.log(newFlight)
      res.redirect('/flights')
    } catch (error) {
      res.status(400).send(error)
    }
  })
  
    router.get('/:id/edit', async (req,res) => {
    try {
      const foundFlight = await Flight.findById(req.params.id)
      res.render('flights/Edit',{
        flight: foundFlight
      })
    } catch (error) {
      res.status(400).send(error)
    }
  })
  
    router.get('/:id', async (req,res) => {
    try {
      const foundFlight = await Flight.findById(req.params.id)
      res.render('flights/Show',{flight:foundFlight})
    } catch (error) {
      res.status(400).send(error)
    }
  })
  
  module.exports = router;