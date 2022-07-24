//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { UserProperties, UserExample } from './swagger-utils/ecoExample.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const users = {
    //~ --------------------------------------------- FETCH ALL USERS
    get: {
        tags: ['Users'],
        summary: 'User recovery',
        responses: {
            200: {
                description: 'Successful requestessful request',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: UserProperties,
                            example: UserExample
                        }
                    }
                }
            },
            404: error404
        }
    }

};

const userId = {
    //~ --------------------------------------------- FETCH ONE USER
    get: {
        tags: ['User'],
        summary: `Retrieve the user by his Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'uuid',
                    example: '63d7ff14-698c-4e20-b5a3-9563b4855929'
                },
                description: 'UUID to retrieve a user'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: UserProperties,
                            example: UserExample
                        }
                    }
                },
                description: `Successful request`
            },

            400: error400,
            404: error404
        }
    },

    
    //~ --------------------------------------------- CREATE USER
    post: {
        tags: ['User'],
        summary: `Creation of a new user`,
        responses: {
            201: {
                description: 'Successful requestessful request and user created',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: UserProperties,
                            example: UserExample
                        }
                    }
                }
            },
            400: error400
        }
    },

    //~ ------------------------------------------------------------------- UPDATE USER
    patch: {
        tags: ['User'],
        summary: `Updating user Information`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'uuid',
                    example: '63d7ff14-698c-4e20-b5a3-9563b4855929'
                },
                description: 'UUID to update a user'
            }
        ],
        responses: {
            200: {
                description: 'Successful request',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: { message: { type: 'string' } },
                            example: {
                                message: 'The data has been modified'
                            }
                        }
                    }
                }
            },
            400: error400,
            404: error404
        }
    },

    //~ --------------------------------------------- DELETE USER
    delete: {
        tags: ['User'],
        summary: `Deleting a user`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'uuid',
                    example: '63d7ff14-698c-4e20-b5a3-9563b4855929'
                },
                description: 'UUID to delete a user'
            }
        ],
        responses: {
            200: {
                description: 'Successful request',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: { message: { type: 'string' } },
                            example: {
                                message: 'The data has been deleted'
                            }
                        }
                    }
                }
            },
            400: error400,
            404: error404
        }
    }
};

export { users, userId };