const express = require('express')
const { GetAll, PostOne,GetOne } = require('../controllers/inscription.controller')
const RouteApp = express.Router()

RouteApp.route('/users').get(GetAll).post(PostOne)
RouteApp.route('/user').post(GetOne)

module.exports = RouteApp