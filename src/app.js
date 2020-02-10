const express = require('express')

const routes = require('./routes')
const countRequests = require('./app/middlewares/countRequests')

class App {
    constructor() {
        this.server = express()

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(countRequests)
    }

    routes() {
        this.server.use(routes)
    }
}

module.exports = new App().server
