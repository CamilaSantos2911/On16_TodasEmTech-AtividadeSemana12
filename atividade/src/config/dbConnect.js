const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://Camila2911:carboidrato29@cluster0.d1myn.mongodb.net/atividadereprograma",{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

let db = mongoose.connection;

module.exports = db;