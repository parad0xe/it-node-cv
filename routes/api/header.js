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
}

module.exports = { init }


