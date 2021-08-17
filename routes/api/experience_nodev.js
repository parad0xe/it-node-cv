require('express')

const ExperienceNoDev = require('./../../models/ExperienceNoDev.js')

/**
 * @param {Express} app
 */
const init = (app) => {
    app.get("/api/experience/nodevexp", (req, res, next) => {
        ExperienceNoDev.find().then((experience) => {
            res.status(200).json(experience)
        })
    })

    app.post("/api/experience/nodevexp", (req, res, next) => {
        const experience = new ExperienceNoDev({ ...req.body })

        experience.save().then(() => {
            res.status(201).json({ message: "Experience successfully inserted." })
        }).catch(() => {
            res.status(400).json({ message: "Failed to insert experience." })
        })
    })

    app.put("/api/experience/nodevexp/:id", (req, res, next) => {
        ExperienceNoDev.findByIdAndUpdate(req.params.id, { ...req.body }, (err, experience) => {
            if(!err && experience) {
                res.status(200).json({ message: "Experience successfully updated." })
            } else {
                res.status(400).json({ message: "Failed to update experience." })
            }
        })
    })

    app.delete("/api/experience/nodevexp/:id", (req, res, next) => {
        ExperienceNoDev.findByIdAndDelete(req.params.id, { ...req.body }, (err, experience) => {
            if(!err && experience) {
                res.status(200).json({ message: "Experience successfully deleted." })
            } else {
                res.status(400).json({ message: "Failed to delete experience." })
            }
        })
    })
}

module.exports = { init }


