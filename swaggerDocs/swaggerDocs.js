import swagger from 'swagger-jsdoc';
const swaggerJSDoc = swagger;

// Avec destructuring
import { serve, setup } from 'swagger-ui-express';
import { swaggerDarkCss } from './swagger-utils/swaggerDark.js';
import { users, userId } from './user.js';
import { brands, brandId } from './brand.js';
import { cars, carId } from './car.js';
import { networks, networkId } from './network.js';
import { stations, stationId } from './station.js';
import { locations, locationId } from './location.js';
import { interestings, interestingId } from './interesting.js';
import{ categories, categoryId } from './categories.js';
import { roads, roadId } from './road.js';

import { components } from './swagger-utils/swaggerComponents.js';
import { brands } from './brand.js';

const options = {

    definition: {

        // Les informations principales
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'SwaggerDocs API E-CO ROADS',
            description: `Documentation for Swagger api related routes`,
            license: {
                name: 'MIT'
            },
        },

        // Les liens extérieurs
        externalDocs: {
            description : 'API E-CO ROADS work in progress',
            url: 'https://eco-roads.herokuapp.com/',
        },
    
        // Tous les serveurs
        servers: [
            {
                url: 'https://eco-roads.herokuapp.com/api/v1',
                description: 'API v1'
            },
            {
                url: 'https://eco-roads.herokuapp.com/api/v2',
                description: 'API v2'
            }
        ],
    
        // Tous les chemins ( GET / POST / PATCH / DELETE )
        paths: {

            //~ ------------- USERS
            '/users' : users,
            '/users/{id}' : userId,
            
            //~ ------------- BRANDS
            '/brands' : brands,
            '/brand/{id}' : brandId,

            //~ ------------- CARS
            '/cars' : cars,
            '/car/{id}' : carId,

            //~ ------------- NETWORKS
            '/networks' : networks,
            '/network/{id}' : networkId,

            //~ ------------- STATIONS
            '/stations' : stations,
            '/station/{id}' : stationId,

            //~ ------------- INTERESTING_POINTS
            '/interestings' : interestings,
            '/interesting/{id}' : interestingId,

            //~ ------------- LOCATIONS
            '/locations' : locations,
            '/location/{id}' : locationId,
            //~ ------------- CATEGORIES
            '/categories' : categories,
            '/category/{id}' : categoryId,

            //~ ------------- ROADS
            '/roads': roads,
            '/road/{id}': roadId,

        
        },
        // Tous les schemas
        components,

        // securitySchemes: {
        //     api_key: {
        //         type: 'apiKey',
        //         name: 'api_key',
        //         in: 'header'
        //     },
        // }
    },

    apis: ['./app/router/*.js'] 
    // Equivalent à 
    // apis: ['./*/*/*.js']

};

const specs = swaggerJSDoc(options);

const cssOptions = {
    customCss :swaggerDarkCss,
    customSiteTitle: "API_ECO-ROADS"
}

export { specs, serve, setup, cssOptions };