require('express')

const ExperienceDev = require('./../../models/ExperienceDev.js')

exports.get = (req, res, next) => {
    ExperienceDev.find().then((experience) => {
        res.status(200).json(experience)
    })
}

exports.post = (req, res, next) => {
    const experience = new ExperienceDev({ ...req.body })

    experience.save().then(() => {
        res.status(201).json({ message: "Experience successfully inserted." })
    }).catch(() => {
        res.status(400).json({ message: "Failed to insert experience." })
    })
}

exports.put = (req, res, next) => {
    ExperienceDev.findByIdAndUpdate(req.params.id, { ...req.body }, (err, experience) => {
        if(!err && experience) {
            res.status(200).json({ message: "Experience successfully updated." })
        } else {
            res.status(400).json({ message: "Failed to update experience." })
        }
    })
}

exports.delete = (req, res, next) => {
    ExperienceDev.findByIdAndDelete(req.params.id, { ...req.body }, (err, experience) => {
        if(!err && experience) {
            res.status(200).json({ message: "Experience successfully deleted." })
        } else {
            res.status(400).json({ message: "Failed to delete experience." })
        }
    })
}


