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
                Users: {
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
                Contacts: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            format: 'int64',
                            description: 'ID do contato',
                            example: 1,
                        },
                        name: {
                            type: 'string',
                            description: 'Nome do contato',
                            example: 'Jhon Doe',
                        },
                        company: {
                            type: 'string',
                            description: 'Empresa do contato',
                            example: 'Empresa',
                        },
                        email: {
                            type: 'string',
                            description: 'E-mail do contato',
                            example: 'jhon_doe@gmail.com',
                        },
                        telefone: {
                            type: 'string',
                            description: 'Telefone do contato',
                            example: '123456789',
                        },
                        titulo: {
                            type: 'string',
                            description: 'Titulo do contato',
                            example: 'Gerente',
                        },
                        photo: {
                            type: 'string',
                            description: 'Foto do contato',
                            example: 'https://www.google.com.br',
                        },
                        groupId: {
                            type: 'integer',
                            format: 'int64',
                            description: 'ID do groupsRoutes',
                            example: 1,
                        },
                        userId: {
                            type: 'integer',
                            format: 'int64',
                            description: 'ID do usuário',
                            example: 1,
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Data de criação do contato',
                            example: '2022-05-01T12:00:00Z',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Data da última atualização do contato',
                            example: '2022-05-01T14:00:00Z',
                        },
                    },
                },
                Groups: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            format: 'int64',
                            description: 'ID do groupsRoutes',
                            example: 1,
                        },
                        name: {
                            type: 'string',
                            description: 'Nome do groupsRoutes',
                            example: 'Grupo 1',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Data de criação do groupsRoutes',
                            example: '2022-05-01T12:00:00Z',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Data da última atualização do groupsRoutes',
                            example: '2022-05-01T14:00:00Z',
                        },
                    },
                },
                Auth: {
                    type: 'object',
                    properties: {
                        user: {
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
                                    example: 'joão@gmail.com',
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

                    }
                }
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
