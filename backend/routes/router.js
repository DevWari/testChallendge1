const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


/**
 *@swagger 
 * /api/get-user-info:
 *   get:
 *     summary: Get All Users
 *     description: Get All Users
 *     responses:
 *       '200': 
 *         content:
 *            application/json:
 *              schema:
 *                type: Object
 *                properties: 
 *                  results:
 *                    type: array
 *                    description: an array of all users
 *                    properties: 
 *                      gender:
 *                        type: string
 *                        description: a gender of user
 *                        example: male
 *                      name:
 *                        type: object
 *                        description: name object of a user
 *                        properties:
 *                          title:
 *                            type: string
 *                            description: title of a user
 *                            example: Mamdame
 *                          first:
 *                            type: string
 *                            description: first name of a user
 *                            example: Romana
 *                          last:
 *                            type: string
 *                            description: last name of a user
 *                            example: Francois
 *                      location:
 *                        type: object
 *                        description: location information of a user
 *                        properties:
 *                          street:
 *                            type: object
 *                            description: street of a user
 *                            properties:
 *                              number:
 *                                type: Number
 *                                description: the number of a street
 *                                example: 3471
 *                              name:
 *                                type: string
 *                                description: the name of a street
 *                                example: Rue Dubois
 *                          city:
 *                            type: string
 *                            description: the name of a city
 *                            example: Brütten
 * 
 * 
 * 
 * 
 * 
 */                      



router.get('/get-user-info', userController.getUserInfo)

module.exports = router;