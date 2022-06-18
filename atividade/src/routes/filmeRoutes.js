const controller = require('../controller/filmeController')
const express = require('express')
const router = express.Router()

router.get("/catalogo", controller.getAll)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/:id", controller.deleteFilme)

module.exports = router