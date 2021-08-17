require('express')

const CompetenceSoft = require('./../../models/CompetenceSoft.js')

/**
 * @param {Express} app
 */
const init = (app) => {
    app.get("/api/competences/soft", (req, res, next) => {
        CompetenceSoft.find().then((competence) => {
            res.status(200).json(competence)
        })
    })

    app.post("/api/competences/soft", (req, res, next) => {
        const competence = new CompetenceSoft({ ...req.body })

        competence.save().then(() => {
            res.status(201).json({ message: "Competence successfully inserted." })
        }).catch(() => {
            res.status(400).json({ message: "Failed to insert competence." })
        })
    })

    app.put("/api/competences/soft/:id", (req, res, next) => {
        CompetenceSoft.findByIdAndUpdate(req.params.id, { ...req.body }, (err, competence) => {
            if(!err && competence) {
                res.status(200).json({ message: "Competence successfully updated." })
            } else {
                res.status(400).json({ message: "Failed to update competence." })
            }
        })
    })

    app.delete("/api/competences/soft/:id", (req, res, next) => {
        CompetenceSoft.findByIdAndDelete(req.params.id, { ...req.body }, (err, competence) => {
            if(!err && competence) {
                res.status(200).json({ message: "Competence successfully deleted." })
            } else {
                res.status(400).json({ message: "Failed to delete competence." })
            }
        })
    })
}

module.exports = { init }


