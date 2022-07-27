//~ ------------------------------ USERS

const UserExample = {
    id: 'uuid',
    email: 'string',
    password: 'string',
    username: 'string',
};

const UserProperties = {
    id: { type: 'uuid' },
    email: { type: 'string' },
    password: { type: 'string' },
    username: { type: 'string' },
    location_id: { type: 'integer' },
    car_id: { type: 'integer' },
    category_id: { type: 'integer' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};

//~ ------------------------------ LOGIN

const LoginExample = {
    id: 'integer',
    email: 'string',
    password: 'string'
}; 

const LoginProperties = {
    id: { type: 'integer' },
    email: { type: 'string' },
    password: { type: 'string' }
};

//~ ------------------------------ BRANDS

const BrandExample = {
    id: 'integer',
    name: 'string',
    created_at: 'string',
    updated_at: 'string'
};

const BrandProperties = {
    id: { type: 'integer' },
    name: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};


//~ ------------------------------ CAR

const CarExample = {
    id: 'integer',
    brand_id: 'integer',
    model: 'string',
    image: 'string',
    network_id: 'integer',
    created_at: 'string',
    updated_at: 'string'
};

const CarProperties = {
    id: { type: 'integer' },
    brand_id: { type: 'integer' },
    model: { type: 'string' },
    image: { type: 'string' },
    network_id: { type:'integer' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};

//~ ------------------------------ NETWORK

const NetworkExample = {
    id: 'integer',
    name: 'string',
    created_at: 'string',
    updated_at: 'string'
};

const NetworkProperties = {
    id: { type: 'integer' },
    name: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};

//~ ------------------------------ CHARGING_STATION

const StationExample = {
    id: 'integer',
    location: 'json',
    network_id: 'integer',
    created_at: 'string',
    updated_at: 'string'
};

const StationProperties = {
    id: { type: 'integer' },
    location: { type: 'json' },
    network_id: { type:'integer' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};

//~ ------------------------------ CATEGORY

const CategoryExample = {
    id: 'integer',
    name: 'string',
    created_at: 'string',
    updated_at: 'string'
};

const CategoryProperties = {
    id: { type: 'integer' },
    name: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};

//~ ------------------------------ INTERESTING_POINT

const InterestingExample = {
    id: 'integer',
    name: 'string',
    description: 'string',
    location: 'integer',
    ecoFriendly: 'boolean',
    created_at: 'string',
    updated_at: 'string'
};

const InterestingProperties = {
    id: { type: 'integer' },
    name: { type: 'string' },
    description: { type: 'string' },
    location: { type: 'integer' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};

//~ ------------------------------ ROAD

const RoadExample = {
    id: 'integer',
    favorite: 'boolean',
    generated_road: 'array',
    user_id: 'integer',
    created_at: 'string',
    updated_at: 'string'
};

const RoadProperties = {
    id: { type: 'integer' },
    favorite: { type: 'boolean' },
    generated_road: { type: 'array' },
    user_id: { type: 'integer' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};

const LocationExample = {
    id: 'integer',
    lat: "numeric",
    lon: "numeric",
    created_at: 'string', 
    updated_at: 'string'
};

const LocationProperties = {
    id: { type: 'integer' },
    lat: { type: 'numeric' },
    lat: { type: 'numeric' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};

export { UserExample, UserProperties,
        LoginExample, LoginProperties,
        BrandExample, BrandProperties,
        CarExample, CarProperties, 
        NetworkExample, NetworkProperties, 
        StationExample, StationProperties, 
        CategoryExample, CategoryProperties, 
        InterestingExample, InterestingProperties,
        RoadExample, RoadProperties,
        LocationExample, LocationProperties
    };