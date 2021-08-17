const express = require('express')

const glob = require("glob");

/**
 * @param {Express} app
 */
const load = (app) => {
    glob('./routes/**/*.js', (err, files) => {
        files.map((file) => {
            const route = require(file)
            const router = express.Router()

            if(route.path === undefined) {
                console.error(`File ${file} has not exported 'path' property`)
                return
            }

            if(route.init === undefined) {
                console.error(`File ${file} has not exported 'init' property`)
                return
            }

            route.init(router)

            app.use(route.path, router)
        })
    })
}

module.exports = { load }
