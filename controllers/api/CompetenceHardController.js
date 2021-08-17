require('express')

const CompetenceHard = require('./../../models/CompetenceHard.js')

exports.get = (req, res, next) => {
    CompetenceHard.find().then((competence) => {
        res.status(200).json(competence)
    })
}

exports.post = (req, res, next) => {
    const competence = new CompetenceHard({ ...req.body })

    competence.save().then(() => {
        res.status(201).json({ message: "Competence successfully inserted." })
    }).catch(() => {
        res.status(400).json({ message: "Failed to insert competence." })
    })
}

exports.put = (req, res, next) => {
    CompetenceHard.findByIdAndUpdate(req.params.id, { ...req.body }, (err, competence) => {
        if(!err && competence) {
            res.status(200).json({ message: "Competence successfully updated." })
        } else {
            res.status(400).json({ message: "Failed to update competence." })
        }
    })
}

exports.delete = (req, res, next) => {
    CompetenceHard.findByIdAndDelete(req.params.id, { ...req.body }, (err, competence) => {
        if(!err && competence) {
            res.status(200).json({ message: "Competence successfully deleted." })
        } else {
            res.status(400).json({ message: "Failed to delete competence." })
        }
    })
}


