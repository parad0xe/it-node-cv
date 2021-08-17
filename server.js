const http = require("http")
const app = require('./app.js')

const normalizePort = (value) => {
    const port = parseInt(value, 10)

    if (isNaN(port) || port < 0) {
        throw new Error("Invalid port.")
    }

    return port
}

const errorHandler = (error) => {
    if (error.syscall !== "listen") {
        throw error
    }

    const address = server.address()
    const bind = typeof address === "string" ? `pipe ${address}` : `port: ${port}`

    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges.`)
            process.exit(1)
            break

        case 'EADDRINUSE':
            console.error(`${bind} is already in use.`)
            process.exit(1)
            break

        default:
            throw error
    }
}

const port = normalizePort(3000)

app.set("port", port)

const server = http.createServer(app)
server.on("error", errorHandler)
server.on("listening", () => {
    const address = server.address()
    const bind = typeof address === "string" ? `pipe ${address}` : `port: ${port}`
    console.log(`listening ${bind}`)
})
server.listen(port)
