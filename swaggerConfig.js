const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Contatos',
            description: 'Uma API para gerenciar contatos',
            version: '1.0.0',
            contact: {
                name: "Emerson Santos",
                email: "emerson.matosokl10@gmail.com",
                url: "https://emersonsantos98.github.io/"
            }
        },
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            format: 'int64',
                            description: 'ID do usuário',
                            example: 1,
                        },
                        firstName: {
                            type: 'string',
                            description: 'Primeiro nome do usuário',
                            example: 'João',
                        },
                        lastName: {
                            type: 'string',
                            description: 'Sobrenome do usuário',
                            example: 'Silva',
                        },
                        email: {
                            type: 'string',
                            description: 'E-mail do usuário',
                            example: 'joao.silva@gmail.com',
                        },
                        password: {
                            type: 'string',
                            description: 'Senha do usuário',
                            example: '123456',
                        },
                        role: {
                            type: 'string',
                            description: 'Função do usuário',
                            example: 'admin',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Data de criação do usuário',
                            example: '2022-05-01T12:00:00Z',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Data da última atualização do usuário',
                            example: '2022-05-01T14:00:00Z',
                        },
                    },
                },
            },
        },
        servers: [
            {
                url: `${process.env.BASE_URL}`,

            },
        ],
    },
    apis: ['./Api/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
