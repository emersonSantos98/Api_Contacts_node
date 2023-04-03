const express = require('express');
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swaggerConfig');
const routes = require('./routes')

class App {
    server;
    constructor( ) {
        this.server = express()
        this.middlewares()
        this.router()
    }

    middlewares() {
        this.server.use(cors({
            origin: 'https://meusite.com',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }));

        this.server.use(express.json())
        this.server.use(express.urlencoded({
            extended: true
        }))

        this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    }

    router(){
        this.server.use('/api/v1', routes)
    }


}

module.exports = new App()
