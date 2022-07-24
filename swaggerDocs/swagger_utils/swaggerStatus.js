const error400 = {
    description: `Bad request. The Id must be an integer and greater than 0`,
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


export { error400, error404 };