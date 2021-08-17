require('express')

const HeaderController = require('./../../controllers/api/HeaderController.js')

/**
 * @param {e.Router} router
 */
const init = (router) => {
    router.get("/", HeaderController.get)
    router.put("/:id", HeaderController.put)
}

module.exports = { init, path: "/api/header" }


