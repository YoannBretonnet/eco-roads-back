import Joi from "joi";
// const Joi = joi;

const userSchema = Joi.object({
    email: Joi.string().min(4).max(255).required().email(),
    //* TESTING WITH OPTION 4 CHARACTER SET 8 FOR DEPLOY
    password: Joi.string().min(6).max(255).uppercase(1).regex(/^[a-zA-Z0-9!@#$%&*]{3,30}$/).required(),
    username: Joi.string().min(3).required(),
    location_id: Joi.number().integer(),
    car_id: Joi.number().integer()
});

// const regex = regex(/^0[1-9]\d{3}/)
// .regex(/^[1-8]\d{4}/).regex(/^9[0-6]\d{3}/)

const location = Joi.object({
    address: Joi.string().required(),
    street_number: Joi.number().integer(),
    zipcode: Joi.number().min(5).required(),
    city: Joi.string().required(),
    lat: Joi.number().required(),
    lon: Joi.number().required()

})

const usernameSchema = Joi.string().regex(/^[a-zA-Z0-9]{3,25}$/).required()

export {  userSchema, location, usernameSchema };
