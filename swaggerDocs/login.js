//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { UserProperties, UserExample } from './swagger-utils/ecoExample.js';
import { error403, error404 } from './swagger-utils/swaggerStatus.js';


const loginId = {
    //~ --------------------------------------------- FETCH ONE USER
        post: {
        tags: ['User'],
        summary: `Retrieve the user by his Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'uuid',
                    example: '63d7ff14-698c-4e20-b5a3-9563b4855929'
                },
                description: 'UUID to retrieve a user'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: UserProperties,
                            example: UserExample
                        }
                    }
                },
                description: `Successful request`
            },

            403: error403,
            404: error404
        }
    }


};

export { loginId };