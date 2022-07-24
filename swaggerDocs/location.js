//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { LocationProperties, LocationExample } from './swagger-utils/ecoExample.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const locations = {
    //~ --------------------------------------------- FETCH ALL LOCATIONS
    get: {
        tags: ['Locations'],
        summary: 'Locations recovery',
        responses: {
            200: {
                description: 'Successful requestessful request',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: LocationProperties,
                            example: LocationExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ --------------------------------------------- CREATE LOCATION
    post: {
        tags: ['Locations'],
        summary: `Creation of a new Location`,
        responses: {
            201: {
                description: 'Successful requestessful request and Location created',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: LocationProperties,
                            example: LocationExample
                        }
                    }
                }
            },
            400: error400
        }
    }
};

const locationId = {
    //~ --------------------------------------------- FETCH ONE LOCATION
    get: {
        tags: ['Locations'],
        summary: `Retrieve the Location by his Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to retrieve a Location'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: LocationProperties,
                            example: LocationExample
                        }
                    }
                },
                description: `Successful request`
            },

            400: error400,
            404: error404
        }
    },

    //~ ------------------------------------------------------------------- UPDATE LOCATION
    patch: {
        tags: ['Locations'],
        summary: `Updating Location Information`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to update a Location'
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

    //~ --------------------------------------------- DELETE LOCATION
    delete: {
        tags: ['Locations'],
        summary: `Deleting a Location`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to delete a Location'
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

export { locations, locationId };