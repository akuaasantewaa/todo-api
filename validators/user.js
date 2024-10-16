import Joi from "joi";

export const registerUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const loginUservalidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})
