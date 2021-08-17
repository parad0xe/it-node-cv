require('express')

const FormationController = require('./../../controllers/api/FormationController.js')

/**
 * @param {e.Router} router
 */
const init = (router) => {
    router.get("/", FormationController.get)
    router.post("/", FormationController.post)
    router.put("/:id", FormationController.put)
    router.delete("/:id", FormationController.delete)
}

module.exports = { init, path: "/api/formation" }


