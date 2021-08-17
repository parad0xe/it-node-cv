require('express')

const ExperienceNoDevController = require('./../../controllers/api/ExperienceNoDevController.js')

/**
 * @param {e.Router} router
 */
const init = (router) => {
    router.get("/", ExperienceNoDevController.get)
    router.post("/", ExperienceNoDevController.post)
    router.put("/:id", ExperienceNoDevController.put)
    router.delete("/:id", ExperienceNoDevController.delete)
}

module.exports = { init, path: "/api/experience/nodevexp" }


