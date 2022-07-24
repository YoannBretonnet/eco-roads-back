const error400 = {
    description: `Bad request. It must be a uuid type id`,
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: { Error: { type: 'string' } },
                example: { 'Error 400': 'Bad request' }
            }
        }
    }
}

const error401 = {
    description: 'Unauthorized',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: { Error: { type: 'string' } },
                example: { 'Error 401': 'Missing information' }
            }
        }
    }
}

const error403 = {
    description: 'Forbidden',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: { Error: { type: 'string' } },
                example: { 'Error 404': 'Unauthorized access' }
            }
        }
    }
}

const error404 = {
    description: 'Data not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: { Error: { type: 'string' } },
                example: { 'Error 404': 'Data not found' }
            }
        }
    }
}


export { error400, error401, error403, error404 };