const filmes = require('../models/filmes-barbie')
const express = require('express')
const app = express()
const fs = require ("fs")

app.use(express.json())

const getAll = (request,response) => {
    filmes.find((err,filmes) => {
  
    response.status(200).json(filmes)
 })
}

const updateMovie= (request, response) => {
    const idRequest = request.params.id

    filmes.findByIdAndUpdate(id, {$set: request.body}, (err) => {
        if(!err) {
            response.status(200).send({message:'Filme atualizado com sucesso'})
          } else {
            response.status(500).send({message: err.message})
          }
        })
      }
    
  

const deleteFilme = (request, response) => {
    
    const idRequest = request.params.id
   
    filmes.findByIdAndDelete(id, (err) => {
        if(!err) {
          response.status(200).send({message:'Filme deletado com sucesso'})
        } else {
          response.status(500).send({message: err.message})
        }
      })
    }
   

module.exports = {
    getAll,
    updateMovie,
    deleteFilme
}

