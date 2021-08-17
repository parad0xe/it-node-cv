require('express')

const CompetenceHard = require('./../../models/CompetenceHard.js')

/**
 * @param {Express} app
 */
const init = (app) => {
    app.get("/api/competences/hard", (req, res, next) => {
        CompetenceHard.find().then((competence) => {
            res.status(200).json(competence)
        })
    })

    app.post("/api/competences/hard", (req, res, next) => {
        const competence = new CompetenceHard({ ...req.body })

        competence.save().then(() => {
            res.status(201).json({ message: "Competence successfully inserted." })
        }).catch(() => {
            res.status(400).json({ message: "Failed to insert competence." })
        })
    })

    app.put("/api/competences/hard/:id", (req, res, next) => {
        CompetenceHard.findByIdAndUpdate(req.params.id, { ...req.body }, (err, competence) => {
            if(!err && competence) {
                res.status(200).json({ message: "Competence successfully updated." })
            } else {
                res.status(400).json({ message: "Failed to update competence." })
            }
        })
    })

    app.delete("/api/competences/hard/:id", (req, res, next) => {
        CompetenceHard.findByIdAndDelete(req.params.id, { ...req.body }, (err, competence) => {
            if(!err && competence) {
                res.status(200).json({ message: "Competence successfully deleted." })
            } else {
                res.status(400).json({ message: "Failed to delete competence." })
            }
        })
    })
}

module.exports = { init }


