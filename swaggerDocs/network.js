//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { NetworkProperties, NetworkExample } from './swagger-utils/ecoExample.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const networks = {
    //~ --------------------------------------------- FETCH ALL NETWORKS
    get: {
        tags: ['Networks'],
        summary: 'Network recovery',
        responses: {
            200: {
                description: 'Successful request',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: NetworkProperties,
                            example: NetworkExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ --------------------------------------------- CREATE NETWORK
    post: {
        tags: ['Networks'],
        summary: `Creation of a new Network`,
        responses: {
            201: {
                description: 'Successful request and Network created',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: NetworkProperties,
                            example: NetworkExample
                        }
                    }
                }
            },
            400: error400
        }
    }
};

const networkId = {
    //~ --------------------------------------------- FETCH ONE NETWORK
    get: {
        tags: ['Networks'],
        summary: `Retrieve the Network by his Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to retrieve a Network'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: NetworkProperties,
                            example: NetworkExample
                        }
                    }
                },
                description: `Successful request`
            },

            400: error400,
            404: error404
        }
    },

    //~ ------------------------------------------------------------------- UPDATE NETWORK
    patch: {
        tags: ['Networks'],
        summary: `Updating Network Information`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to update a Network'
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

    //~ --------------------------------------------- DELETE NETWORK
    delete: {
        tags: ['Networks'],
        summary: `Deleting a Network`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to delete a Network'
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

export { networks, networkId };