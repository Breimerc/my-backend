'use strict';

const Joi = require('joi');
const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const { cbackUsers } = require('../controllers/users');



module.exports = () => {

    router.get('/users', 
        validator.query(
            Joi.object({
                number: Joi.number().required(),
                token: Joi.string().required()
            }),
        ), 
        validator.body(
            Joi.object({
                name: Joi.string().required(),
                celphone:Joi.string().required()
            })
        ),
        cbackUsers
    );
    
    return router;
}

//http://localhost:3030/users?number=1&token=HJGbhg
/*
{
    "name":"Christopher",
    "celphone" : "+502 45899016"
}*/