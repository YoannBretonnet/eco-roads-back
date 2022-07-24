import { UserProperties,BrandProperties,  CarProperties, NetworkProperties, CategoryProperties, LocationProperties, StationProperties, RoadProperties, InterestingProperties } from './ecoExample.js';

const components = {
    schemas: {
        StatusErrors: {
            type: 'object',
            properties: {
                code: {
                    type: 'integer',
                },
                message: {
                    type: 'string'
                }
            }
        },
        //~ 
        Users: {
            type: 'object',
            properties: UserProperties
        },
        Brands: {
            type: 'object',
            properties: BrandProperties
        },
        Cars: {
            type: 'object',
            properties: CarProperties
        },
        Networks: {
            type: 'object',
            properties: NetworkProperties
        },
        Categories: {
            type: 'object',
            properties: CategoryProperties
        }, 
        Stations: {
            type: 'object',
            properties: StationProperties
        },
        Roads: {
            type: 'object',
            properties: RoadProperties
        }, 
        Interesting_points: {
            type: 'object',
            properties: InterestingProperties
        },
        Locations: {
            type: 'object',
            properties: LocationProperties
        }
    }
};

export { components };
