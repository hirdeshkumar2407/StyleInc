/* eslint-disable no-undef */
const joi = require("joi");

const schema = {
    user: joi.object({
        name: joi.string().max(20).required(),
        email: joi.string().email().required(),
        //miminum 5 characters
        password: joi.string().min(5).required()
    })
};

module.exports = schema;