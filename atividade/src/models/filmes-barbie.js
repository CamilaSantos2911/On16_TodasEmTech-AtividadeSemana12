const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
  id: { type: String },
  topic: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
 });


const filmes = mongoose.model('filmes', filmeSchema);

module.exports = filmes;