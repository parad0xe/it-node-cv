require('express')

const ExperienceDevController = require('./../../controllers/api/ExperienceDevController.js')

/**
 * @param {e.Router} router
 */
const init = (router) => {
    router.get("/", ExperienceDevController.get)
    router.post("/", ExperienceDevController.post)
    router.put("/:id", ExperienceDevController.put)
    router.delete("/:id", ExperienceDevController.delete)
}

module.exports = { init, path: "/api/experience/devexp" }


