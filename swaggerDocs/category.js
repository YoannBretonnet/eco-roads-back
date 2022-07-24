//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { CategoryProperties, CategoryExample } from './swagger-utils/ecoExample.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const categories = {

        //~ --------------------------------------------- FETCH ALL CATEGORIES --------------------------------
        get: {
            tags: ['Categories'],
            summary: 'Category recovery',
            responses: {
                200: {
                    description: 'Successful requestessful request',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: CategoryProperties,
                                example: CategoryExample
                            }
                        }
                    }
                },
                404: error404
            }
        },
    
        //~ --------------------------------------------- CREATE CATEGORY
        post: {
            tags: ['Categories'],
            summary: `Creation of a new Category`,
            responses: {
                201: {
                    description: 'Successful requestessful request and Category created',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: CategoryProperties,
                                example: CategoryExample
                            }
                        }
                    }
                },
                400: error400
            }
        }
    };
    
    const categoryId = {
        //~ --------------------------------------------- FETCH ONE CATEGORY
        get: {
            tags: ['Categories'],
            summary: `Retrieve the Category by his Id`,
            parameters: [
                {
                    name: 'id',
                    in: 'params',
                    required: true,
                    schema: {
                        type: 'integer',
                        example: 1
                    },
                    description: 'Id to retrieve a Category'
                }
            ],
            responses: {
                200: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: CategoryProperties,
                                example: CategoryExample
                            }
                        }
                    },
                    description: `Successful request`
                },
    
                400: error400,
                404: error404
            }
        },
    
        //~ ------------------------------------------------------------------- UPDATE CATEGORY
        patch: {
            tags: ['Categories'],
            summary: `Updating Category Information`,
            parameters: [
                {
                    name: 'id',
                    in: 'params',
                    required: true,
                    schema: {
                        type: 'integer',
                        example: 1
                    },
                    description: 'Id to update a Category'
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
    
        //~ --------------------------------------------- DELETE CATEGORY
        delete: {
            tags: ['Categories'],
            summary: `Deleting a Category`,
            parameters: [
                {
                    name: 'id',
                    in: 'params',
                    required: true,
                    schema: {
                        type: 'integer',
                        example: 1
                    },
                    description: 'Id to delete a Category'
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
    

export { categories, categoryId };