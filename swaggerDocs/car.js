//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { CarProperties, CarExample } from './swagger-utils/ecoExample.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const cars = {
    //~ --------------------------------------------- FETCH ALL CARS
    get: {
        tags: ['Cars'],
        summary: 'Car recovery',
        responses: {
            200: {
                description: 'Successful request',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: CarProperties,
                            example: CarExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ --------------------------------------------- CREATE CAR
    post: {
        tags: ['Cars'],
        summary: `Creation of car`,
        responses: {
            201: {
                description: 'Successful request and car created',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: CarProperties,
                            example: CarExample
                        }
                    }
                }
            },
            400: error400
        }
    }
};

const carId = {
    //~ --------------------------------------------- FETCH ONE CAR
    get: {
        tags: ['Cars'],
        summary: `Retrieve the car by his Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to retrieve a car'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: CarProperties,
                            example: CarExample
                        }
                    }
                },
                description: `Successful request`
            },

            400: error400,
            404: error404
        }
    },

    //~ ------------------------------------------------------------------- UPDATE CAR
    patch: {
        tags: ['Cars'],
        summary: `Updating car Information`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to update a car'
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

    //~ --------------------------------------------- DELETE CAR
    delete: {
        tags: ['Cars'],
        summary: `Deleting a car`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to delete a car'
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

export { cars, carId };