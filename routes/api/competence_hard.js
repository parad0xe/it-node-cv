require('express')

const CompetenceHardController = require('./../../controllers/api/CompetenceHardController.js')

/**
 * @param {e.Router} router
 */
const init = (router) => {
    router.get("/", CompetenceHardController.get)
    router.post("/", CompetenceHardController.post)
    router.put("/:id", CompetenceHardController.put)
    router.delete("/:id", CompetenceHardController.delete)
}

module.exports = { init, path: "/api/competences/hard" }


