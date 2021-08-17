require('express')

const Formation = require('./../../models/Formation.js')

/**
 * @param {Express} app
 */
const init = (app) => {
    app.get("/api/formation", (req, res, next) => {
        Formation.find().then((formations) => {
            res.status(200).json(formations)
        })
    })

    app.post("/api/formation", (req, res, next) => {
        const formation = new Formation({ ...req.body })

        formation.save().then(() => {
            res.status(201).json({ message: "New formation successfully inserted." })
        }).catch(() => {
            res.status(400).json({ message: "Formation insertion failed." })
        })
    })

    app.put("/api/formation/:id", (req, res, next) => {
        Formation.findByIdAndUpdate(req.params.id, { ...req.body }, (err, formation) => {
            if(err || !formation) {
                res.status(400).json({ message: "Formation update failed." })
            } else {
                res.status(200).json({ message: "New formation successfully updated." })
            }
        })
    })
}

module.exports = { init }


