require('express')

const Formation = require('./../../models/Formation.js')

exports.get = (req, res, next) => {
    Formation.find().then((formations) => {
        res.status(200).json(formations)
    })
}

exports.post = (req, res, next) => {
    const formation = new Formation({ ...req.body })

    formation.save().then(() => {
        res.status(201).json({ message: "Formation successfully inserted." })
    }).catch(() => {
        res.status(400).json({ message: "Failed to insert formation." })
    })
}

exports.put = (req, res, next) => {
    Formation.findByIdAndUpdate(req.params.id, { ...req.body }, (err, formation) => {
        if(!err && formation) {
            res.status(200).json({ message: "Formation successfully updated." })
        } else {
            res.status(400).json({ message: "Failed to update formation." })
        }
    })
}

exports.delete = (req, res, next) => {
    Formation.findByIdAndDelete(req.params.id, { ...req.body }, (err, formation) => {
        if(!err && formation) {
            res.status(200).json({ message: "Formation successfully deleted." })
        } else {
            res.status(400).json({ message: "Failed to delete formation." })
        }
    })
}


