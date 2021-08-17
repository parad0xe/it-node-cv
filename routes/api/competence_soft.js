require('express')

const CompetenceSoftController = require('./../../controllers/api/CompetenceSoftController.js')

/**
 * @param {e.Router} router
 */
const init = (router) => {
    router.get("/", CompetenceSoftController.get)
    router.post("/", CompetenceSoftController.post)
    router.put("/:id", CompetenceSoftController.put)
    router.delete("/:id", CompetenceSoftController.delete)
}

module.exports = { init, path: "/api/competences/soft" }


