//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { InterestingProperties, InterestingExample } from './swagger-utils/ecoExample.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const interestings = {
//~ --------------------------------------------- FETCH ALL INTERESTING_POINTS
get: {
    tags: ['Interesting points'],
    summary: 'Interesting points recovery',
    responses: {
        200: {
            description: 'Successful request',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: InterestingProperties,
                        example: InterestingExample
                    }
                }
            }
        },
        404: error404
    }
},

//~ --------------------------------------------- CREATE INTERESTING_POINT
post: {
    tags: ['Interesting points'],
    summary: `Creation of a new Interesting point`,
    responses: {
        201: {
            description: 'Successful request and Interesting point created',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: InterestingProperties,
                        example: InterestingExample
                    }
                }
            }
        },
        400: error400
    }
}
};

const interestingId = {
//~ --------------------------------------------- FETCH ONE INTERESTING_POINT
get: {
    tags: ['Interesting points'],
    summary: `Retrieve the Interesting point by his Id`,
    parameters: [
        {
            name: 'id',
            in: 'params',
            required: true,
            schema: {
                type: 'integer',
                example: 1
            },
            description: 'Id to retrieve a Interesting point'
        }
    ],
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: InterestingProperties,
                        example: InterestingExample
                    }
                }
            },
            description: `Successful request`
        },

        400: error400,
        404: error404
    }
},

//~ ------------------------------------------------------------------- UPDATE INTERESTING_POINT
patch: {
    tags: ['Interesting points'],
    summary: `Updating Interesting point Information`,
    parameters: [
        {
            name: 'id',
            in: 'params',
            required: true,
            schema: {
                type: 'integer',
                example: 1
            },
            description: 'Id to update a Interesting point'
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

//~ --------------------------------------------- DELETE INTERESTING_POINT
delete: {
    tags: ['Interesting points'],
    summary: `Deleting a Interesting point`,
    parameters: [
        {
            name: 'id',
            in: 'params',
            required: true,
            schema: {
                type: 'integer',
                example: 1
            },
            description: 'Id to delete a Interesting point'
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

export { interestings, interestingId };