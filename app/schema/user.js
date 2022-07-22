import joi from "joi";
const Joi = joi;


const userSchema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    //* TESTING WITH OPTION 4 CHARACTER SET 8 FOR DEPLOY
    password: Joi.string().min(4).max(255).required(),
    username: Joi.string().min(3).required(),
    location_id: Joi.number().integer(),
    car_id: Joi.number().integer()
});

export {  userSchema };
