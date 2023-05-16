const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

db.on('error',(err)=>console.log(err.messge + 'is mongo not running?'))
db.on('open',()=>console.log('mongo connected'))
db.on('close',()=>console.log('mongo disconnected'))

module.exports = db;