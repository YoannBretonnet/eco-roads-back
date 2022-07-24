//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { stationProperties, stationExample } from './swagger-utils/ecoExample.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const stations = {
    //~ --------------------------------------------- FETCH ALL STATIONS
    get: {
        tags: ['Stations'],
        summary: 'Charging stations recovery',
        responses: {
            200: {
                description: 'Successful request',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: stationProperties,
                            example: stationExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ --------------------------------------------- CREATE STATION
    post: {
        tags: ['Stations'],
        summary: `Creation of a new station`,
        responses: {
            201: {
                description: 'Successful request and station created',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: stationProperties,
                            example: stationExample
                        }
                    }
                }
            },
            400: error400
        }
    }
};

const stationId = {
    //~ --------------------------------------------- FETCH ONE STATION
    get: {
        tags: ['Stations'],
        summary: `Retrieve the charging station by Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to retrieve a charging station'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: stationProperties,
                            example: stationExample
                        }
                    }
                },
                description: `Successful request`
            },

            400: error400,
            404: error404
        }
    },

    //~ ------------------------------------------------------------------- UPDATE CHARGING_STATION
    patch: {
        tags: ['Stations'],
        summary: `Updating Station Information`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to update a charging station'
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

    //~ --------------------------------------------- DELETE CHARGING_STATION
    delete: {
        tags: ['Stations'],
        summary: `Deleting a charging station`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to delete a charging station'
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

export { stations, stationId };