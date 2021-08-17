require('express')

const glob = require("glob");

/**
 * @param {Express} app
 */
const load = (app) => {
    glob('./routes/**/*.js', (err, files) => {
        files.map((file) => {
            const route = require(file)

            if(route.init !== undefined) {
                route.init(app)
            } else {
                console.error(`File ${file} has not exported 'init' function`)
            }
        })
    })
}

module.exports = { load }
