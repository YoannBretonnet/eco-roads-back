//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { BrandProperties, BrandExample } from './swagger-utils/ecoExample.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const brands = {
    //~ --------------------------------------------- FETCH ALL BRANDS
    get: {
        tags: ['Brands'],
        summary: 'Recovery of car brands',
        responses: {
            200: {
                description: 'Successful request',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: BrandProperties,
                            example: BrandExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ --------------------------------------------- CREATE BRAND
    post: {
        tags: ['Brands'],
        summary: `Creation of brand`,
        responses: {
            201: {
                description: 'Successful request and brand created',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: BrandProperties,
                            example: BrandExample
                        }
                    }
                }
            },
            400: error400
        }
    }
};

const brandId = {
    //~ --------------------------------------------- FETCH ONE BRAND
    get: {
        tags: ['Brands'],
        summary: `Retrieve the brand by his Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to retrieve a brand'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: BrandProperties,
                            example: BrandExample
                        }
                    }
                },
                description: `Successful request`
            },

            400: error400,
            404: error404
        }
    },

    //~ ------------------------------------------------------------------- UPDATE BRAND
    patch: {
        tags: ['Brands'],
        summary: `Updating brand Information`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to update a brand'
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

    //~ --------------------------------------------- DELETE BRAND
    delete: {
        tags: ['Brands'],
        summary: `Deleting a brand`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id to delete a brand'
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

export { brands, brandId };