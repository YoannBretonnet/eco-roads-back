//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { RoadProperties, RoadExample } from './swagger-utils/ecoExample.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const roads = {
    //~ --------------------------------------------- FETCH ALL ROADS
    get: {
        tags: ['Roads'],
        summary: 'Roads recovery',
        responses: {
            200: {
                description: 'Successful request',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: RoadProperties,
                            example: RoadExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ --------------------------------------------- CREATE ROAD
    post: {
        tags: ['Roads'],
        summary: `Creation of a new road`,
        responses: {
            201: {
                description: 'Successful request and road created',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: RoadProperties,
                            example: RoadExample
                        }
                    }
                }
            },
            400: error400
        }
    }
};

const roadId = {
    //~ --------------------------------------------- FETCH ONE ROAD
    get: {
        tags: ['Roads'],
        summary: `Retrieve the road by Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to retrieve a road'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: RoadProperties,
                            example: RoadExample
                        }
                    }
                },
                description: `Successful request`
            },

            400: error400,
            404: error404
        }
    },

    //~ ------------------------------------------------------------------- UPDATE ROAD
    patch: {
        tags: ['Roads'],
        summary: `Updating road`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to update a road'
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
                                message: 'La donnée à bien été modifiée'
                            }
                        }
                    }
                }
            },
            400: error400,
            404: error404
        }
    },

    //~ --------------------------------------------- DELETE ROAD
    delete: {
        tags: ['Roads'],
        summary: `Deleting a road`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to delete a road'
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

export { roads, roadId };