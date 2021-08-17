require('express')

const Header = require('./../../models/Header.js')

/**
 * @param {Express} app
 */
const init = (app) => {
    app.get("/api/header", (req, res, next) => {
        Header.find().then((headers) => {
            res.status(200).json(headers)
        })
    })

    app.put("/api/header/:id", (req, res, next) => {
        Header.findByIdAndUpdate(req.params.id, { ...req.body }, (err, header) => {
            if(!err && header) {
                res.status(200).json({ message: "Header successfully updated." })
            } else {
                res.status(400).json({ message: "Failed to update header." })
            }
        })
    })
}

module.exports = { init }


